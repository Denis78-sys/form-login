// O estado (state) do Vuex é onde armazenamos os dados compartilhados da aplicação
export const namespaced = true;
export const state = () => ({
    token: null, // O token armazenará o JWT (JSON Web Token) que será usado para autenticação
    usuarios: []
  });
  
  // As mutações (mutations) são usadas para modificar o estado de forma síncrona
  export const mutations = {
    setToken(state, token) {
      state.token = token; // Armazena o token JWT no estado
    },
    clearToken(state) {
      state.token = null; // Remove o token ao fazer logout
    },
    setUsuarios(state, usuarios){
      state.usuarios = usuarios;
    }
  };
  
  // As ações (actions) são usadas para operações assíncronas, como chamadas de API
  export const actions = {
    async login({ commit }, { email, password }) {
      try {
        const { data } = await this.$axios.post("/login", { email, password });
        commit('setToken', data); // Armazena o token no estado
        console.log("Token: "+data)
      } catch (error) {
        throw new Error('Login failed');
      }
    },
    logout({ commit}) {
      commit('clearToken'); // Remove o token ao fazer logout
    },
    async carregarDados({ commit, state }) {
      try {
        // Obtém o token do estado
        const token = state.token;
        if (!token) {
          throw new Error("Token não encontrado!");
        }
        
        const response = await this.$axios.get('/usuarios')
  
        /* console.log("Token sendo enviado:", token);
        // Faz a requisição para buscar os usuários, passando o token no cabeçalho
        const {response} = await this.$axios.get("/listar-usuarios", {
          headers: {
            authorization: `Bearer ${token}`, // Inclui o token no cabeçalho
          },
        });  */
  
        // Comita a mutação para atualizar a lista de usuários no estado
        commit("setUsuarios", response.data);
      } catch (error) {
        console.error("Erro ao carregar dados: ", error);
      }
    }
  };
  
  // Getters para acessar valores no estado
  export const getters = {
    autenticado(state) {
      return !!state.token; // Verifica se o token existe
    },
    getToken(state) {
      return state.token;
    },
    getUsuarios(state) {
      return state.usuarios// Atualiza o estado com a lista de usuários
    },
  };
  
  