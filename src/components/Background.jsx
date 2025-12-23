import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { initParticlesEngine } from "@tsparticles/react";

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      background: { color: { value: "#070b14" } },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: true, mode: ["grab", "slow", "connect"] },
          resize: { enable: true, delay: 0.5 },
        },
        modes: {
          connect: { distance: 8, links: { opacity: 0.5 }, radius: 60 },
          grab: { distance: 150, links: { opacity: 0.5 } },
          slow: { factor: 3, radius: 200 },
        },
      },
      particles: {
        number: {
          value: 100,
          density: { enable: true, width: 1920, height: 1080 },
        },
        color: { value: "#ffffff" },
        shape: { type: "circle", fill: true },
        size: { value: { min: 2, max: 6 }, animation: { enable: false } },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          outModes: { default: "out" },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        opacity: { value: 0.5 }, // fixed opacity to remove flashing
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="fixed inset-0 z-0">
      <Particles id="tsparticles" options={options} />
    </div>
  );
};

export default Background;
