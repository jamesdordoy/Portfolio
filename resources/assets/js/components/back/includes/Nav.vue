<template>
<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/back">Dashboard</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item :href="baseURL + '/projects'">Projects</b-nav-item>
      <b-nav-item :href="baseURL + '/languages'">Languages</b-nav-item>
      <b-nav-item :href="baseURL + '/dependencies'">Dependencies</b-nav-item>
      <b-nav-item :href="baseURL + '/examples'">Examples</b-nav-item>
      <b-nav-item :href="baseURL + '/github'">GitHub</b-nav-item>
      <b-nav-item :href="baseURL + '/twitter'">Twitter</b-nav-item>
      <b-nav-item :href="baseURL + '/contact'">Contact</b-nav-item>
      <b-nav-item :href="baseURL + '/playground'">Playground</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="/">Home</b-dropdown-item>
        <b-dropdown-item href="/logout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

</template>

<style scoped>

.navbar-brand{
  padding-top: 17px;
}

.form-inline{
  padding-top: 12px !important;
  padding-right: 5px !important;
}

.bg-info {
  background: #333366 !important;
}

.navbar {
  width: 100% !important;
  margin: 0 !important;
  border-radius: 0;
  margin-bottom: 15px !important;
}

</style>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  computed: {
    baseURL: () => {
      return "/back";
    }
  }
}
</script>