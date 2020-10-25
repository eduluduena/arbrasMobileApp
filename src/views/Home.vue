<template>
  <div>
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
    <appBar
      @on-home-click="homeBody()"
      @on-productos-click="productosBody()"
      @on-contacto-click="contactoBody()"
    />
    <div v-if="body == 'Home'">
      <background
        firstTextP="BIENVENIDOS A "
        secondTextP="ARBRAS"
        thirdTextH1="INNOVACION & OPTIMIZACIÓN"
        fourthTextH1="EN ALMACENAMIENTO"
        textColor="blue"
      />
      <Caption />
      <products />
    </div>

    <div v-if="body == 'Productos'">
      <background
        firstTextP="BIENVENIDOS A "
        secondTextP="ARBRAS"
        thirdTextH1="SOLUCIONES"
        fourthTextH1="EN ALMACENAMIENTO"
        textColor="yellow"
      />
      <catalogo></catalogo>
    </div>
    <div v-if="body == 'Contacto'">
      <background
        firstTextP="BIENVENIDOS A "
        secondTextP="ARBRAS"
        thirdTextH1="SOLICITA TU"
        fourthTextH1="COTIZACIÓN"
        textColor="orange"
      />
      <contacto />
    </div>

    <Footer />
  </div>
</template>

<script>
import AppBar from "../components/Bar/AppBar";
import Background from "../components/Background/Background";
import Caption from "../components/Home/HomeCaption";
import Products from "../components/Home/HomeProducts";
import Catalogo from "../components/Productos/Catalogo";
import Footer from "../components/Footer/Footer";
import Contacto from "../views/Contacto";
// import { Capacitor } from "@capacitor/core";

export default {
  name: "Home",
  components: {
    Caption,
    Products,
    AppBar,
    Footer,
    Background,
    Contacto,
    Catalogo,
  },
  data: () => ({
    body: "Home",
  }),
  methods: {
    homeBody() {
      this.body = "Home";
    },
    productosBody() {
      this.body = "Productos";
    },
    contactoBody() {
      this.body = "Contacto";
    },
  },
  // mounted() {
  //   console.log(Capacitor.isNative);
  // },
};
</script>

<style scoped>
#fixedContainer {
  position: fixed;
}
</style>
