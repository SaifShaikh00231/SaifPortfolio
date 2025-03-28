<template>
    <section class="certifications-section bg-black text-white pb-20">
      <div class="max-w-screen-xl px-6 mx-auto text-center">
        <!-- Section Header -->
        <h2 class="text-3xl sm:text-[40px] bg-[#111] mb-20 relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
          My Certifications
        </h2>
  
        <!-- Certifications Flexbox -->
        <div class="certificates-list flex flex-wrap justify-center items-center gap-12 mx-auto">
          <div
            v-for="(certification, index) in certifications"
            :key="index"
            class="certificate-card bg-gradient-to-r from-[#111] via-[#333] to-[#555] p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 group"
            @mouseover="highlightCard(index)"
            @mouseleave="removeHighlight(index)"
            :class="{
              'bg-[#1788ae] text-white': certification.isHighlighted,
              'hover:bg-[#1788ae]': !certification.isHighlighted
            }"
          >
            <!-- Certification Header (Title + Provider) -->
            <div class="mb-6 text-center">
              <h3 class="text-2xl font-bold group-hover:text-[#111]">{{ certification.title }}</h3>
              <p class="text-sm text-gray-400">{{ certification.provider }}</p>
            </div>
  
            <!-- Certification Description -->
            <p class="text-white opacity-80 mt-4 group-hover:opacity-100 transition-opacity duration-300">
              {{ certification.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        certifications: [
          {
            title: 'Alpha (DSA with Java)',
            provider: 'APNA COLLEGE',
            description: 'A comprehensive course covering Data Structures and Algorithms with Java.',
            isHighlighted: false,
          },
          {
            title: 'Mern Full Stack Developer',
            provider: 'APNA COLLEGE',
            description: 'A full-fledged course on MERN stack to master full-stack web development.',
            isHighlighted: false,
          },
        ],
      };
    },
    methods: {
      highlightCard(index) {
        this.certifications[index].isHighlighted = true;
      },
      removeHighlight(index) {
        this.certifications[index].isHighlighted = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom Styles if needed */
  
  .certificate-card {
    transition: all 0.3s ease-in-out;
  }
  </style>
  