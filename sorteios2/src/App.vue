<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Sorteio Dia da Mulher</h1>
    <h2>Números sorteados</h2>
    <div class="active" v-show="active !== ''">Último número sorteado: <span class="activeNumber">{{active}}</span></div>
    <button type="button" class="btn" v-on:click="generate">Gerar números</button>
    <button type="button" class="btn btn-primary" v-show="numbers.length" v-on:click="draw">Sorteio</button>
    <div class="drawnArea" v-show="drawnNumbers.length">
      <div>Números já sorteados:</div>
      <ul>
        <li class="drawn" v-for="number in drawnNumbers">
          {{number}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      active: '',
      drawnNumbers: [],
      numbers: [],
      drawn: 0
    }  
  },
  methods: {
    draw: function() {
      this.active = this.numbers[this.drawn];
      this.drawnNumbers.splice(0, 0, this.active);
      this.drawn++;
    },
    generate: function() {
      random.test();
      this.numbers = random.generate(15);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 20px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.drawnArea {
  position: absolute;
  top: 65%;
}

.drawn {
  font-size: 72px;
  padding: 10px;
}

.active {
  float: rigth;
  position: absolute;
  top: 4%;
  left: 40%;
  font-size: 22px;
}
.activeNumber {
  position: absolute;
  font-size: 360px;
  top: -30px;
}
</style>
