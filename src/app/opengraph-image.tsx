import { ImageResponse } from "next/og";
import { business } from "@/content/business";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, color: "#f2f2f0" }}>
          al<span style={{ color: "#e11d2e" }}>tec</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#9a9a97", marginTop: 8 }}>
          Ploteos e Imprenta
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#f2f2f0", marginTop: 40, maxWidth: 900 }}>
          {business.description}
        </div>
      </div>
    ),
    size
  );
}
