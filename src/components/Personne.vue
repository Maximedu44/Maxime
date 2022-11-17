<template>

  <div v-if="currentPersonne">
<!--     {{ currentPersonne.name }}
    {{ currentPersonne.surname }}
    {{ currentPersonne.phone }}
    {{ currentPersonne.city }} -->
<!-- 
    <input type="text" class="" id="id" v-model="currentPersonne.id" name="">
    <input type="text" class="" id="name" v-model="currentPersonne.name" name="">
    <input type="text" class="" id="surname" v-model="currentPersonne.surname" name="">
    <input type="text" class="" id="phone" v-model="currentPersonne.phone" name="">
    <input type="text" class="" id="city" v-model="currentPersonne.city" name=""> -->


    <label for="id" class="form-label">ID</label>
    <input type="number" class="form-control" id="id" v-model="currentPersonne.id" name="">
    <label for="name" class="form-label">Nom</label>
    <input type="text" class="form-control" id="name" v-model="currentPersonne.name" name="">
    <label for="surname" class="form-label">Prénom</label>
    <input type="text" class="form-control" id="surname" v-model="currentPersonne.surname" name="">
    <label for="phone" class="form-label">Téléphone</label>
    <input type="text" class="form-control" id="phone" v-model="currentPersonne.phone" name="">
    <label for="city" class="form-label">Ville</label>
    <input type="text" class="form-control" id="city" v-model="currentPersonne.city" name="">
    <br>
    <br>

    <!-- A INCLURE DANS LE FORM -->
    <button class="badge badge-danger mr-2"
      @click="deletePersonne(currentPersonne.id)"
    >
      Supprimer
    </button>

    <!-- A INCLURE DANS LE FORM -->
    <button type="submit" class="badge badge-success"
      @click="updatePersonne(currentPersonne)"
    >
      Modifier
    </button>
    <p>{{ message }}</p>

  </div>
  <div v-else>
      <h4>Aucune personne à modifier</h4>
  </div>

  <!-- A COMPLETER -->
    
</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personne",
  data() {
    return {
      currentPersonne: null,
      name: null,
      surname: null,
      message: ''
    };
  },
  methods: {
    getPersonne(id) {
    //PersonneDataService.get(id);
      PersonneDataService.get(id)
        .then(response => {
          this.currentPersonne = response.data;
          this.name = this.currentPersonne.name;
          this.surname = this.currentPersonne.surname;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePersonne(data) {
      // A COMPLETER
      //PersonneDataService.modify(id);
      PersonneDataService.modify(data)
        .then(response => {
          this.currentPersonne = response.data;
          this.message = 'Personne modifiée avec succès!';
          console.log(response.data);
          this.$router.push('/personnes');
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePersonne(id) {
      // A COMPLETER
      //PersonneDataService.delete(id);
      PersonneDataService.delete(id)
        .then(response => {
          console.log(response.data);
          this.$router.push('/personnes');
          //this.$router.push({ name: "/personnes" });
        })
        .catch(e => {
          console.log(e);
        });
    }
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