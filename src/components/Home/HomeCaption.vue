<template>
  <div class="mx-10 my-15">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h1
              style="color:#0d0d86"
              :class="{
                subheading: $vuetify.breakpoint.smAndDown,
                'display-3': $vuetify.breakpoint.mdAndUp,
              }"
            >
              QUÉ HACEMOS?
            </h1>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="2"> </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h3 class="font-weight-light">
              ARBRAS es una empresa Argentina, nacida en Córdoba con más de una
              década de trayectoria operando en el mercado local.
            </h3>
            <br />
            <h3 class="font-weight-light">
              Nuestra visión es ser la empresa proveedora de soluciones en
              almacenamiento reconocida por la calidad de los productos
              entregados, por el profesionalismo y responsabilidad en las
              relaciones de negocios.
            </h3>
            <br />
            <h3 class="font-weight-light">
              Deseamos que nuestros clientes dispongan de información precisa y
              actualizada a través de nuestras soluciones y servicios
              permitiendo que puedan enfocarse en sus áreas de negocio.
            </h3>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row justify="center">
          <v-carousel
            cycle
            hide-delimiters
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Caption",
  data() {
    return {
      items: [
        {
          src: "/assets/slide5.jpeg",
        },
        {
          src: "/assets/slide1.jpeg",
        },
        {
          src: "/assets/slide4.jpeg",
        },
        {
          src: "/assets/slide2.jpeg",
        },
      ],
    };
  },
};
</script>

<style>
v-divider {
  background-color: purple;
  width: 120%;
  height: 12px;
  border-top: 1px solid black;
}
</style>
