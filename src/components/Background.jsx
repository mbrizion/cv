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
      fpsLimit: 120,
      particles: {
        number: {
          value: 180,
          density: { enable: true, width: 1920, height: 1080 },
        },
        shape: { type: "none" },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          outModes: { default: "out" },
        },
        links: {
          enable: true,
          distance: 190,
          color: "#4f5661",
          opacity: 0.7,
          width: 1,
        },
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
