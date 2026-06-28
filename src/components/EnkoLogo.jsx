export default function EnkoLogo({ size = 36, light = false }) {
  const textColor = light ? "#ffffff" : "#0f172a";
  const subColor = light ? "rgba(255,255,255,0.5)" : "#94a3b8";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img
        src="/miniiprofile.jpeg"
        alt="Temka"
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
          flexShrink: 0,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            color: textColor,
            fontWeight: 600,
            fontSize: size * 0.38,
            lineHeight: 1,
            letterSpacing: "-0.01em",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          Temka
        </span>
        <span
          style={{
            color: subColor,
            fontWeight: 400,
            fontSize: size * 0.26,
            lineHeight: 1,
            marginTop: 3,
            letterSpacing: "0.06em",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          Language Center
        </span>
      </div>
    </div>
  );
}
