<template>
  <div class="container-fluid"  id="bloco02">
				<div class="container">
					<div class="row">
						<div class="col-lg-offset-1 col-lg-10 col-md-12 col-xs-12 text-busca">
						  Selecione abaixo o Estado, Cidade e Bairro que deseja pesquisar.<br>
                        A Easymei não é responsável por qualquer relação comercial e qualidade na prestação do serviço da empresa contábil.<br>
                        Nosso objetivo é conectar o MEI a uma empresa contábil, que possa auxiliar, desde a abertura gratuita da sua empresa MEI, 
                        na gestão do dia a dia e no cumprimento das obrigações junto ao Governo.
						</div>
						<div class="col-lg-offset-1 col-lg-10 col-md-12 col-xs-12">
							<div class="col-lg-3 col-md-3 col-xs-12 text-center">
								<div class="select-hack">
                                        <select v-model="filter.estado" class="form-bg-select"  required>
                                            <option  value="" selected>Selecione o Estado</option>
                                             <option :value="state" v-for="state in states" :key="state">{{state}}</option>
                                        </select>
                                 </div>
							</div>
							<div class="col-lg-3 col-md-3 col-xs-12 text-center">
								<div class="select-hack">
                                        <select v-model="filter.cidade"  class="form-bg-select"  required>
                                            <option value="" selected>Selecione a Cidade</option>
                                            <!-- <template v-for="(contador,index) in contadores">
                                              
                                              <option :value="contador.cidade"  :key="`cidade-${index}`" v-if="filter.estado !== '' && contador.estado === filter.estado">{{contador.cidade}}</option>
                                            </template> -->

                                            <option :value="city" v-for="city in cities" :key="city">{{city}}</option>
                                          
                                        </select>
                                 </div>
							</div>
							<div class="col-lg-3 col-md-3 col-xs-12 text-center">
								<div class="select-hack">

                  <select v-model="filter.bairro" class="form-bg-select"  required>
                                            <option selected>Selecione a Bairro</option>
                                            <!-- <template v-for="(contador,index) in contadores">
                                              
                                              <option :value="contador.cidade"  :key="`cidade-${index}`" v-if="filter.cidade !== '' && contador.estado === filter.estado && contador.cidade === filter.cidade">{{contador.bairro}}</option>
                                            </template> -->

                                            <option :value="neighborhood" v-for="neighborhood in neighborhoods" :key="neighborhood">{{neighborhood}}</option>
                                          
                                        </select>
                                       
                                 </div>
							</div>
							<div class="col-lg-3 col-md-3 col-xs-12 text-center">
								<div class="select-hack">
                                   <button class="btn-pesquisar" >Pesquisar</button>
                                 </div>
							</div>
						</div>
					</div>
			    </div>
          <list :list="filtered"></list>
		</div>
</template>

<script>
import store from '@/store'
import uniq from 'uniq'
import list from './list'
export default {
  name: 'Bloco02',
  components:{
    list
  },
  props:['config'],
  data () {
    return {
      filter: {
        estado:'',
        cidade:'',
        bairro:''
      }
    }
  },
  created(){
  },
   watch: {
    "filter.estado" : function (val) {
      this.filter.cidade = ''
      this.filter.bairro = ''
    },
    "filter.cidade" : function (val) {
      this.filter.bairro = ''
    }
  },
  methods: {
    getRandom(arr, n) {
      var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
      if (n > len)
          throw new RangeError("getRandom: more elements taken than available");
      while (n--) {
          var x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
      }
      return result;
    },
    filterArray(array, filters) {
      const filterKeys = Object.keys(filters);
      return array.filter(item => {
        // validates all filter criteria
        return filterKeys.every(key => {
          // ignores non-function predicates
          if (typeof filters[key] !== 'function') return true;
          return filters[key](item[key]);
        });
      });
    }
  },  
  computed: {
    haveFilter(){
      return this.filter.estado !== ''
    },
    filters () {
      let filter = {}
      if(this.filter.estado) {
        filter.estado = (estado) => estado === this.filter.estado
      }
      if(this.filter.cidade) {
        filter.cidade = (cidade) => cidade === this.filter.cidade
      }
      if(this.filter.bairro) {
        filter.bairro = (bairro) => bairro === this.filter.bairro
      }
      return filter;
    },
    contadores() {
      return store.state.contadores
    },
    states () {
      return uniq(store.state.contadores.map((contador) => {
        return contador.estado
      }))
    },
    cities () {
      return uniq(store.state.contadores.map((contador) => {
        if(contador.estado === this.filter.estado){
            return contador.cidade
        }
      }).filter(notUndefined => notUndefined !== undefined))
    },
    neighborhoods () {
      return uniq(store.state.contadores.map((contador) => {
        if(contador.estado === this.filter.estado && contador.cidade === this.filter.cidade){
            return contador.bairro
        }
      }).filter(notUndefined => notUndefined !== undefined))
    }, 
    filtered () {
      const self = this;
      if (!this.haveFilter) {
        if(store.state.contadores.length > 0){
          return this.getRandom(store.state.contadores,10)
        }
        return []
      } else {
        return this.filterArray(store.state.contadores,this.filters)
      }
    }
  }
}
</script>

<style>
</style>