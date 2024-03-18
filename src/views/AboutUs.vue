<template>

  <NavBock />

  <main class="max-w-[1260px] mx-auto py-8">




    <section class="hero ml-auto relative max-w-md sm:max-w-2xl lg:max-w-md mx-auto lg:mr-0">


      <h1 class="text-white text-5xl sm:text-7xl mt-6 sm:mt-24 leading-tight mb-4">
        About us
      </h1>
      <p class="text-white">
        At Unicorn Technologies, we're pioneering the way forward in the digital space. We offer a comprehensive suite
        of services designed to meet the evolving needs of modern investors, including buying and selling
        cryptocurrencies, futures, secure storage, and financing solutions. Our commitment to innovation, security,
        and
        integrity drives us to deliver excellence in all we do.
      </p>

      <svg class="w-20 absolute right-0 -bottom-32 md:-bottom-42 lg:-bottom-40" version="1.2"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 103">
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
            <path d="m43.37 102.49l50.11-71.51-43.05-30.17-50.11 71.51z" />
          </clipPath>
          <linearGradient id="g1" x2="1" gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-43.053,-30.171,50.109,-71.503,68.41,66.731)">
            <stop offset="0" stop-color="#10d3fd" />
            <stop offset="1" stop-color="#e873f0" />
          </linearGradient>
        </defs>
        <g id="Clip-Path" clip-path="url(#cp1)">
          <g id="Layer">
            <path id="Layer" class="s0" style="fill: url(#g1)"
              d="m49.9 2.8c8.4 12.7 10.9 31.5 6.4 46-4.6 14.8-15.6 25.4-28.9 32.4q0.8-1 1.5-1.8c2.9-3.1 6.1-5.8 8.9-9 1.8-1.9-1.4-4.5-3.3-3-3.3 2.5-6.1 5.8-8.8 9-2.3 2.6-5.9 5.4-5.8 9.1 0 0.4 0.2 0.8 0.6 0.9q0.2 0.2 0.5 0.3c5.6 1.9 12 2.1 17.9 2.8 4.3 0.5 9.1 1.7 13.2-0.2 3.3-1.6 1-6.8-2.4-5.2-3.9 1.9-10.1 0.1-14.3-0.1q-1.6-0.1-3.2-0.3c14.2-5.8 25.5-19 29.7-33.7 2.4-8.3 2.9-17.4 1.2-25.9-1.8-8.7-6.2-15.7-11.7-22.6-0.9-1-2.2 0.2-1.5 1.3z" />
          </g>
        </g>
      </svg>

    </section>



    <OurVisionBlock />


  </main>

  <FooterBlock />


</template>

<script>
import NavBock from "../components/NavBlock.vue";
import FooterBlock from "../components/FooterBlock.vue";
import OurVisionBlock from "../components/OurVisionBlock.vue";

export default {
  name: 'AboutUs',
  components: {
    NavBock,
    FooterBlock,
    OurVisionBlock
  },
};
</script>

<style lang="scss">
.route-aboutus {

  .hero-bg {
    @apply before:-z-10 before:absolute before:h-full before:md:max-h-[600px] before:lg:max-h-[800px] before:left-0 before:right-0 before:bg-[url('img/about-us/about-us-bg.jpg')] before:bg-left-top before:lg:bg-[-10rem_top] before:xl:bg-top before:md:bg-cover before:bg-no-repeat before:bg-[length:190%] before:sm:bg-[length:150%] before:lg:bg-cover before:xl:bg-cover before:2xl:bg-contain
  }

}

</style>