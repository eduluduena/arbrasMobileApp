<template>
  <div>
    <v-card class="mx-auto overflow-hidden">
      <v-app-bar
        fixed
        color="white"
        elevate-on-scroll
        v-if="$vuetify.breakpoint.xsOnly"
      >
        <v-app-bar-nav-icon
          style="color:#0d0d86"
          @click="drawer = true"
        ></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <a @click.prevent="homeClick">
          <v-img
            alt="Arbras Logo"
            contain
            src="/assets/LogoArbras.png"
            transition="scale-transition"
            width="20vh"
        /></a>
        <v-navigation-drawer
          style="margin-top:55px"
          width="100%"
          height="auto"
          v-model="drawer"
          absolute
          temporary
        >
          <v-list>
            <v-list-item-group v-model="group" color="#0d0d86">
              <v-list-item @click.prevent="homeClick">
                <v-list-item-icon>
                  <v-icon style="color:#0d0d86">mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title style="color:#0d0d86"
                  >Inicio</v-list-item-title
                >
              </v-list-item>
              <v-list-item @click.prevent="productosClick">
                <a @click="onClick()">
                  <v-list-item-icon>
                    <v-icon style="color:#0d0d86">mdi-download</v-icon>
                  </v-list-item-icon>
                </a>
                <v-list-item-title style="color:#0d0d86"
                  >Catalogo</v-list-item-title
                >
              </v-list-item>
              <v-list-item @click.prevent="contactoClick">
                <v-list-item-icon>
                  <v-icon style="color:#0d0d86">mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title style="color:#0d0d86"
                  >Contacto</v-list-item-title
                >
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-app-bar>
    </v-card>
    <v-app-bar align="center" height="125" fixed v-if="!$vuetify.breakpoint.xs">
      <a @click.prevent="homeClick">
        <v-img
          alt="Arbras Logo"
          class="shrink"
          contain
          src="/assets/LogoArbras.png"
          transition="scale-transition"
          width="30vh"
      /></a>
      <v-spacer></v-spacer>

      <v-hover v-slot:default="{ hover }">
        <v-btn
          class="text-capitalize"
          text
          @click.prevent="homeClick"
          :color="`${hover ? '#0d0d86' : '#000000'}`"
        >
          <h2 class="ml-2 font-weight-light">Inicio</h2>
        </v-btn>
      </v-hover>

      <v-hover v-slot:default="{ hover }">
        <v-btn
          class="text-capitalize"
          text
          @click.prevent="productosClick"
          :color="`${hover ? '#0d0d86' : '#000000'}`"
        >
          <h2 class="ml-2 font-weight-light">Catalogo</h2>
        </v-btn>
      </v-hover>

      <v-hover v-slot:default="{ hover }">
        <v-btn
          class="text-capitalize"
          text
          @click.prevent="contactoClick"
          :color="`${hover ? '#0d0d86' : '#000000'}`"
        >
          <h2 class="ml-2 font-weight-light">Contacto</h2>
        </v-btn>
      </v-hover>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "AppBar",
  data: () => ({ drawer: false, group: null }),

  methods: {
    homeClick() {
      this.$emit("on-home-click");
    },
    productosClick() {
      this.$emit("on-productos-click");
    },
    contactoClick() {
      this.$emit("on-contacto-click");
    },
    async onClick() {
      window.open(
        "http://c1740202.ferozo.com/asdasd/wp-content/uploads/2020/10/Lista-de-precio.pdf"
      );
    },
  },
};
</script>
