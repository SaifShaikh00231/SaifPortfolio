<template>
  <header
    class="z-10 flex items-center justify-between w-full max-w-screen-xl px-4 mx-auto mt-4 pointer-events-none"
  >
    <img
      src="../assets/images/saif.png"
      alt="Saif Shaikh"
      class="object-cover w-16 h-16 rounded-full"
    />

    <div class="flex items-center justify-center gap-4 pointer-events-auto">
      <a href="https://www.linkedin.com/in/saif-shaikh-a0a4252a7/" target="_blank">
        <svg class="w-5 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
          ></path>
        </svg>
      </a>
      <a href="mailto:saifshaikh00231@gmail.com" target="_blank">
        <svg class="w-5 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
          ></path>
        </svg>
      </a>
      <button
        @click="downloadCV"
        class="flex px-3 py-2 text-sm md:text-lg text-white transition duration-300 border border-[#1788ae] hover:border-[#1280a4] rounded-md pointer-events-auto"
      >
        Download CV
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="ml-2 size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      // Add your component data here
    }
  },
  methods: {
    downloadCV() {
      const resumeUrl = 'https://SaifShaikh00231.github.io/SaifPortfolio/Saif_Shaikh.pdf'

      fetch(resumeUrl)
        .then((response) => response.blob()) // Convert to blob
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob) // Create a local URL
          const link = document.createElement('a')
          link.href = blobUrl
          link.download = '.pdf' // Force download
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(blobUrl) // Clean up
        })
        .catch((error) => console.error('Error downloading CV:', error))
    },
  },
  mounted() {
    // Code to run when the component is mounted
  },
}
</script>
