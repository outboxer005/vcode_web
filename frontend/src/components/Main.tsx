import { VortexDemo } from "./VortexDemo";
import Particles from "./Particles";
import heroVideo from "../../video.mp4";

const Main = () => {
  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-[var(--background)]"
      style={{ position: "relative" }}
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.25),transparent)] animate-pulse" />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_80%_100%,rgba(139,92,246,0.2),transparent)] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.08),transparent_70%)]" />
      </div>
      {/* Hero background video banner */}
      <div className="absolute inset-0 opacity-75 mix-blend-screen">
        <video
          className="w-full h-full object-cover transform"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 animate-[grid-pulse_6s_ease-in-out_infinite]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Floating accent glows */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute -top-10 left-10 w-40 h-40 rounded-full bg-[#06b6d4]/15 blur-3xl animate-float" />
        <div className="absolute bottom-6 right-10 w-48 h-48 rounded-full bg-[#8b5cf6]/15 blur-3xl animate-glow-pulse" />
      </div>
      {/* WebGL particle background */}
      <Particles
        particleCount={220}
        particleSpread={12}
        speed={0.12}
        particleColors={["#ffffff", "#06b6d4", "#8b5cf6", "#f43f5e"]}
        alphaParticles={false}
        particleBaseSize={110}
        sizeRandomness={1}
        cameraDistance={20}
        className="absolute inset-0"
      />
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/80 via-[var(--background)]/40 to-[var(--background)]/85 z-[1]" />
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="w-full h-full">
          <VortexDemo />
        </h1>
      </div>
    </div>
  );
};

export default Main;
