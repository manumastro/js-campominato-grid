/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

const container = document.getElementById('container');

init();

function init(){
  for(let i = 0; i < 100; i++){
    const square = createSquare(container, i);
    square.addEventListener('click', function(){
      this.classList.add('clicked')
    })
  }
}

function createSquare(ctn, n){
  const square = document.createElement('div');
  square.className = 'square';
  square.innerHTML = `<span>${n + 1}</span>`;
  square.classList.add(getOddEven(n));
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
