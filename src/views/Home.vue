<template>
  <v-layout row wrap>
    <v-flex v-for="comp in comps " :key="comp.index" xs12>
      <component :is="comp.value"></component>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "Home",
  data: function() {
    return {
      comps: [
        { text: "Hero", value: () => import("@/components/dynamic/Hero") },
        {
          text: "Classes",
          value: () => import("@/components/dynamic/Classes")
        },
        { text: "Events", value: () => import("@/components/dynamic/Events") },
        { text: "Contact", value: () => import("@/components/dynamic/Contact") }
      ],
      selectedComponent: null
    };
  }
};
</script>

<!--<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
-->
