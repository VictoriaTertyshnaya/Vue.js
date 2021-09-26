
<template>
  <div>

    <h1 class="header">Calculator</h1>

    <input class="input" type="text" v-model.number="operand1">
    <input class="input" type="text" v-model.number="operand2">

    <h1 class="text">{{result}}</h1>

    <button class="btn" @click="plusMethod">PLUS</button>
    <button class="btn" @click="minusMethod">MINUS</button>
    <button class="btn" @click="divisionMethod">DIV</button>
    <button class="btn" @click="multiplicationMethod">MULT</button>
    <button class="btn" @click="moduloMethod">MOD</button>
    <button class="btn" @click="powerMethod">POWER</button>
<br>
    <input class="check" type="checkbox" name="openDiv" v-model="light" :true-value="on" :false-value="off">
    <label for="openDiv">Отобразить экранную клавиатуру</label>

    <div v-if="light">
       <button class="numbers" v-for="item in numbers" :key="item" @click="insertNumber(item)">{{ item }}</button>
            <button @click="clearNumber"> 
                <i class="fas fa-arrow-left"></i> 
            </button>
<br>
    <input class="radio" type="radio" value="1"  v-model="clickOperand">
    <input class="radio" type="radio" value="2"  v-model="clickOperand">
    
    </div>
  </div>
</template>

<script>

export default {
  name: 'Calc',
  data: () => ({
      operand1: 0,
      operand2: 0,
      result: 0,
      on: true,
      off: false,
      light: true,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      clickOperand: 1,


  }),
  methods: {
      plusMethod () {
          this.result = this.operand1 + this.operand2
      },
      minusMethod () {
          this.result = this.operand1 - this.operand2
      },
      divisionMethod () {
           this.result = this.operand1 / this.operand2
      },
      multiplicationMethod () {
          this.result = this.operand1 * this.operand2
      },
      moduloMethod () {
          this.result = this.operand1 % this.operand2
      },
      powerMethod () {
          this.result = this.operand1 ** this.operand2
      },
     insertNumber(num) {
          if (this.clickOperand == 1) {
              this.operand1 = this.operand1*10+num;
          } else if (this.clickOperand == 2) {
              this.operand2 = this.operand2*10+num;
          }
      },
      clearNumber() {
          if (this.clickOperand == 1) {
              this.operand1 = Math.floor(this.operand1/10);
          } else if (this.clickOperand == 2) {
              this.operand2 = Math.floor(this.operand2/10);
          }
      },
  }
}
</script>

<style scoped>
  
  .header {
    font-size: 22px;
    font-family: sans-serif;
  }
  .text {
    font-size: 60px;
   } 
  .input {
    border:2px solid #9E9E9E;
    color: #000000;
    padding: 3px;
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 22px;
    font-family: Verdana;
    background: rgb(234, 248, 241);
    border-radius: 5px;
  }
  .btn {
    background: rgb(234, 248, 241);
    height: 60px;
    width: 60px;
    border: solid 1px black;
    font-weight:bold;
    box-shadow: 0 0 50px rgba(0,0,0,0.5); 
  }

  .check {
    margin-top: 50px;
  }

  .numbers {
    margin-top: 20px;
    background: rgb(234, 248, 241);
  }

  .radio {
    margin-top: 30px;
  }
</style>