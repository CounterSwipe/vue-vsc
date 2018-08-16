<template>
  <section class="404">
    <v-parallax :src="require('@/assets/hero.jpg')" height="600">
      <v-layout column align-center justify-center class="white--text">
        <img src="@/assets/logo.png" alt="logo" height="200">
        <h1 class="white--text mb-2 display-1 text-xs-center">404 Error</h1>
        <div class="subheading mb-3 text-xs-center">wtf</div>
        <v-btn class="white primary--text mt-5" dark large href="/">
          Go Home
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>
