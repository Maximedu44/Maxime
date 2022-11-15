<template>
 <div v-if="currentPersonne">
   <div class="form-group">
    <label for="id">ID</label>
    <input type="text" class="form-control" id="id"
    v-model="currentPersonne.id"
    />
  </div>   
  <div class="form-group">
    <label for="surname">Prénom</label>
    <input type="text" class="form-control" id="surname"
    v-model="currentPersonne.surname"
    />
  </div>  
  <div class="form-group">
  <label for="name">Nom</label>
    <input type="text" class="form-control" id="name"
    v-model="currentPersonne.name"
    />
  </div>
  <div class="form-group">
  <label for="phone">Téléphone</label>
    <input type="text" class="form-control" id="phone"
    v-model="currentPersonne.phone"
    />
  </div>
  <div class="form-group">
  <label for="city">Ville</label>
    <input type="text" class="form-control" id="city"
    v-model="currentPersonne.city"
    /> 
  </div>

    <button class="badge badge-danger mr-2"
      @click="deletePersonne"
    >
      Supprimer
    </button>

    <button type="submit" class="badge badge-success"
      @click="updatePersonne"
    >
      Modifier
    </button>
    <p>{{ message }}</p>
</div>    
</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personne",
  data() {
    return {
      currentPersonne: null,
      message: ''
    };
  },
  methods: {
    getPersonne(id) {
      PersonneDataService.get(id)
        .then(response => {
          this.currentPersonne = response.data;
          console.log(response.data);
        })
    },

    updatePersonne() {
      PersonneDataService.update(this.currentPersonne)
          .then(response => {
          console.log(response.data);
          this.message = ('Personne modifiée avec succès !'); 

        })

    },

    deletePersonne(id) {
      PersonneDataService.delete(id)
          .then(response => {
          console.log(response.data);
          this.message = ('Personne supprimée avec succès !'); 

        })
   
  },
  mounted() {
    this.message = '';
    this.getPersonne(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
