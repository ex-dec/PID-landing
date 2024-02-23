<script setup>
import LinkedInIcon from "@mui/icons-material/LinkedIn";
</script>

<template>
  <!-- Footer Start -->
  <footer class="bg-theme-dark-blue py-10">
    <div class="container mx-auto px-5">
      <div class="grid md:grid-cols-2">
        <div class="flex flex-col md:flex-row md:space-x-12 items-center">
          <div class="mb-10 md:mb-0">
            <img
              src="/images/logo-pid-white.svg"
              alt="PT. Prima Infra Data"
              style="max-height: 40px"
            />
          </div>
          <ul
            class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8 text-xs text-center md:text-left font-theme-heading"
          >
            <li
              class="uppercase text-white hover:text-theme-secondary transition duration-200"
            >
              <a href="#about" v-smooth-scroll>Tentang Kami</a>
            </li>
            <li
              class="uppercase text-white hover:text-theme-secondary transition duration-200"
            >
              <a href="#industry" v-smooth-scroll>Fokus Industri</a>
            </li>
            <li
              class="uppercase text-white hover:text-theme-secondary transition duration-200"
            >
              <a href="#partner" v-smooth-scroll>Partner Kami</a>
            </li>
            <li
              class="uppercase text-white hover:text-theme-secondary transition duration-200"
            >
              <a href="#contact" v-smooth-scroll>Kontak Kami</a>
            </li>
          </ul>
        </div>
        <div class="md:place-self-end place-self-center mt-10 md:mt-0">
          <ul class="flex space-x-8 items-center">
            <li></li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-facebook text-white hover:text-theme-secondary transition duration-200 cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer End -->
</template>
