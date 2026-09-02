<script setup>
import industry from "../data/industry.js";
</script>

<template>
  <div class="container mx-auto px-5 md:px-6" id="industry">
    <section class="py-16">
      <div class="w-4/5 md:w-3/5 mx-auto pb-16">
        <h2
          class="text-3xl md:text-4xl font-semibold font-theme-heading text-center"
        >
          Fokus Industri
        </h2>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in industry"
          :key="item.id"
          class="rounded-lg shadow-lg overflow-hidden bg-white"
        >
          <img
            :src="item.imageUrl"
            :alt="item.name"
            class="w-full h-40 object-cover"
          />
          <div class="p-5">
            <h3 class="font-theme-heading text-lg font-medium">
              {{ item.name }}
            </h3>
            <p
              class="mt-2 font-theme-content text-sm text-theme-grayish-blue"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
