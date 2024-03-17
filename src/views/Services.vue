<template>

  <NavBock/>

  <main class="max-w-[1260px] mx-auto py-8">

Services

  </main>


  <FooterBlock/>


</template>

<script>
import NavBock from "../components/NavBlock.vue";
import CarouselBlock from "../components/CarouselBlock.vue";
import FooterBlock from "../components/FooterBlock.vue";
import WhatWeDoBlock from "../components/WhatWeDoBlock.vue";

export default {
  name: 'Services',
  components: {
    NavBock,
    CarouselBlock,
    FooterBlock,
    WhatWeDoBlock
  },
};
</script>
