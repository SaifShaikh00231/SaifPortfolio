<template>
  <!-- Modal Background -->
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
    >
      <!-- Modal Box -->
      <div
        class="relative flex flex-col w-full max-w-5xl max-h-[95vh] p-6 mx-4 text-white transition-transform duration-300 transform scale-95 bg-gray-900 shadow-2xl bg-opacity-90 md:mx-0 rounded-2xl md:flex-row"
      >
        <!-- Left Side - Image -->
        <div class="items-center justify-center hidden w-full p-2 md:flex md:w-1/2">
          <img
            src="../assets/images/about-me.png" 
            alt="Profile"
            class="w-full rounded-lg shadow-md h-[480px]"
          />
        </div>

        <!-- Right Side - Modal Content -->
        <div class="w-full p-6 md:w-1/2">
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute text-gray-400 transition-colors duration-300 top-4 right-4 hover:text-white"
          >
            ✖
          </button>

          <!-- Modal Content -->
          <h2 class="mb-4 text-2xl font-bold tracking-wide text-center md:text-left md:text-3xl">
            ABOUT ME
          </h2>
          <p class="mb-6 text-sm md:text-[17px] text-center text-gray-300 md:leading-relaxed md:text-left">
            
            Passionate Software Developer skilled in Java, DSA, and problem-solving, with expertise in JavaScript and MERN stack development. Focused on building scalable applications, optimizing algorithms, and delivering high-performance solutions. Enthusiastic about Data Engineering, with a strong interest in large-scale data pipelines, ETL processes, and distributed systems, eager to solve real-world challenges and drive innovation.
          </p>

          <!-- Tech Stack with Icons -->
          <div class="flex flex-wrap justify-center gap-3 md:justify-start">
            <div
              v-for="tech in techStack"
              :key="tech.name"
              class="flex items-center px-2 py-1 text-xs text-white transition-all duration-300 bg-gray-800 rounded-lg shadow-md cursor-default md:px-3 md:py-2 md:text-sm bg-gradient-to-r from-gray-800 to-gray-700 bg-opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
            >
              <img :src="tech.icon" class="w-4 h-4 mr-2 md:w-5 md:h-5" alt="tech icon" />
              {{ tech.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import ETLImage from '../assets/images/ETL.png';
import CICDImage from '../assets/images/Cicd.png'; 
import dataImage from '../assets/images/databricks.png'; // Import image

defineProps(["isOpen"]);
const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};

// Tech Stack with Icons
const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
{ name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
{ name: "AI Integration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "ETL", icon: ETLImage },
  { name: "CI/CD", icon: CICDImage }, 
  { name: "Data Bricks", icon: dataImage },
  { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"  },
  
  
];
</script>

<style>
/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
