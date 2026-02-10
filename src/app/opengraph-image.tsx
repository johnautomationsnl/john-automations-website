import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Melvin Automations | AI & Automatisering voor het MKB";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          background: "linear-gradient(135deg, #020617 0%, #1e1b4b 50%, #020617 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Border */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            borderRadius: 24,
            border: "1px solid rgba(99, 102, 241, 0.3)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            ⚡
          </div>
          <span style={{ fontSize: 36, fontWeight: 800, color: "white" }}>
            Melvin
          </span>
          <span style={{ fontSize: 36, fontWeight: 800, color: "#818cf8" }}>
            Automations
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
            marginBottom: 16,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Uw bedrijf.</span>
          <span style={{ color: "#818cf8" }}>Slimmer geautomatiseerd.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#94a3b8",
            marginBottom: 40,
            display: "flex",
          }}
        >
          AI-specialist voor het Nederlandse MKB
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              padding: "16px 32px",
              borderRadius: 12,
              background: "linear-gradient(135deg, #4f46e5, #6366f1)",
              color: "white",
              fontSize: 20,
              fontWeight: 600,
              display: "flex",
            }}
          >
            Gratis AI-Scan Aanvragen →
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#64748b",
              display: "flex",
            }}
          >
            Custom software · Automatisering · AI-integraties
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
