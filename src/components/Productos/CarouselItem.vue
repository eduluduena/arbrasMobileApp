<template>
  <div>
    <v-row class="mx-auto" align="center">
      <v-col cols="12" md="6" v-if="position == 'left'">
        <v-carousel
          v-if="!$vuetify.breakpoint.xsOnly"
          :show-arrows="showArrows"
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
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <v-row justify="center">
          <v-col cols="12" md="6" sm="12">
            <h1 class="font-weight-regular blue--text">
              {{ title }}
            </h1>
          </v-col>
          <v-col cols="12" md="2" sm="0"> </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="8" sm="12">
            <h3 class="font-weight-light">
              {{ descripcion }}
            </h3>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        md="6"
        v-if="
          $vuetify.breakpoint.xsOnly
            ? position == 'right' || 'left'
            : position == 'right'
        "
      >
        <v-row>
          <v-carousel
            cycle
            hide-delimiter-background
            hide-delimiters
            show-arrows-on-hover
            :show-arrows="showArrows"
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
  name: "CarouselItem",
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    showArrows: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    //
  }),
};
</script>
