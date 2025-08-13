<template>
  <div class="flex items-center justify-center max-w-full min-h-screen px-4 -mt-20 sm:px-6 md:px-8">
    
    <!-- Canvas (Background) -->
    <div
      class="absolute inset-0 hidden overflow-x-hidden md:block"
      ref="canvasWrapper"
    ></div>
    
    <!-- Main Flex Container -->
    <div class="z-10 flex flex-col items-start justify-start md:items-center md:justify-center ml-5 md:ml-0 w-full pointer-events-none md:flex-row">

      <!-- Left Section (Text and Button) -->
      <div class="z-10 flex flex-col items-start max-w-xl mb-6 space-y-6 md:mb-0 md:w-1/2">
        <h1 class="text-2xl font-bold text-transparent pointer-events-none sm:text-3xl md:text-5xl xl:text-6xl font-roboto bg-gradient-to-r from-[#1788ae] via-[#75c4df] to-blue-400 bg-clip-text">
          Saif Shaikh
        </h1>


        <p class="font-sans text-lg italic text-white pointer-events-none sm:text-2xl opacity-80">
          Software developer
        </p>

        <button
          @click="openModal"
          class="px-5 py-2 text-sm text-white transition duration-300 bg-[#1788ae] hover:bg-[#1280a4] rounded-md pointer-events-auto xl:text-xl"
        >
          About Me
        </button>
      </div>

      <!-- Right Section (Image) -->
      <div class="z-10 flex items-center justify-center w-full pointer-events-none sm:w-1/2 md:w-1/3">
        <!-- Outer frame with glowing effect -->
        <div class="relative border-5 rounded-full w-[350px] h-[350px] sm:w-[500px] sm:h-[400px] md:h-[500px] shadow-glow">
          <img
            src="../assets/images/saif.png"
            alt="Saif Shaikh"
            class="object-contain w-full h-full rounded-full drop-shadow-[0_0px_60px_rgba(23,136,174,0.8)]"
          />
        </div>
      </div>
      
    </div>

  <!-- Button for Latest Works at the bottom -->
  <div class="absolute flex flex-col items-center w-full bottom-5">
      <button
        @click="$emit('scrollToLatestWorks')"
        class="px-5 py-2 text-sm text-white transition duration-300 bg-[#1788ae] hover:bg-[#1280a4] rounded-md xl:text-xl"
      >
        Latest Works
      </button>
      
      <!-- Arrow below the button -->
      <div class="animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
          <path d="M19 12l-7 7-7-7"></path>
        </svg>

      </div>
    </div>

    <!-- About Me Modal -->
    <AboutMeModal :isOpen="isModalOpen" @close="closeModal" />
  </div>
</template>



<script>
import Matter from "matter-js";
import "matter-attractors";
import "matter-wrap";
import { ref } from "vue";
import AboutMeModal from "./AboutMeModal.vue";

export default {
  name: "MatterCanvas",
  components: {
    AboutMeModal,
  },
  setup() {
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      isModalOpen,
      openModal,
      closeModal,
    };
  },
  data() {
    return {
      dimensions: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      m: null, // Stores Matter.js objects
    };
  },
  mounted() {
    // Set the initial canvas size and run Matter.js
    this.setWindowSize();
    this.m = this.runMatter();

    // Adjust canvas size on window resize
    window.addEventListener("resize", this.debounce(this.setWindowSize, 250));
  },
  beforeDestroy() {
    // Clean up Matter.js when the component is destroyed
    if (this.m) {
      this.m.stop();
    }
    window.removeEventListener("resize", this.debounce(this.setWindowSize, 250));
  },
  methods: {
    runMatter() {
      Matter.use("matter-attractors");
      Matter.use("matter-wrap");

      const canvas = this.$refs.canvasWrapper;

      // Module aliases
      const {
        Engine,
        Events,
        Runner,
        Render,
        World,
        Body,
        Mouse,
        Common,
        Bodies,
      } = Matter;

      // Create engine
      const engine = Engine.create();
      engine.world.gravity.y = 0;
      engine.world.gravity.x = 0;
      engine.world.gravity.scale = 0.1;

      // Create renderer
      const render = Render.create({
        element: canvas,
        engine: engine,
        options: {
          showVelocity: false,
          width: this.dimensions.width,
          height: this.dimensions.height,
          wireframes: false,
          background: "transparent",
        },
      });

      // Create runner
      const runner = Runner.create();

      // Create demo scene
      const world = engine.world;
      world.gravity.scale = 0;

      // Create a body with an attractor
      const attractiveBody = Bodies.circle(
        render.options.width / 2,
        render.options.height / 2,
        Math.max(this.dimensions.width / 25, this.dimensions.height / 25) / 2,
        {
          render: {
            fillStyle: `#000`,
            strokeStyle: `#000`,
            lineWidth: 0,
          },
          isStatic: true,
          plugin: {
            attractors: [
              function (bodyA, bodyB) {
                return {
                  x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                  y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                };
              },
            ],
          },
        }
      );

      World.add(world, attractiveBody);

      // Add some bodies to be attracted
      for (let i = 0; i < 60; i += 1) {
        let x = Common.random(0, render.options.width);
        let y = Common.random(0, render.options.height);
        let s =
          Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
        let poligonNumber = Common.random(3, 6);
        const body = Bodies.polygon(x, y, poligonNumber, s, {
          mass: s / 20,
          friction: 0,
          frictionAir: 0.02,
          angle: Math.round(Math.random() * 360),
          render: {
            fillStyle: "#222222",
            strokeStyle: `#000000`,
            lineWidth: 2,
          },
        });
        World.add(world, body);

        const r = Common.random(0, 1);
        let circle = Bodies.circle(x, y, Common.random(2, 8), {
          mass: 0.1,
          friction: 0,
          frictionAir: 0.01,
          render: {
            fillStyle: r > 0.3 ? `#27292d` : `#444444`,
            strokeStyle: `#000000`,
            lineWidth: 2,
          },
        });
        World.add(world, circle);

        circle = Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          friction: 0,
          frictionAir: 0,
          render: {
            fillStyle: r > 0.3 ? `#334443` : `#222222`,
            strokeStyle: `#111111`,
            lineWidth: 4,
          },
        });
        World.add(world, circle);

        circle = Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.6,
          frictionAir: 0.8,
          render: {
            fillStyle: `#191919`,
            strokeStyle: `#111111`,
            lineWidth: 3,
          },
        });
        World.add(world, circle);
      }

      // Add mouse control
      const mouse = Mouse.create(render.canvas);

      Events.on(engine, "afterUpdate", () => {
        if (!mouse.position.x) return;

        // Smoothly move the attractor body towards the mouse
        Body.translate(attractiveBody, {
          x: (mouse.position.x - attractiveBody.position.x) * 0.12,
          y: (mouse.position.y - attractiveBody.position.y) * 0.12,
        });
      });

      // Run the renderer and runner
      Runner.run(runner, engine);
      Render.run(render);

      return {
        engine,
        runner,
        render,
        stop: () => {
          Render.stop(render);
          Runner.stop(runner);
        },
      };
    },

    debounce(func, wait) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    },

    setWindowSize() {
      this.dimensions.width = window.innerWidth;
      this.dimensions.height = window.innerHeight;

      if (this.m && this.m.render) {
        this.m.render.canvas.width = this.dimensions.width;
        this.m.render.canvas.height = this.dimensions.height;
      }
    },
  },
};

</script>