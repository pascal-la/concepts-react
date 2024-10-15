import { useState } from "react";

type GlowingCardProps = {
  children: React.ReactNode;
  borderColor?: string;
  backgroundColor?: string;
  duration?: number;
  direction?: "clockwise" | "counterclockwise";
};

const GlowingCard = ({
  children,
  borderColor = "#cc436f",
  backgroundColor = "#212121",
  duration = 5,
  direction = "counterclockwise",
}: GlowingCardProps) => {
  const [glow, setGlow] = useState(false);

  return (
    <div
      className="relative rounded-lg transition-all"
      style={{
        border: `1px solid ${borderColor}`,
        boxShadow: glow ? `0px 0px 10px 3px ${borderColor}` : "",
      }}
      onMouseEnter={() => setGlow(true)}
      onMouseLeave={() => setTimeout(() => setGlow(false), 100)}
    >
      {glow && (
        <div
          className="absolute rounded-full animate-[glow_linear_infinite]"
          style={{
            backgroundColor: borderColor,
            boxShadow: `0px 0px 20px 15px ${borderColor}`,
            animationDuration: `${duration}s`,
            animationDirection: `${
              direction === "counterclockwise" ? "normal" : "reverse"
            }`,
          }}
        />
      )}
      <div
        className="relative size-full rounded-[0.450rem] overflow-hidden"
        style={{ backgroundColor }}
      >
        {children}
      </div>
    </div>
  );
};

export default GlowingCard;
