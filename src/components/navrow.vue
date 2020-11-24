<template>
<div class="root-header">
  <div class="logo-search">
    <section id="logotipo" class="cabecalho">
      <a class="" href="nav-button"><img src="../assets/logo-home.png" alt=""></a>
    </section>
    <section id="pesquisa" class="cabecalho">
      <input type="text" placeholder="Pesquise itens aqui">
    </section>
    <section id="botaodelogin">
      <button type="submit">login</button>
    </section>
  </div>
  <div class="nav-row">
    <ul>
      <li class="nav-button"><a class="nav-button" href="">Homens</a></li>
      <li class="nav-button"><a class="nav-button" href="">Mulheres</a></li>
      <li class="nav-button"><a class="nav-button" href="">Esportes</a></li>
      <li class="nav-button"><a class="nav-button" href="">Infantil</a></li>
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
  margin: 10px;
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