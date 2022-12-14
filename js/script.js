//menu desplegable
$(document).ready(main);

var contador = 1;

function main() {
    $('.menu').click(function(){
        if (contador == 1) {
            $('nav').animate ({
                left: '0'
            });
            contador = 0;
        }
        else {
            contador = 1;
            $('nav').animate ({
                left: '-100%'
            });
        }
    });
    $('.submenu').click(function() {
        $(this).children('.children').slideToggle();
    });
}

//slider nivel
(function(){

    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('testimony__body--show');

    }

})();

//modal misión visión
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

//Preguntas
(function(){
  const titleQuestions = [...document.querySelectorAll('.questions__title')];
  console.log(titleQuestions)

  titleQuestions.forEach(question =>{
      question.addEventListener('click', ()=>{
          let height = 0;
          let answer = question.nextElementSibling;
          let addPadding = question.parentElement.parentElement;

          addPadding.classList.toggle('questions__padding--add');
          question.children[0].classList.toggle('questions__arrow--rotate');

          if(answer.clientHeight === 0){
              height = answer.scrollHeight;
          }

          answer.style.height = `${height}px`;
      });
  });
})();
