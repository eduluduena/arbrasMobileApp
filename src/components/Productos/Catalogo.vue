<template>
  <div>
    <v-row class="mx-auto" v-for="(item, index) in items" :key="index">
      <v-col
        :style="{ 'background-color': item.color }"
        id="col"
        cols="12"
        md="12"
        sm="12"
      >
        <carouselItem
          :title="item.title"
          :descripcion="item.descripcion"
          :items="item.img"
          :position="item.position"
          :showArrows="item.slider"
        ></carouselItem>
      </v-col>
    </v-row>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
import CarouselItem from "./CarouselItem";

export default {
  name: "Catalogo",
  components: { CarouselItem },
  data: () => ({
    items: [
      {
        descripcion:
          "Sistema pensado para utilizarlo con cargas manuales. Logramos con él optimizar los lugares reducidos.",
        title: "Racks",
        position: "right",
        slider: true,
        img: [
          {
            src: "/assets/CompleteRack.gif",
          },
          {
            src: "/assets/slide2.jpeg",
          },
          {
            src: "/assets/slide4.jpeg",
          },
          {
            src: "/assets/slide1.jpeg",
          },
        ],
        color: "white",
      },
      {
        title: "Estanterias Metalicas",
        descripcion:
          "Posibilidad de montar los estantes en cantidad y separación más conveniente.",
        position: "left",
        slider: false,
        img: [
          {
            src: "/assets/Estanteria.png",
          },
        ],
        color: "#f4f6f7",
      },
      {
        descripcion:
          "El mejor producto para exponer sus artículos. Góndolas centrales, punteras y góndolas laterales",
        title: "Gondolas",
        position: "right",
        slider: false,
        img: [
          {
            src: "/assets/Puntera.png",
          },
        ],
        color: "white",
      },
      {
        descripcion:
          "Muy útiles en oficinas, farmacias, librerías, kioscos, bazares, minimercados, etc.",
        title: "Rieles y Mensulas",
        position: "left",
        slider: false,
        img: [
          {
            src: "/assets/rieles.png",
          },
        ],
        color: "#f4f6f7",
      },
      {
        descripcion:
          "Sistema pensado para utilizarlo con cargas manuales. Logramos con él optimizar los lugares reducidos.",
        title: "Mini-Racks",
        position: "right",
        slider: false,
        img: [
          {
            src: "/assets/slide5.jpeg",
          },
          {
            src: "/assets/slide1.jpeg",
          },
        ],
        color: "white",
      },
      {
        descripcion:
          "Posibilidad de montar los estantes en cantidad y separación más conveniente.",
        title: "Entrepisos Metalicos",
        position: "left",
        slider: false,
        img: [
          {
            src: "/assets/entrepisos.jpeg",
          },
        ],
        color: "#f4f6f7",
      },
      {
        descripcion:
          "Está pensado para utilizarlo con cargas manuales. Logramos con él optimizar los lugares reducidos",
        title: "Lockers",
        position: "right",
        slider: false,
        img: [
          {
            src: "/assets/locker.jpg",
          },
        ],
        color: "white",
      },
      {
        descripcion:
          "Aplicaciones: perfumerías, bazares, mercerías, kioscos, boutiques, autoservicios, jugueterías y muchas más. Ideal para ubicarlo en espacios reducidos.",
        title: "Exhibidores de alambre",
        position: "left",
        slider: false,
        img: [
          {
            src: "/assets/exhibidor.png",
          },
        ],
        color: "#f4f6f7",
      },
    ],
  }),
};
</script>

<style scoped>
#col {
  padding-top: 10vh;
  padding-bottom: 10vh;
}
</style>
