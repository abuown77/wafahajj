"""
Wafa Hajj — put the approved frame on a video.

  python apply_frame.py "in.mp4"                       -> "in - Wafa Hajj.mp4"
  python apply_frame.py "in.mp4" --mode fill           -> full-bleed ad-reel version
  python apply_frame.py "in.mp4" --out "out.mp4" --overlay other.png

The overlay PNG describes its own geometry: the fully transparent rectangle in it IS
the window the video goes into. Nothing is hard-coded here, so re-rendering the frame
with a different window never breaks this script.

Audio is copied byte-for-byte, never re-encoded and never trimmed (owner rule: the
talbiyah call is never cut).
"""
import argparse, os, re, subprocess, sys
from PIL import Image

FFMPEG = r"C:\Users\mubar\AppData\Local\Programs\Python\Python314\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"
KIT     = r"D:\wafahajj\brand-assets\video-frame"
GREEN   = "#1E4D2B"          # brand green — what shows if a source is not 9:16


def hole_of(png):
    """The transparent rectangle inside the overlay = where the video goes."""
    im = Image.open(png).convert("RGBA")
    a = im.getchannel("A")
    bbox = a.point(lambda v: 255 if v == 0 else 0).getbbox()   # bbox of fully-transparent px
    if not bbox:
        return None                                            # no hole => full-bleed overlay
    x0, y0, x1, y1 = bbox
    return x0, y0, x1 - x0, y1 - y0


def has_audio(path):
    out = subprocess.run([FFMPEG, "-hide_banner", "-i", path],
                         capture_output=True, text=True, errors="ignore").stderr
    return bool(re.search(r"Stream #.*: Audio:", out))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("--out")
    ap.add_argument("--overlay")
    ap.add_argument("--mode", choices=["mount", "fill"], default="mount")
    ap.add_argument("--seconds", type=float, help="test render: only the first N seconds")
    a = ap.parse_args()

    overlay = a.overlay or os.path.join(
        KIT, "overlay-mount-9x16.png" if a.mode == "mount" else "overlay-fill-9x16.png")
    for p in (a.src, overlay, FFMPEG):
        if not os.path.exists(p):
            sys.exit("missing: " + p)

    stem, _ = os.path.splitext(a.src)
    out = a.out or stem + " - Wafa Hajj.mp4"

    hole = hole_of(overlay)
    if hole and a.mode == "mount":
        x, y, w, h = hole
        # fit the whole source inside the window (never crop: burned-in subtitles must survive)
        vf = (f"[0:v]scale={w}:{h}:force_original_aspect_ratio=decrease,"
              f"pad=1080:1920:{x}+({w}-iw)/2:{y}+({h}-ih)/2:color={GREEN}[bg];"
              f"[bg][1:v]overlay=0:0:format=auto[v]")
    else:
        # full-bleed: cover the canvas, then lay the overlay (scrim + lockup) on top
        vf = ("[0:v]scale=1080:1920:force_original_aspect_ratio=increase,"
              "crop=1080:1920[bg];[bg][1:v]overlay=0:0:format=auto[v]")

    cmd = [FFMPEG, "-y", "-hide_banner", "-loglevel", "error"]
    if a.seconds:
        cmd += ["-t", str(a.seconds)]
    cmd += ["-i", a.src, "-i", overlay,
            "-filter_complex", vf, "-map", "[v]"]
    if has_audio(a.src):
        cmd += ["-map", "0:a:0", "-c:a", "copy"]
    cmd += ["-c:v", "libx264", "-crf", "20", "-preset", "medium",
            "-pix_fmt", "yuv420p", "-movflags", "+faststart", out]

    print("window:", hole, "| mode:", a.mode)
    r = subprocess.run(cmd)
    if r.returncode:
        sys.exit("ffmpeg failed")
    print("wrote:", out, os.path.getsize(out), "bytes")


if __name__ == "__main__":
    main()
