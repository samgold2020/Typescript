function add(n1: number, n2: number, showResult: boolean, phrase: string){
  if(showResult){
    //saving the result of addition inside another variable so that Javascript doesn't concat the string and number types to result in the answer being "52" and not 7
    const result = n1 + n2
    console.log(phrase + result)
  } else{
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2;
const printResult = true;
const resultPhrase = 'Result Is: ';

const result = add(number1, number2, printResult, resultPhrase)
