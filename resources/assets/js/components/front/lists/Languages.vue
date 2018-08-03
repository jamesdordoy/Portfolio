<template>
  <section class="code">
    <span class="anchor" id="code"></span>
    <h2>Programming Languages, Libraries &amp; Frameworks I Like</h2>
    <div class="row">
      <div class="col-sm-2" v-for="language in languages" :key="language.id">
        <h2>Title: {{ language.name }}</h2>
        <img :src='"/images/languages/" + language.icon' />
      </div>
    </div>
  </section>
</template>

<style>

.code{
  padding:50px 0;
  background: #eee;
  box-sizing: border-box;
  overflow: hidden;
}

.code h2{
  text-align: center;
}

.libary {
  padding: 0;
  width: 95%;
  margin: 0 2.5%;
  margin-bottom: 100px;
}

.libary li{
	display:inline-block;
	text-align:center;
	width:19.2%;
	margin:20px 0;
	margin-right:1%;
	border-radius:10px;
	-webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
	background:#263138;
	color:#fff;
}

.libary li:hover{
	box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

.libary li:nth-child(5n) {
  margin-right: 0;
}

.libary li a{
	display:block;
	text-align:center;
	font-family: 'Josefin Sans', sans-serif;
	padding:40px 5px;
}

.libary li a img{
	width:50px;
	height:50px;
}
</style>

<script>
export default{
    props: ['languages'],
}
</script>