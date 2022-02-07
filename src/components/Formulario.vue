<!-- @format -->

<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first">
              <img src="@/assets/park.jpeg" id="icon" alt="User Icon" />
            </div>

            <!-- Login Form -->
            <form>
              <v-text-field
                v-model="vehiculo.nombre"
                class="fadeIn first"
                label="Nombre propietario"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="vehiculo.cedula"
                class="fadeIn second"
                label="Cedula"
                prepend-icon="mdi-mail"
                type="number"
              ></v-text-field>
              <v-text-field
                v-model="vehiculo.placa"
                class="fadeIn third"
                label="Placa"
                prepend-icon="mdi-ballot"
                type="number"
              ></v-text-field>
              <v-text-field
                v-model="vehiculo.marca"
                class="fadeIn fourth"
                label="Marca"
                prepend-icon="mdi-tag-multiple"
                type="Text"
              ></v-text-field>
              <v-text-field
                v-model="vehiculo.tipo_vehiculo"
                class="fadeIn fourth"
                label="Tipo de vehiculo"
                prepend-icon="mdi-car"
                type="Text"
              ></v-text-field>

              <v-btn
                x-large
                class="boton btn-lg btn-block border-0 text-center text-white inline-block w-100 p-3 mb-3"
                style="background-color: #fcbf00"
                :loading="loading"
                @click="enviarVehiculo"
              >
                Crear vehiculo
              </v-btn>
            </form>

            <v-snackbar
              v-model="snackbar"
              :multi-line="multiLine"
              color="green"
            >
              {{ textSnackbar }}
            </v-snackbar>
            <v-snackbar v-model="error" :multi-line="multiLine" color="red">
              {{ textError }}
              <template v-slot:action="{ attrs }">
                <v-btn
                  color="white"
                  text
                  v-bind="attrs"
                  @click="error = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Formulario",
  data() {
    return {
      snackbar: false,
      error: false,
      textError: "No se pudo crear el vehiculo",
      textSnackbar: "Datos guardados",
      vehiculo: {
        nombre: "",
        cedula: "",
        placa: "",
        marca: "",
        tipo_vehiculo: "",
      },
      loader: null,
      loading: false,
    };
  },
  methods: {
    enviarVehiculo() {
      const formData = new FormData();
      formData.append("nombre", this.vehiculo.nombre);
      formData.append("cedula", this.vehiculo.cedula);
      formData.append("placa", this.vehiculo.placa);
      formData.append("marca", this.vehiculo.marca);
      formData.append("tipo_vehiculo", this.vehiculo.tipo_vehiculo);
      this.loading = true;
      fetch("https://guarded-harbor-37792.herokuapp.com/api/register", {
        method: "POST",
        body: formData,
      })
        .then((data) => {
          this.loading = false;
          data == this.textSnackbar;
          this.snackbar = true;
          setTimeout(() => {
            location.reload();
          });
        })
        .catch((error) => {
          error == this.textError;
          this.error = true;
          this.loading = false;
        });
    },
  },
};
</script>
<style>
/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}

#icon {
  width: 30%;
}
</style>
