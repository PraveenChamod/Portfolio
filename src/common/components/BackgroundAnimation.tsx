import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function BackgroundAnimation() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#101014",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 0,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#86B6F6",
                    },
                    links: {
                        color: "#86B6F6",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 30,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "images",
                        images: [
                          {
                            src: "/Icons/JsIcon.svg",
                            width: 70,
                            height: 70,
                          },
                          {
                            src: "/Icons/JavaIcon.svg",
                            width: 70,
                            height: 70,
                          },
                          {
                            src: "/Icons/HtmlIcon.svg",
                            width: 70,
                            height: 70,
                          },
                          {
                            src: "/Icons/CSharpIcon.svg",
                            width: 70,
                            height: 70,
                          },
                          {
                            src: "/Icons/ReactIcon.svg",
                            width: 70,
                            height: 70,
                          },
                          {
                            src: "/Icons/ReduxIcon.svg",
                            width: 70,
                            height: 70,
                          },
                          {
                            src: "/Icons/DotNetIcon.svg",
                            width: 70,
                            height: 70,
                          },
                        ],
                      },
                    size: {
                        value: { min: 10, max: 20 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}

export default BackgroundAnimation