<template>
  <v-app>
    <v-btn
      fab
      href="https://wa.link/no9v7v"
      dark
      large
      color="green"
      fixed
      right
      bottom
      target="_blank"
    >
      <v-icon dark>mdi-whatsapp</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import AppBar from "./components/Bar/AppBar";
import Footer from "./components/Footer/Footer";

export default {
  components: { AppBar, Footer },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
#fixedContainer {
  position: fixed;
}
</style>
