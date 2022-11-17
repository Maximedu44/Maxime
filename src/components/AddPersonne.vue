<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <h1 class="h3 mb-3 font-weight-normal">Nouvelle personne</h1>
      <br>
      <label for="id" class="form-label">ID</label>
      <input type="number" class="form-control" id="id" v-model="personne.id" name="">
      <label for="name" class="form-label">Nom</label>
      <input type="text" class="form-control" id="name" v-model="personne.name" name="">
      <label for="surname" class="form-label">Prénom</label>
      <input type="text" class="form-control" id="surname" v-model="personne.surname" name="">
      <label for="phone" class="form-label">Téléphone</label>
      <input type="text" class="form-control" id="phone" v-model="personne.phone" name="">
      <label for="city" class="form-label">Ville</label>
      <input type="text" class="form-control" id="city" v-model="personne.city" name="">
      <br>
      <button @click="creerPersonne(personne)" class="badge badge-success">Ajouter</button>
    </div>
    <div v-else>
      <h4>Personne ajoutée avec succès!</h4>
      <button class="badge badge-success" @click="resetForm">Ajouter une nouvelle personne</button>
    </div>
  </div>
</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "add-personne",
  data() {
    return {
      personne: {
        id: null,
        name: "",
        surname: "",
        phone: "",
        city: ""
      },
      submitted: false
    };
  },
  methods: {
    creerPersonne() {
      var data = {
        id: this.personne.id,
        surname: this.personne.surname,
        name: this.personne.name,
        phone: this.personne.phone,
        city: this.personne.city
      };
      PersonneDataService.create(data)
        .then(response => {
          this.person = response.data;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    resetForm() {
      this.submitted = false;
      this.personne = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>