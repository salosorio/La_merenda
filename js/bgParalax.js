(function (){

//propiedades
var propParallax = {
    seccion: document.querySelector('.paralax'),
    recorrido: null,
    limite: null
   
   
   }
   
   
   // metodos
   
   var metParallax = {
   
      inicio: function(){
   
       window.addEventListener('scroll', metParallax.scrollParalax);
      },
   
      scrollParalax: function(){
   
         propParallax.recorrido =  window.pageYOffset;
         propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;
   
         if( propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite){
            
           propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';
   
         } else{
   
           propParallax.seccion.style.backgroundPositionY = 0;
         }
   
      }
   
   
   }
   
   metParallax.inicio();





}())


