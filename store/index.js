/* 
export const state = () =>({
    usuarios: []
})

//GETTERS
export const getters = {
    todo: (state) => state.usuarios
}
//ACTIONS
export const actions = {
    async carregarDados({ commit }) {
        try {
            const response = await this.$axios.get('/usuarios');
            commit('SET_USUARIOS', response.data); // Passa apenas os dados
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
}
//MUTATIONS
export const mutations = {
    SET_USUARIOS(state, usuarios){
        state.usuarios = usuarios // Aqui, precisa ser os dados reais, não o objeto completo de resposta
    }
} */