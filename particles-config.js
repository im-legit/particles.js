tsParticles.load({
    id: "tsparticles",
    options: {
      background: {
        color: ""
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse"
          },
          onHover: {
            enable: true,
            mode: "bubble"
          }
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0,
            size: 0,
            speed: 3
          },
          repulse: {
            distance: 400,
            duration: 0.4
          }
        }
      },
      particles: {
        color: { value: "#ffffff" },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          random: true,
          speed: 0.3
        },
        number: {
          density: {
            enable: true
          },
          value: 600
        },
        opacity: {
          animation: {
            enable: true,
            speed: 5
          },
          value: { min: 0.3, max: 0.6 }
        },
        shape: {
          type: "circle"
        },
        size: {
          value: 1
        }
      }
    }
  });
  