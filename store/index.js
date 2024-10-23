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

      const response = await this.$axios.get('/usuarios'/* , {
        headers: {
          authorization: `Bearer ${token}`,
        }
      } */);

      commit('SET_USUARIOS', response.data); // Passa os dados da resposta para a mutação
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
