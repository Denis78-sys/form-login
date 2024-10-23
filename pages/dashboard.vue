<template>
  <div class="dashboard">
    <div class="cabecalho">
      <h1>Bem vindo ao seu Dashboard</h1>
      <button class="botao" @click="handleLogout">Logout</button>
    </div>
    <div class="informacoes">
      <h2>Usuários</h2>
      <div class="dados">
        <span v-for="usuario in usuarios" :key="usuario.id">
          <strong>Nome:</strong> {{ usuario.name }} <br />
          <strong>E-mail:</strong> {{ usuario.email }} <br /><br />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  middleware: "auth",
  computed: {
    // Mapear o getter corretamente para acessar os usuários
    ...mapGetters({
      usuarios: 'todo' // O nome 'usuarios' será usado no template para referenciar o getter 'todo'
    }),
  },
  methods: {
    ...mapActions({
      carregarDados: 'carregarDados', // Mapeia a action carregarDados
      logout: 'auth/logout' // Se 'auth' for um módulo com namespace
    }),
    handleLogout() {
      this.logout(); // Chama a ação do Vuex para logout
      this.$router.push("/login"); // Redireciona para login
    },
  },
  async mounted() {
    await this.carregarDados(); // Chama a ação para buscar os usuários ao montar o componente
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.botao {
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
}

.botao:hover {
  background-color: rgb(236, 93, 93);
  cursor: pointer;
}
.informacoes {
  background-color: azure;
  width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  color: rgb(41, 40, 40);
}
.dados {
  display: grid;
}
</style>
