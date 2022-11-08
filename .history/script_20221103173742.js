{/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

  AOS.init({
    duration:500,
      once: true
  });

  var btn =  document.querySelector('#show-or-hide')
  var container = document.querySelector('.tentativa')

btn.addEventListener('click', function (){
    if(container.style.display==='block'){
        container.style.display = 'none'
    }
    else{
        container.style.display = 'block'
    }
}) */}



$(document).ready(function() {
    console.log('oi')
    AOS.init({
        duration:500,
          once: true
      });
    //   var btn =  document.querySelector('#show-or-hide')
    //   var container = document.querySelector('.produtos-aberto')
    
    // btn.addEventListener('click', function (){
    //     if(container.style.display==='block'){
    //         container.style.display = 'none'
    //     }
    //     else{
    //         container.style.display = 'block'
    //     }
    // });

    // const elementH1 = document.querySelector('section h1');
    // const container = document.querySelector('.duvida-container');

    // var botao = document.querySelectorAll('#mostrar');
    // var duvidaAberta = document.querySelectorAll( '.duvida-aberta')


    $('.slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        // autoplay: true,
        // autoplaySpeed: 2000,
        centerMode: false,
    });
})

const header = document.querySelector('.header-container')
const seta = document.querySelector('.link-top')

function subir(){
    seta.classList.toggle('link-on', scrollY>700)
}

window.addEventListener('scroll', subir)
function ativar(){
    header.classList.toggle('bg-off', scrollY>0)
}

window.addEventListener('scroll', ativar)

// var botaoDuvida = document.querySelectorAll('#oi');
// var duvidaFechada = document.querySelectorAll('.duvidas-fechadas')

// botaoDuvida.addEventListener('click', function(){
//     if(duvidaFechada.style.display === 'none'){
// duvidaFechada.style.display = 'block'
//     }
//     else{
//         duvidaFechada.style.display = 'none'
//     }
// })
$( "#panels" ).accordion({
    active: 2
  });


  var lista = document.querySelectorAll('.oi')
  lista.addEventListener('click',ativo() )
function ativo(){
    lista.forEach(x => x.classList.toggle('duvida-teste')
}