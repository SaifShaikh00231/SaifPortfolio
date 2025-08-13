<template>
  <div class="text-white bg-black">
    <section class="max-w-screen-xl px-4 pb-12 mx-auto">
      <h2 class="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
        Let's Connect
      </h2>
      <div class="flex flex-col items-center mt-10 md:flex-row">
        <div class="w-full">
          <img src="../assets/images/contact-me.png" alt="phone" />
        </div>
        <form @submit.prevent="sendEmail" class="w-full">
          <label for="name" class="block mb-2 text-sm font-medium text-white">Name</label>
          <div class="relative mb-4">
            <input v-model="formData.name" type="text" id="name" name="name" required
              class="border-2 outline-none text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="Enter your name" />
          </div>
          <label for="email" class="block mb-2 text-sm font-medium text-white">Your Email</label>
          <div class="relative mb-4">
            <input v-model="formData.email" type="email" id="email" name="email" required
              class="border-2 outline-none text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="name@gmail.com" />
          </div>
          <label for="message" class="block mb-2 text-sm font-medium text-white">Message</label>
          <div class="relative mb-4">
            <textarea v-model="formData.message" id="message" name="message" required rows="8"
              class="border-2 outline-none text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"></textarea>
          </div>
          <button type="submit"
            class="w-full text-white bg-[#1788ae] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
            Send
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactComponent',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    sendEmail() {
      if (!this.formData.name || !this.formData.email || !this.formData.message) {
        alert('Please fill in all fields.');
        return;
      }

      const serviceID = 'service_ulckb5g'; // Replace with your EmailJS Service ID
      const templateID = 'template_a0qe8me'; // Replace with your EmailJS Template ID
      const userID = 'grXLA1cJGBeiI7HA4'; // Replace with your EmailJS Public Key

      emailjs.send(serviceID, templateID, this.formData, userID)
        .then(() => {
          alert('Message sent successfully!');
          this.formData = { name: '', email: '', message: '' }; // Reset form
        })
        .catch(error => {
          console.error('Error sending email:', error);
          alert('Failed to send message. Please try again later.');
        });
    }
  }
};
</script>
