<!-- @format -->

<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          :sort-by="sortBy.toLowerCase()"
          class="elevation-12"
        >
          <template v-slot:top>
            <v-toolbar class="mb-2" color="blue" dark>
              <v-toolbar-title>Buscar vehiculo</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-col cols="12" sm="12">
              <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Ingresa placa,nombre o cedula"
              ></v-text-field>
            </v-col>
          </template>
        </v-data-table>
        <h1>resultado de prueba de logica</h1>
        <h2>{{ array }}</h2>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    textSnackbar: "",
    search: "",
    filter: {},

    sortBy: "name",
    headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "nombre",
      },
      { text: "Cedula", value: "cedula", sortable: false },
      { text: "Placa", value: "placa", sortable: false },
      { text: "Marca", value: "marca", sortable: false },
      { text: "Tipo de vehiculo", value: "tipo_vehiculo", sortable: false },
    ],
    desserts: [],
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();

    // parte numero  2 (un poco de logica)
    let arr = [
      ["2018-12-01", "AM", "ID123", 5000],
      ["2018-12-01", "AM", "ID545", 7000],
      ["2018-12-01", "PM", "ID545", 3000],
      ["2018-12-02", "AM", "ID123", 7000],
    ];
  //funcion para ordenar el array
    function obj(arr) {
      let obj = {};
      arr.forEach((element) => {
        if (obj[element[0]] == undefined) {
          let objaux = {};
          objaux[element[1]] = element[3];
          obj[element[0]] = objaux;
        } else {
          if (obj[element[0]][element[1]] == undefined) {
            obj[element[0]][element[1]] = element[3];
          } else {
            obj[element[0]][element[1]] += element[3];
          }
        }
      });
      return obj;
    }
    this.array = obj(arr);
  },
  computed: {},

  methods: {
    initialize() {
      fetch("https://guarded-harbor-37792.herokuapp.com/api/vehicle", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          var recorrer = data.data;
          recorrer.forEach((element) => {
            var recuperar = {
              nombre: element.data.attributes.nombre,
              cedula: element.data.attributes.cedula,
              placa: element.data.attributes.placa,
              marca: element.data.attributes.marca,
              tipo_vehiculo: element.data.attributes.tipo_vehiculo,
            };
            this.desserts.push(recuperar);
          });

          console.log(data);
        });
    },
  },
};
</script>
