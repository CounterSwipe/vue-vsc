<template>
  <v-flex xs12>
    <v-layout column wrap class="my-5" align-center>
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h2 class="headline primary--text">Welcome to My Portfolio</h2>
          <span class="subheading">
            Vue Vuetify Portfolio Template
          </span>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 sm4>
              <!--<v-card class="elevation-0 transparent">-->
              <v-card>
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="primary--text text--darken-1">color_lens</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Vuetify Designs</div>
                </v-card-title>
                <v-card-text>
                  Awesome designs
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card>
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="primary--text">favorite</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">web development</div>
                </v-card-title>
                <v-card-text>
                  Pretend this says cool stuff.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card>
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="primary--text text--lighten-1">brightness_low</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Cool Icons</div>
                </v-card-title>
                <v-card-text>
                  Make this shine.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-flex>
</template>
