<template>
<v-card>
    <v-toolbar
      color="purple"
      dark
      flat
      prominent
    >
      <v-text-field
        append-icon="mic"
        class="mx-4"
        flat
        hide-details
        solo-inverted
      ></v-text-field>

      <v-tabs
        slot="extension"
        v-model="tabs"
        background-color="transparent"
        centered
      >
        <v-tab
          v-for="n in 3"
          :key="n"
        >
          Item {{ n }}
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
<v-layout row wrap justify-center align-center>
  

        <v-card flat>
        <v-flex xs4 sm6 md6>
        <v-row>
        <v-col cols="6">
        <v-card
        class="mx-auto"
        props-shaped
        v-for="(autopartes_alias, index) in autopartes" :key="index"
        >
        <v-img
        height="200px"
        :src="autopartes_alias.imagen">
        </v-img>
        <v-card-title>{{autopartes_alias.nombre}}</v-card-title>
        <v-card-subtitle> {{autopartes_alias.categoria}}</v-card-subtitle>
        <v-card-text>{{autopartes_alias.serie}}</v-card-text>
        <v-card-text>{{autopartes_alias.color}}</v-card-text>

</v-card>
   
        </v-col>

        <v-col cols="6">
        <v-card
        class="mx-auto"
        props-shaped
        v-for="(autopartes_alias, index) in autopartes" :key="index"
        >
        <v-img
        height="200px"
        :src="autopartes_alias.imagen">
        </v-img>
        <v-card-title>{{autopartes_alias.nombre}}</v-card-title>
        <v-card-subtitle> {{autopartes_alias.categoria}}</v-card-subtitle>
        <v-card-text>{{autopartes_alias.serie}}</v-card-text>
        <v-card-text>{{autopartes_alias.color}}</v-card-text>

</v-card>
   
        </v-col>
        </v-row>
        </v-flex>
        
           <v-btn color="success" @click="getAutopartes()">autopartes</v-btn>
        </v-card>
        </v-layout>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="headline">An even better title</v-card-title>
          <v-card-text>
            <p>
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
            </p>

            <p class="mb-0">
              Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>

</template>

<script>
import axios from "axios"
  export default {
    data () {
      return {
        autopartes: [],
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },

    methods: {
      getAutopartes() {
        axios.get("http://localhost:27017/autopartes")
        .then((response) => {
          this.autopartes = response.data
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },  
  }
</script>
