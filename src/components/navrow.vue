<template>
<div class="root-header">
  <div class="logo-search">
    <section id="logotipo" class="cabecalho">
      <a class="" href="nav-button"><img src="../assets/logo-home.png" alt=""></a>
    </section>
    <section id="pesquisa" class="cabecalho">
      <form class="form-inline">
        <input class="campopesquisa" type="text">
        <label for="campopesquisa">O que você está procurando?</label>
      </form>
    </section>
    <section id="botaodelogin" class="cabecalho">
      <a class="botoes" href="">Login</a>
      <a class="botoes" href="">Carrinho</a>
    </section>
  </div>
  <div class="nav-row">
    <ul>
      <li class="nav-button"><a class="nav-button" href="">Homens</a></li>
      <li class="nav-button"><a class="nav-button" href="">Mulheres</a></li>
      <li class="nav-button"><a class="nav-button" href="">Esportes</a></li>
      <li class="nav-button"><a class="nav-button" href="">Infantil</a></li>
      <li class="nav-button"><a class="nav-button" href="">Todas categorias</a></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style>

.root-header section{
  display: table-cell;
  vertical-align: middle;
}

#logotipo{
  width: 10rem;
  min-width: 10rem;
  max-width: 10rem;
  height: 5.25rem;
  min-height: 1.25rem;
  max-height: 5.25rem;
}

.cabecalho{
  flex: auto; 
}
.logo-search{
  justify-content: center;
  display: flex;
}
#pesquisa{
  margin:10px 0 0 120px;
}

.campopesquisa{
  height: 35px;
  border: none;
  border-bottom: 1px solid black;
}

.form-inline {
  position: relative;
}

.form-inline label,
.form-inline input {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
}

.form-inline input {
  top: 17px;
}

input:focus{
  border:none;
  outline: none;
  border-bottom: 1px solid black;
}

#botaodelogin{
  display: flex;
  justify-content: center;
  margin: 25px 0;
}

.botoes{
  margin: 0 25px;
  text-decoration: none;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.nav-button, .logotipo{
  float: left;
}

li {
  border-right: 1px solid #bbb;
}

img{
  width: 100px;
  height: 70px;
}

.nav-button {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 21px;
  text-decoration: none;
  
}

li a:hover {
  background-color: #444;
}
</style>