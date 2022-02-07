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
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    snackbar: false,
    textSnackbar: "",
    dialogDelete: false,
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
    editedIndex: -1,
    
  
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
  },

  methods: {
    initialize() {
      this.desserts = [
        {
         nombre: "Juan",
            cedula: "123456789",
            placa: "ABC123",
            marca: "Toyota",
            tipo_vehiculo: "Camioneta",
        },
      { 
          nombre: "Pedro",
            cedula: "123456789",
            placa: "ABC123a",
            marca: "Toyota",
            tipo_vehiculo: "Camioneta",
      }
      
       
      ];
    },

    },
};
</script>
