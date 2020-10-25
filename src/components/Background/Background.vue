<template>
  <v-parallax style="height:100vh">
    <div id="particles-js"></div>
    <v-row align="center">
      <v-col class="text-center" cols="12">
        <v-row justify="center" align="center">
          <p
            style="color: #666564"
            class="font-weight-light"
            :class="{
              subheading: $vuetify.breakpoint.smAndDown,
              headline: $vuetify.breakpoint.mdAndUp,
            }"
          >
            {{ firstTextP }}
          </p>
          <p
            style="color: white; position: relative"
            class="ml-2 font-weight-light font-weight-regular"
            :class="{
              subheading: $vuetify.breakpoint.smAndDown,
              headline: $vuetify.breakpoint.mdAndUp,
            }"
          >
            {{ secondTextP }}
          </p>
        </v-row>
        <br /><br />
        <v-row justify="center" align="center">
          <h1
            class="font-weight-thin"
            style="color: white"
            :class="{
              subheading: $vuetify.breakpoint.smAndDown,
              'display-4': $vuetify.breakpoint.mdAndUp,
            }"
          >
            {{ thirdTextH1 }}
          </h1>
        </v-row>
        <v-row justify="center" align="center">
          <h1
            class="font-weight-thin"
            :style="{ color: textColor }"
            :class="{
              subheading: $vuetify.breakpoint.smAndDown,
              'display-4': $vuetify.breakpoint.mdAndUp,
            }"
          >
            {{ fourthTextH1 }}
          </h1>
        </v-row>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
require("particles.js");

window.particlesJS.load("particles-js", "/particles.json", function() {
  console.log("callback - particles.js config loaded");
});

export default {
  name: "Background",
  components: {},
  props: {
    firstTextP: {
      type: String,
      required: false,
    },
    secondTextP: {
      type: String,
      required: false,
    },
    thirdTextH1: {
      type: String,
      required: false,
    },
    fourthTextH1: {
      type: String,
      required: false,
    },
    textColor: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* #particles-js {
  background-color: black;
  justify-content: center;
  height: 100vh;
  align-content: center;
} */
#particles-js {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background: #000;
}

.v-parallax {
  background-color: rgba(0, 0, 0, 0);
}
</style>
