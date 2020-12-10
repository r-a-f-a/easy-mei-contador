import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      contadores: []
    },
    mutations: {
      addContador (state, contador) {
        state.contadores.push(contador)
      }
    }
  })
