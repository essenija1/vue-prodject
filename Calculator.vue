<template>
     
    <div>
        <div class="display">
        <input v-model.number="operand1" type="number"/>
        <input v-model.number="operand2" type="number"/>
        = {{ result }}
        = {{ fib.Result}}
        </div>
        {{ fio }}
        <div class="error" v-if="error">
           Ошибка {{ error }}
        </div>
         <div class="error" v-show="error">
           Ошибка {{ error }}
        </div>

        <div v-for="(item, id, idx) in logs" :key="`list_${id}`">
             {{ id }} - {{ item }} - {{ idx }}
        </div>

        <div class="strange-message">
            {{ resultMessage }}
        <template v-if="result < 0">Получилось отрицательное число</template>
        <template v-else-if="result < 100">Результат в первой сотне</template>
        <template v-else>Остальной диапазон</template>
        </div>
        <div class="keyboard">
            <button v-for="operand in operands" 
            :key="operand"
             @click="calculate(operand)" 
            :title="`Операция ${operand}`"
            :disabled="operand === '/' && operand2 === 0">
              {{ operand }}
            </button>

       </div>
    </div>
</template>

<script>
  export default {
      name: "Calculator",
        data(){
            return{
                myCollection: [1,2,3,4,5,6,7],
               operands: ['+', '-', '/', '*'],
               operand1:0,
               operand2:0,
               error: '',
               result:0,
               fibResults: 0,
               lastName: "Last Name",
               userName: 'User',
               logs: {}
            }
        },
        methods: {
            colculate(operation = "+"){
                this.error = ''
                  switch(operation){
                      case '+':
                   this.add()
                   break;
                   case '-':
                    this.substruct()
                    break;
                    case '*':
                    this.multiply()
                    break;
                    case '/':
                    this.divide()
                    break;
                  }
                  const key = Date.now()
                  const value = `${this.operand1}${operation}${this.operand2}=${this.result}`
                  this.$set(this.logs, key, value)
            },
            add(){
                this.result = this.operand1 + this.operand2
                this.fibResult = this.fib1 + this.fib2
            },
            substruct(){
                this.result = this.operand1 - this.operand2
            },
            divide(){
                const {operand1, operand2} = this
                if (operand2 === 0) {
                    this.error = 'На 0 делить нельзя'
                    return

                }

               this.result = operand1 / operand2
            },
            multiply() {
                this.result = this.operand1 * this.operand2
            },
           fib(n){
                return n<= 1 ? n: this.fib(n-1) + this.fib(n-2)
           }
        },

        computed: {
            fib1(){
                return this.fib(this.operand1)
            },
            fib2(){
                return this.fib(this.operand2)
            },

          fio(){
              return this.userName && this.lastName ? `${this.lastName} ${this.userName}` : ''
          }

        }
    };

</script>
