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
      var btn =  document.querySelector('#show-or-hide')
      var container = document.querySelector('.produtos-aberto')
    
    btn.addEventListener('click', function (){
        if(container.style.display==='block'){
            container.style.display = 'none'
        }
        else{
            container.style.display = 'block'
        }
    });


    $('.slider').slick({});
})

const header = document.querySelector('.header-container')
const seta = document.querySelector('.link-top')

// window.addEventListener('scroll', function(){
//     if(window.scrollY > 0 && header.contains('bg-on')){
//         header.classList.remove('bg-on');
//         header.classList.add('bg-off')
//     }
//     else if(window.scrollY == 0 && header.contains('bg-off')){
//         header.classList.remove('bg-off');
//         header.classList.add('bg-on');
//     }
// })
function subir(){
    seta.classList.toggle('link-on', scrollY>100)
}

window.addEventListener('scroll', subir)
function ativar(){
    header.classList.toggle('bg-off', scrollY>0)
}

window.addEventListener('scroll', ativar)
