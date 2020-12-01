<template>
<header class="container-fluid" id="topo">
  <nav class="navbar header">
    <div class="menu-wrap">
      <div class="navbar-header">
        <button type="button" id="nav-toggle" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar top-bar"></span>
        <span class="icon-bar middle-bar"></span>
        <span class="icon-bar bottom-bar"></span>                     
        </button>
        <a class="navbar-brand" href="#topo" data-id="topo"><img src="/assets/images/Logo_header.png" class="img-responsive" border="0"></a>
      </div>
      <div>
        <div class="collapse navbar-collapse" id="main-nav">
          <div id="overlay-menu" class=""></div>
          <ul class="nav navbar-nav navbar-right">
            <li ><a href="https://easymei.com.br/quero-ser-mei/">Quero ser MEI</a></li>
            <li ><a href="https://easymei.com.br/ja-sou-mei/">Já sou MEI</a></li>
            <li ><a href="https://easymei.com.br/maquininha/">Maquininha</a></li>
            <li><a href="/" target="_blank" >Contador</a></li>
            <li><a href="https://appgroupbrasil.zendesk.com/hc/pt-br" target="_blank" >Dúvidas</a></li>
            <li><a href="https://easymei.com.br/blog/" target="_blank" >Blog</a></li>
            <li><a href="#/" target="_blank" >Acesse o aplicativo</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>