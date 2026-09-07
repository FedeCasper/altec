import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const anton = readFile(join(process.cwd(), "src/assets/fonts/Anton-Regular.ttf"));

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#e11d2e",
          fontFamily: "Anton",
          fontSize: 26,
        }}
      >
        a
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Anton", data: await anton, style: "normal", weight: 400 }],
    },
  );
}
