import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "linear-gradient(135deg, #eff6ff, #ffffff, #f5f3ff)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 700, color: "#2563eb", marginBottom: 20 }}>
          LeadDaily.App
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Grow Your Leads</span>
          <span>Every Day Using AI</span>
        </div>
        <div style={{ fontSize: 30, color: "#334155", maxWidth: 980 }}>
          AI-powered lead discovery, cold email generation, and outreach scheduling in one platform.
        </div>
      </div>
    ),
    size
  );
}
