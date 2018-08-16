<template>
  <v-footer class="primary white--text font-weight-thin">
    <v-layout row wrap text-xs-center>
      <v-flex xs12>
        <div>
          <a class="white--text" href="#">COUNTERSWIPE TEMPLATE</a>
          <br>
          <v-icon class="red--text" small>favorite</v-icon>
          <a class="white--text" href="#">Mateo Navarrete</a>
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<!--
<script>
export default {
  name: "NavBtm",
  data() {
    return {
      title: "COUNTERSWIPE",
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
-->
