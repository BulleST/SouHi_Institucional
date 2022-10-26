<script src="https://unpkg.com/aos@next/dist/aos.js"></script>

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
})