export const namespaced = true;

export const state = () => ({
  usuarios: []
});

export const getters = {
  todo(state) {
    return state.usuarios; // Acessa a lista de usuários
  }
};

export const actions = {
  async carregarDados({ commit, rootState }) {
    try {
      // Acessa o token do módulo 'auth' usando rootState
      const token = rootState.auth.token;

      if (!token) {
        throw new Error("Token não encontrado!");
      }

      // Faz a requisição para buscar os usuários, passando o token no cabeçalho
      const response = await this.$axios.get('/listar-usuarios', {
        headers: {
          authorization: `Bearer ${token}`, // Inclui o token no cabeçalho
        }
      });

      // Comita a mutação para atualizar a lista de usuários no estado
      commit('SET_USUARIOS', response.data);
    } catch (error) {
      console.error("Erro ao carregar dados: ", error);
    }
  }
};

export const mutations = {
  SET_USUARIOS(state, usuarios) {
    state.usuarios = usuarios; // Atualiza o estado com a lista de usuários
  }
};
