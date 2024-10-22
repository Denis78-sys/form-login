<template>
  <div class="login-page">
    <div class="form">
      <h2>Login</h2>
      <form @submit.prevent="onSubmit">
        <div>
          <label>Email</label>
          <input v-model="email" type="email" required />
        </div>
        <div>
          <label>Password</label>
          <input v-model="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Não tem uma conta?
        <nuxt-link to="/register">Registre-se aqui</nuxt-link>
      </p>
    </div>
    
  </div>
</template>

<script>
import { mapActions} from "vuex";

export default {


  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    async onSubmit() {
      try {
        await this.login({ email: this.email, password: this.password });
        this.$router.push("/dashboard");
        
      } catch (error) {
        alert("Login failed");
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  background-color: beige;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
}

.form {
  display: grid;
  gap: 10px;
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
.teste-api {
  display: grid;
  margin-bottom: 10px;
}
</style>
