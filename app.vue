<script setup>
useSeoMeta({
  title: "Prima Infra Data - Better IT Solution for Your Business",
  description:
    "PT Prima Infra Data (PID) menyediakan solusi infrastruktur IT: komputasi & virtualisasi, manajemen data & media penyimpanan, keamanan cyber & jaringan, hingga suku cadang IT untuk sektor kesehatan, manufaktur, pendidikan, dan layanan masyarakat.",
  ogTitle: "Prima Infra Data - Better IT Solution for Your Business",
  ogDescription:
    "Solusi infrastruktur IT untuk institusi: komputasi & virtualisasi, manajemen data, keamanan cyber & jaringan, hingga suku cadang IT.",
  ogImage: "https://primainfradata.com/images/og-image.png",
  ogUrl: "https://primainfradata.com/",
  ogType: "website",
  ogSiteName: "Prima Infra Data",
  ogLocale: "id_ID",
  twitterCard: "summary_large_image",
  twitterTitle: "Prima Infra Data - Better IT Solution for Your Business",
  twitterDescription:
    "Solusi infrastruktur IT untuk institusi: komputasi & virtualisasi, manajemen data, keamanan cyber & jaringan, hingga suku cadang IT.",
  twitterImage: "https://primainfradata.com/images/og-image.png",
});

useHead({
  htmlAttrs: { lang: "id" },
  bodyAttrs: {
    class: "font-content antialiased text-gray-700 overflow-x-hidden relative",
  },
  link: [
    { rel: "canonical", href: "https://primainfradata.com/" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/favicon-16x16.png" },
    { rel: "apple-touch-icon", href: "/images/apple-touch-icon.png" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;500&family=Exo+2:wght@600;700&display=swap",
    },
  ],
});
</script>

<template>
  <Header />

  <HeroSection />

  <AboutUsSection />

  <IndustrySection />

  <PartnerSection />

  <ContactUsSection />

  <Footer />
</template>
