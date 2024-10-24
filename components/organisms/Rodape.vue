<template>
  <div class="rodape">
    <footer>
      <span
        >Desenvolvido por <a href="https://www.linkedin.com/in/denis-marques-771255105/" target="_blank"><strong>Denis Marques</strong></a></span
      >
    </footer>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.rodape {
  background-color: rgb(71, 71, 71);
  position: fixed; /* Fixa o rodapé na tela */
  left: 0;
  right: 0;
  bottom: 0; /* Coloca o rodapé no fundo */

  color: white;
  text-align: center;
  padding: 20px 0;
  width: 100%; /* Ocupa 100% da largura */
}
.span {
  position: fixed;
}
span,
a {
  color: aliceblue;
  font-size: small;
}
a {
  text-decoration: none;
}
</style>
