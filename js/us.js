$(document).ready(main);

var contador = 1;

function main() {
    $('.bt-menu').click(function(){
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
