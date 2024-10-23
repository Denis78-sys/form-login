// O estado (state) do Vuex é onde armazenamos os dados compartilhados da aplicação
export const namespaced = true;
export const state = () => ({
    token: null, // O token armazenará o JWT (JSON Web Token) que será usado para autenticação
    
  });
  
  // As mutações (mutations) são usadas para modificar o estado de forma síncrona
  export const mutations = {
    setToken(state, token) {
      state.token = token; // Armazena o token JWT no estado
    },
    clearToken(state) {
      state.token = null; // Remove o token ao fazer logout
    }
  };
  
  // As ações (actions) são usadas para operações assíncronas, como chamadas de API
  export const actions = {
    async login({ commit }, { email, password }) {
      try {
        const { data } = await this.$axios.post("/login", { email, password });
        commit('setToken', data); // Armazena o token no estado
        //console.log("Token: "+data)
      } catch (error) {
        throw new Error('Login failed');
      }
    },
    logout({ commit}) {
      commit('clearToken'); // Remove o token ao fazer logout
    }
  };
  
  // Getters para acessar valores no estado
  export const getters = {
    autenticado(state) {
      return !!state.token; // Verifica se o token existe
    },
    getToken(state) {
      return state.token;
    }
  };
  
  