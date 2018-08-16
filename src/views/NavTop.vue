<template>
  <v-system-bar v-scroll="onScroll" id="onScrollBar" color="transparent" status flat fixed light>
    <router-link id="onScrollText" style="cursor: pointer" to="/" tag="span" v-text="title"></router-link>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
  </v-system-bar>
</template>

<script>
export default {
  name: "NavTop",
  data() {
    return {
      title: "COUNTERSWIPE TEMPLATE",
      offsetTop: 0,
      scrolled: false
    };
  },
  methods: {
    onScroll() {
      //onScroll(e){} //console.log(e);
      let os = window.pageYOffset || document.documentElement.scrollTop;
      this.offsetTop = os; //e.target.scrollTop;
      if (!this.scrolled) {
        if (os > 50) {
          let cm = document.getElementById("onScrollBar");
          cm.classList.remove("transparent");
          cm.classList.remove("theme--light");
          cm.classList.add("primary");
          cm.classList.add("theme--dark");
          this.scrolled = true;
        }
      } else if (this.scrolled) {
        if (os < 50) {
          let cm = document.getElementById("onScrollBar");
          cm.classList.remove("primary");
          cm.classList.remove("theme--dark");
          cm.classList.add("transparent");
          cm.classList.add("theme--light");
          this.scrolled = false;
        }
      }
    }
  }
};
</script>
