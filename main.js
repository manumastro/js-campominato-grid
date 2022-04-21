/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

const container = document.getElementById('container');

init();

function init(){
  const select = document.getElementById('difficulty').value;
  

  if(select === 'facile'){
    for(let i = 0; i < 100; i++){
      const square = createSquare(container, i, select);
      square.addEventListener('click', function(){
      this.classList.add('clicked')
      })
    }
  }else if(select === 'normale'){
    for(let i = 0; i < 81; i++){
      const square = createSquare(container, i, select);
      square.addEventListener('click', function(){
      this.classList.add('clicked')
      })
    }
  }else{
    for(let i = 0; i < 49; i++){
      const square = createSquare(container, i, select);
      square.addEventListener('click', function(){
      this.classList.add('clicked')
      })
    }
  }
  
}

function createSquare(ctn, n, diff){
  const square = document.createElement('div');
  square.className = 'square';
  square.innerHTML = `<span>${n + 1}</span>`;
  square.classList.add(getOddEven(n));
  if(diff === 'facile'){
    square.classList.add('square-easy');
  }else if(diff === 'normale'){
    square.classList.add('square-normal');
  }else{
    square.classList.add('square-hard')
  }
  ctn.append(square);
  return square;
}

function getOddEven(n){
  if(n % 2){
    return 'even';
  }else{
    return 'odd';
  }
}
