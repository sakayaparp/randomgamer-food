<template>
  <div class="col-md-12">
  <div class="panel panel-default">
    <div class="panel-body">
      <h1>{{ msg }}</h1>
      <div class="menu">
        <span>
          <font size="50" v-bind:class="{ highlightMenu: isHighlightMenu}">{{ luckyMenu }}</font>
        </span>
      </div>
      <button v-on:click="run" class="btn-random">Push !!!</button>  
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'random',
    data () {
      return {
        msg: 'Menu',
        menus: ['ผัดกระเพรา', 'ไข่เจียวหมูสับ', 'ไก่ทอด'],
        luckyMenu: 'Let\'s GO.',
        timer: 0,
        isHighlightMenu: false
      }
    },
    methods: {
      run: function () {
        var self = this
        var randomIndex
        self.isHighlightMenu = false
        setTimeout(function () {
          randomIndex = Math.floor(Math.random() * self.menus.length)
          if (self.timer < 15) {
            self.timer += 1
            self.run()
          } else {
            self.timer = 0
            self.isHighlightMenu = true
          }
          self.luckyMenu = self.menus[randomIndex]
          console.log(self.luckyMenu)
        }, 300)
      }
    }
  }
</script>

<style>
    .menu {
      margin: 15%;
    }

    .btn-random {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      font-size: 20px;
      border-color: red;
      background-color: white;
      -webkit-box-shadow: 0px 0px 25px 5px rgb(255, 0, 0);
      -moz-box-shadow: 0px 0px 25px 5px rgb(255, 0, 0);
      box-shadow: 0px 0px 25px 5px rgb(255, 0, 0);
      background: #ff8c8c;
    }

    h1 {
      background-color: #dedcdc;
    }

    .highlightMenu {
      text-shadow: 0px 0px 25px #1bd01b;
    }
</style>
