<template>
  <v-flex xs12>
    <v-parallax :src="require('@/assets/hero.jpg')" height="500">
      <v-layout column align-center justify-start class="white--text">
        <img src="@/assets/logo.png" class="mt-5" alt="logo" height="200">
        <h1 class="white--text display-1 text-xs-center">Web Power</h1>
        <div class="subheading my-2 text-xs-center">Powered by Code</div>
        <div class="text-xs-center">
          <v-layout row wrap align-center justify-center>
            <v-flex xs12 sm6 order-sm2>
              <v-btn class="primary--text hidden-sm-and-up" light large href="">
                View Portfolio
              </v-btn>
              <v-btn class="primary--text hidden-xs-only mr-3" light large href="">
                View Portfolio
              </v-btn>
            </v-flex>
            <v-flex xs12 sm6 order-sm1>
              <v-btn class="white--text hidden-sm-and-up" outline large to="/about">
                View XP
              </v-btn>
              <v-btn class="white--text hidden-xs-only ml-3" outline large to="/about">
                View XP
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
      </v-layout>
    </v-parallax>
  </v-flex>
</template>

<script>
export default {
  data: () => ({})
};
</script>
