
let numFirst = 0; //계산입력 첫 번째 숫자
let numSecond = 0;//계산입력 두 번째 숫자
let op_input = null;//입력된 연산자를 저장하는 변수

//화살표 함수(arrow function)
//numFuc : 숫자를 입력받아 처리하는 함수
const numFunc = (n) => {
  // console.log('호출');
  // console.log(n);
  // console.log(op_input);
  if (op_input === null) {
    // numFirst = numFirst * 10 + n;
    // //if문으로 소수점을 나오게 해야하함. include 포함되어 있는지 확인해
    // input_num.value = numFirst;
    input_num.value = input_num.value + n;
    numFirst = Number.parseFloat(input_num.value)
    input_num.value = numFirst
    console.log('null');
    console.log(input_op.value);
  } else {
    console.log('else문')
    
    input_num.value = input_num.value + n;
    numSecond = Number.parseFloat(input_num.value)
    input_num.value = numSecond

    // input_num.value = numSecond;
    // numSecond = numSecond * 10 + n;

    // input_num.value = numSecond;
    // console.log('not-null');
    // console.log(input_op.value);
  }
};

// 화살표 함수(arrow function)
//dotFunc 오류가 있음
const dotFunc = (dot) => {
  if(input_num.value.indexOf('.') === -1){
      input_num.value += '.';
    }
};

// 화살표 함수(arrow function)
//opFunc : 연산자 & 초기화를 처리하는 함수
const opFunc = (op) => {
  switch(op) {
    case '+':
    case '-':
    case 'x':
    case '/':
      op_input = op;
      input_op.value = op_input;
      break;
    case '=':
    // console.log (numFirst);
    // console.log (numSecond);
    
    // = 결과 --> switch-case문으로 첫 번째 숫자와 두 번째 숫자가 들어갔을 때 계산을
      switch (op_input){
        case '+':
          input_num.value = parseInt(numFirst) + parseInt(numSecond);
          break;
        case '-':
          input_num.value = parseInt(numFirst) - parseInt(numSecond);
          break;
        case 'x':
          input_num.value = parseInt(numFirst) * parseInt(numSecond);
          break;
        case '/':
          input_num.value = parseInt(numFirst) / parseInt(numSecond);
          break;
      }
      //두 번 이상 계산할 때 결과값 첫 번째 값에 넣고 나머지 값은 초기화
      input_op.value = '';
      numFirst = input_num.value;
      numSecond = '';
      op_input = '';
      break;

    case 'AC':
      //다 초기화 시키기
      numFirst = 0; 
      numSecond = 0;
      op_input = null;
      input_num.value = 0;
      input_op.value = '';
      break;
  }
};



const input_num = document.querySelector('#result');//숫자 결과창
const input_op = document.querySelector('#operator');//연산자 결과창
const dot = document.querySelector('#dot');//.




//번호 눌렀을 때 numFunc함수 실행
document.querySelector('#n0').addEventListener('click',  () => {
  numFunc(0);});
document.querySelector('#n1').addEventListener('click',  () => {
  numFunc(1);});
document.querySelector('#n2').addEventListener('click',  () => {
  numFunc(2);});
document.querySelector('#n3').addEventListener('click',  () => {
  numFunc(3);});
document.querySelector('#n4').addEventListener('click',  () => {
  numFunc(4);});
document.querySelector('#n5').addEventListener('click',  () => {
  numFunc(5);});
document.querySelector('#n6').addEventListener('click',  () => {
  numFunc(6);});
document.querySelector('#n7').addEventListener('click',  () => {
  numFunc(7);});
document.querySelector('#n8').addEventListener('click',  () => {
  numFunc(8);});
document.querySelector('#n9').addEventListener('click',  () => {
  numFunc(9);});



//. 눌렀을 때  dotFunc함수 실행
document.querySelector('#dot').addEventListener('click', () => {
  dotFunc('.');});



//연산자 눌렀을 때 opFunc함수 실행
document.querySelector('#op_plus').addEventListener('click', () => {
  opFunc('+');});
document.querySelector('#op_sub').addEventListener('click', () => {
  opFunc('-');});
document.querySelector('#op_mul').addEventListener('click', () => {
  opFunc('x');});
document.querySelector('#op_div').addEventListener('click', () => {
  opFunc('/');});
document.querySelector('#op_calc').addEventListener('click', () => {
  opFunc('=');});
document.querySelector('#op_clr').addEventListener('click', () => {
  opFunc('AC');});