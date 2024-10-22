<template>
  <div class="register-page">
    <h2>Registro de usuários</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label>Name</label>
        <input v-model="name" type="text" required />
      </div>
      <div>
        <label>Email</label>
        <input v-model="email" type="email" required />
      </div>
      <div>
        <label>Password</label>
        <input v-model="password" type="password" required />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
    <p>
      Já tem uma conta? <nuxt-link to="/login">Login aqui</nuxt-link>
    </p>
  </div>

</template>
<script>

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      try {
        await this.$axios.post("/cadastro", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        alert('Usuário registrado com sucesso!')
        this.$router.push("/login");
      } catch (error) {
        alert("Registration failed");
      }
    },
  },
};
</script>

<style scoped>
.register-page {
  display: grid;
  background-color: rgb(220, 245, 224);
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
}
input {
  width: 100%;
  margin-bottom: 10px;
  height: 40px;
}
button {
  width: 100%;
  height: 40px;
  font-weight: bolder;
}
</style>
