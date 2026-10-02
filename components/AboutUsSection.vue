<script setup>
import features from "../data/features.js";
import { ref } from "vue";

let isOpen = ref(1);
</script>

<template>
  <div id="about" class="container mx-auto px-5">
    <section class="py-16">
      <div class="w-4/5 md:w-3/5 mx-auto">
        <h2
          class="text-3xl md:text-4xl font-semibold font-theme-heading text-center"
        >
          Tentang Kami
        </h2>
        <p
          class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg"
        >
          Dalam era sekarang ini, menjadi suatu tantangan bagi institusi -
          institusi untuk memproses data/informasi sebagai pendukung dalam
          pengambilan keputusan strategis secara tepat, cepat, dan aman. Kami
          hadir untuk memberikan ragam solusi yang akan membantu percepatan
          proses pengolahan data melalui transformasi digital perusahaan anda.
        </p>
      </div>

      <div class="mt-10">
        <ul
          class="flex flex-col items-center md:flex-row justify-center font-theme-heading"
        >
          <li
            v-for="feature in features"
            :key="feature.id"
            :class="
              isOpen === feature.id
                ? 'md:border-b-4 md:border-theme-secondary'
                : ''
            "
            class="w-full md:w-96 cursor-pointer hover:text-theme-secondary transition duration-200 border-b-2 border-t-2 md:border-t-0 flex justify-center text-center"
          >
            <a
              @click.prevent="isOpen = feature.id"
              href="#"
              :class="isOpen === feature.id ? ' border-theme-secondary' : ''"
              class="py-5 md:border-b-0 border-b-4"
              >{{ feature.name }}</a
            >
          </li>
        </ul>
      </div>
      <div class="mt-16">
        <template v-for="feature in features" :key="feature.id">
          <div
            v-show="isOpen === feature.id"
            class="grid gap-32 lg:grid-cols-2 items-center"
          >
            <div class="relative">
              <img class="z-10 w-full" :src="feature.details.imageUrl" />
            </div>
            <div>
              <h3
                class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left"
              >
                {{ feature.details.title }}
              </h3>
              <p
                class="mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left"
              >
                {{ feature.details.description }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
