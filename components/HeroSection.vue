<script setup></script>

<template>
  <!-- Hero Section Start -->
  <div class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible">
    <section
      class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center"
      style="background-image: '/images/bg.jpg'"
    >
      <div class="lg:w-5/6 order-2 lg:order-none">
        <h1
          class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left"
        >
          Prima Infra Data
        </h1>
        <p
          class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left"
        >
          Better IT Solution for Your Business
        </p>
        <div
          class="flex justify-center lg:justify-start mt-10 transition duration-200"
        >
          <LinkButton btn-type="primary" link="#about">Tentang Kami</LinkButton>
          <LinkButton btn-type="muted" link="#contact">Kontak Kami</LinkButton>
        </div>
      </div>
      <div
        class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10"
      >
        <img class="z-10 w-full" src="/images/hero.svg" />
      </div>
    </section>
  </div>
</template>
