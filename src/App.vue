<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-danger">
      <router-link to="/personnes" class="navbar-brand">Bienvenue</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/personnes" class="nav-link">Afficher les Personnes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ajouter-personne" class="nav-link">Ajouter</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
