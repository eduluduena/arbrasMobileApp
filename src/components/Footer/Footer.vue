<template>
  <v-footer dark padless>
    <v-card
      width="100%"
      flat
      tile
      color="#0D47A1"
      class="white--text text-center"
    >
      <v-card-text class="white--text pt-4">
        <h3>Gracias por su visita</h3>
      </v-card-text>

      <v-card-text>
        <v-row align="start">
          <v-col cols="12" md="4" class="text-left">
            <v-btn target="_blank" icon href="https://wa.link/no9v7v">
              <v-icon size="24px" color="green"> mdi-whatsapp </v-icon>
            </v-btn>
            +54 9 351 234-5135
            <br />
            <v-btn
              target="_blank"
              href="mailto:ArbrasFabrica@gmail.com?Subject=ARRBAS%20web%20site%20info"
              icon
            >
              <v-icon size="24px" color="#B23121"> mdi-gmail </v-icon>
            </v-btn>
            arbrasfabrica@gmail.com
            <br />
            <v-btn icon>
              <v-icon size="24px" color="light-blue"> mdi-phone </v-icon>
            </v-btn>
            +54 351 475-9211
            <br />
            <v-btn
              target="_blank"
              href="https://www.google.com/maps/place/Arbras/@-31.3457423,-64.2280681,17z/data=!3m1!4b1!4m5!3m4!1s0x9432995b415194cf:0x8354948a713fe33f!8m2!3d-31.3457469!4d-64.2258794"
              icon
            >
              <v-icon size="24px" color="yellow">
                mdi-map-marker
              </v-icon>
            </v-btn>
            Spilimbergo 5935, Los Boulevares, Cordoba, Argentina - CP:5009
          </v-col>
          <v-col cols="12" md="4">
            <h3 class="text-center">
              Desde 1996, ARBRAS se ha forjado una reputación de producir
              productos fabricados con precisión de alta calidad para su uso en
              una variedad de industrias.
            </h3>
            <br />
            <h3 class="text-center">
              <v-icon>mdi-human-greeting</v-icon>
              Ingeniero Ludueña Guillermo
            </h3>
            <h3 class="text-center">
              <v-icon>mdi-palette-outline</v-icon>
              Diseñador Ludueña Eduardo
            </h3>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="3">
            <h3 class="text-center">Horarios</h3>
            <br />
            <v-col cols="12" md="9">
              <v-row justify="start" class="mx-0">
                <v-icon>mdi-clock</v-icon>
                <h4>
                  Lunes a Viernes: 9:00 AM - 4:00 PM
                </h4>
              </v-row>
              <v-row justify="start" class="mx-0">
                <v-icon>mdi-clock</v-icon>
                <h4>Sábados: 9:00 AM - 12:00 PM</h4>
              </v-row>
            </v-col>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>ARBRAS</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({}),
};
</script>
