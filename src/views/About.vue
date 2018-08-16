<template>
  <v-slide-y-transition mode="out-in">
    <section class="about">
      <v-parallax :src="require('@/assets/hero.jpg')" height="600">
        <v-layout column align-center justify-center class="white--text">
          <img src="@/assets/logo.png" alt="logo" height="200">
          <h1 class="white--text mb-2 display-1 text-xs-center">About Me</h1>
          <div class="subheading mb-3 text-xs-center">about me</div>
          <v-btn class="white primary--text mt-5" dark large to="/">
            View More
          </v-btn>
        </v-layout>
        <v-layout>
          <component :is="comps[0].value"></component>
        </v-layout>
      </v-parallax>
    </section>
  </v-slide-y-transition>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      comps: [
        { text: "Hero", value: () => import("@/components/dynamic/BizCards") }
      ],
      selectedComponent: null
    };
  }
};
</script>
