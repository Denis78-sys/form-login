<template>
  <div class="dashboard">
    <h1>Bem vindo ao seu Dashboard</h1>
    <button class="botao" @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  middleware: "auth",
  methods: {
    ...mapActions("auth", ["logout"]),
    handleLogout() {
      this.logout(); // Chama a ação do Vuex
      this.$router.push("/login"); // Redireciona para login
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: honeydew;
}

.botao{
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
}

.botao:hover{
  background-color: rgb(236, 93, 93);
  cursor: pointer;
}

</style>
