<template>
  <v-row class="mx-auto">
    <v-col cols="12" md="6">
      <h1
        style="color:#0d0d86"
        :class="{
          subheading: $vuetify.breakpoint.smAndDown,
          'display-3': $vuetify.breakpoint.mdAndUp,
        }"
      >
        Contactenos
      </h1>

      <h4 class="font-weight-light">
        Deje conocer sus inquietudes para poder ayudarlo.
      </h4>

      <v-form
        @submit.prevent="sendEmail"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-row>
          <v-col>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Nombre"
              required
              name="user_name"
            ></v-text-field>
          </v-col>

          <v-col>
            <v-text-field
              v-model="phone"
              type="number"
              :rules="phoneRules"
              label="Telefono"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              name="user_email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-textarea
          v-model="textArea"
          outlined
          :rules="textAreaRules"
          required
          name="message"
          label="En que podemos ayudarlo?"
        ></v-textarea>

        <v-row align="center" justify="start">
          <v-btn
            :disabled="!valid"
            color="#0d0d86"
            dark
            class="mx-4"
            type="submit"
            @click="validate"
          >
            Enviar
          </v-btn>
        </v-row>
      </v-form>
    </v-col>
    <v-col cols="12" md="6">
      <Map />
    </v-col>
  </v-row>
</template>
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
></script>

<script>
import Map from "../components/Map";
import emailjs from "emailjs-com";

export default {
  data: () => ({
    valid: true,
    name: "",
    textArea: "",
    textAreaRules: [(v) => !!v || "Mensaje requerido"],
    nameRules: [(v) => !!v || "El nombre es requerido"],
    phoneRules: [(v) => !!v || "El telefono es requerido"],
    phone: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail invalido",
    ],
  }),
  components: { Map },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    emailjs() {
      emailjs.init("YOUR_USER_ID");
    },

    sendEmail(e) {
      emailjs
        .send(
          "service_50oyi4l",
          "template_n79dwrg",
          {
            from_name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.textArea,
          },
          "user_UP4FSlING84Imz0N8CWX7"
        )
        .then(
          (response) => {
            alert("Email Enviado Correctamente, Gracias!");
          },
          (err) => {
            alert("Error", err);
          }
        );
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
