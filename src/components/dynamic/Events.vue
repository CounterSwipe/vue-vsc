<template>
  <v-flex xs12>
    <v-parallax :src="require('@/assets/hero.jpg')" height="380">
      <v-layout column align-center justify-center class="primary--text text--darken-4">
        <div class="headline mb-3 text-xs-center">Projects & XP</div>
        <em>Cool Projects Ive done etc</em>
        <v-btn class="primary darken-4 mt-5" dark large to="/about">
          View Projects
        </v-btn>
      </v-layout>
    </v-parallax>
  </v-flex>
</template>
