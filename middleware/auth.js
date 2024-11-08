
export default function ({ store, route, redirect }) {
  // Lista de rotas públicas que não requerem autenticação
  const publicRoutes = ['/login', '/register'];
  
  // Verifica se a rota atual está na lista de rotas públicas
  if (publicRoutes.includes(route.path)) {
    return; // Permite acesso sem autenticação
  }
  
  // Verifica se o usuário está autenticado
  if (!store.getters['auth/autenticado']) {
    return redirect('/login'); // Redireciona se não estiver autenticado
  }

   // Obtém o token do Vuex
   const token = store.state.auth.token;

  
}
