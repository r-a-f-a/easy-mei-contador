<template>
  <Layout>
   <bloco01 :config="bloco01"></bloco01>
   <bloco02 :config="bloco01"></bloco02>
  </Layout>
</template>

<script>
import bloco01 from '~/components/bloco01.vue'
import bloco02 from '~/components/bloco02.vue'
export default {
  metaInfo: {
    title: 'Contadores'
  },
  components: {
    bloco01,
    bloco02
  },
  created() {
    console.log('created')
    if(process.isClient){
      const firebase = require('../firebase')
      console.log('RUN FIREBASE', firebase.default)
      firebase.default.getAllContadores()
    }
  },
  data() {
    return {
      bloco01: {
        image: '/assets/images/img-home.png',
        title: 'Bem-vindo ao Portal do Contador MEI',
        text: `A Easymei possui uma parceria exclusiva com a Fenacon, onde foi lançado em conjunto o aplicativo EasyContador, a easymei disponibiliza neste portal um canal onde reunimos todos os contadores do Brasil, onde você poderá encontrar ou consultar um nome, endereço, telefone ou e-mail. Fique à vontade!`,
      }
    }
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
