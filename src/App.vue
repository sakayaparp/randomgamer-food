<template>
    <div id="app">
      <header>
        <span class="col-md-12">Randomgamer Food</span>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <span class="col-md-12">All right reserved &copy by randomgamer</span>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: aliceblue;
  -webkit-box-shadow: 0px 0px 112px 8px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 112px 8px rgba(0,0,0,1);
  box-shadow: 0px 0px 112px 8px rgba(0,0,0,1);
  height: 100%;
}

main {
  text-align: center;
  position:absolute;
  top:56px;
  bottom:40px;
  left:0px;
  right:0px;
  overflow:auto;
  padding: 10px 0px 10px 0px;
}

header {
  position:absolute;
  top:0px;
  left:0px;
  right:0px;
  overflow:hidden;
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

footer {
  position:absolute; 
  bottom:0px; 
  left:0px; 
  right:0px;
  height: 40px !important; 
  overflow:hidden;
  text-align: center;
  background: white;
  border-top: 1px;
  border-top-style: solid;
  border-color: black;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.5em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

footer span {
  display: block;
  position: relative;
  line-height: 1;
  letter-spacing: 0.2em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 10px;
  align-content: center;
  color: black;
}
</style>
