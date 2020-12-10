<template>
  <div class="col-lg-12 col-md-12 col-xs-12">
   <!--inicio box-->
   <div class="col-lg-12 col-md-12 col-xs-12 box-result" v-for='(item, index) in list' :key="index">
      <div class="col-lg-3 col-md-3 col-xs-12 pad-box-mob">
         <div class="title">Contador:</div>
         <div class="text">{{item.empresa}}</div>
      </div>
      <div class="col-lg-3 col-md-3 col-xs-12 pad-box-mob">
         <div class="title">Endereço:</div>
         <div class="text">{{item.endereco}}</div>
      </div>
      <div class="col-lg-3 col-md-3 col-xs-12 pad-box-mob">
         <div class="title">Contato:</div>
         <div class="text" v-for="(contact, i) in item.contato" :key="`contact-${index}-${i}`"><a :href="contact">{{contact}}</a></div>
      </div>
      <div class="col-lg-3 col-md-3 col-xs-12 pad-box-mob">
         <div class="title">Telefone:</div>
         <div class="text" v-for="(phone, i) in item.telefone" :key="`phone-${index}-${i}`">{{phone}}</div>
      </div>
   </div>



   <!-- fim box-->
</div>
</template>

<script>

export default {
  name: 'List',
  props:['list'],
  data () {
    return {
    }
  },
  created(){
  },
  computed: {}
}
</script>

<style>
</style>