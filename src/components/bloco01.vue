<template>
  <div class="container-fluid"  id="bloco01">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-5 col-xs-12">
          <img :src="config.image" class="img-responsive">
        </div>
        <div class="col-lg-6 col-md-7 col-xs-12">
          <div class="titulo-bloco-1" v-html="config.title" />
          <div class="text-bloco-1" v-html="config.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bloco01',
  props:['config'],
  data () {
    return {
    }
  }
}
</script>

<style>
</style>