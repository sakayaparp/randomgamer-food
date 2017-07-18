<template>
    <div id="app">
      <header>
        <span>Randomgamer Food</span>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <span>All right reserved &copy by randomgamer</span>
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
  width: 80%;
  margin-left: 10%;
  background-color: aliceblue;
  -webkit-box-shadow: 0px 0px 112px 8px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 112px 8px rgba(0,0,0,1);
  box-shadow: 0px 0px 112px 8px rgba(0,0,0,1);
  height: 100%;
}

main {
  text-align: center;
  margin-top: 40px;
}

header, footer {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

footer {
  margin-top: 40px;
  text-align: center;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 1em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

footer span {
  display: block;
  position: relative;
  line-height: 1;
  letter-spacing: 1em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
  align-content: center;
}
</style>
