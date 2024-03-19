<template>
  <NavBock />
  <main class="max-w-[1260px] mx-auto py-8">
    <section class="hero ml-auto relative max-w-md sm:max-w-2xl lg:max-w-xl mx-auto md:pb-5 lg:mr-0 xl:pb-10">
      <h1 class="text-white text-5xl sm:text-7xl mt-6 sm:mt-18 leading-tight mb-4">
        Contact us
      </h1>
      <p class="text-white tk-oscine text-lg md:text-xl sm:leading-relaxed max-w-lg">
        From general inquiries to technical support, we’re here to help. Fill out our contact form, and one of our representatives will get in touch with you promptly.
      </p>

      <ContactFormSection />
    </section>
  </main>
  <FooterBlock />
</template>

<script>
import NavBock from "../components/NavBlock.vue";
import ContactFormSection from "../components/ContactFormBlock.vue";
import FooterBlock from "../components/FooterBlock.vue";

export default {
  name: "Contact",
  components: {
    NavBock,
    ContactFormSection,
    FooterBlock,
  },
};
</script>

<style lang="scss">
.route-contact {
  .hero-bg {
    @apply before:-z-10 before:absolute before:h-full before:bg-cover before:max-h-[400px] before:sm:max-h-[600px] before:md:max-h-[600px] before:lg:max-h-[900px] before:xl:max-h-[900px] before:2xl:max-h-[902px] before:left-0 before:right-0 before:bg-[url('img/contact/contact-bg.webp')] before:bg-left-top before:lg:bg-bottom before:xl:bg-top before:md:bg-cover before:bg-no-repeat before:sm:bg-cover before:xl:bg-cover before:2xl:bg-contain;
  }
}
</style>
