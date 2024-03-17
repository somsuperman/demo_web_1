<template>

  <NavBock/>

  <main class="max-w-[1260px] mx-auto py-8">

about us

  </main>


  <FooterBlock/>


</template>

<script>
import NavBock from "../components/NavBlock.vue";
import CarouselBlock from "../components/CarouselBlock.vue";
import FooterBlock from "../components/FooterBlock.vue";
import WhatWeDoBlock from "../components/WhatWeDoBlock.vue";

export default {
  name: 'AboutUs',
  components: {
    NavBock,
    CarouselBlock,
    FooterBlock,
    WhatWeDoBlock
  },
};
</script>
