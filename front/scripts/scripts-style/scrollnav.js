
// let lastScroll =0;
// let currentScroll=0;
// window.addEventListener('scroll', async function() {
  
  
//   currentScroll = window.scrollY || document.documentElement.scrollTop;
//   const contenedorMenu = document.getElementById('contenedor_menu');

//   if(currentScroll>0&&currentScroll!==lastScroll){
//     contenedorMenu.style.top = '-3.75rem';
    
//       await setTimeout(() => {
//         lastScroll=currentScroll;
        
//     }, 2000);
       
//   }
 

// });


// setInterval(async()=>{
//   const contenedorMenu = document.getElementById('contenedor_menu');
//   if(currentScroll!==0)
//   {
//     if(currentScroll===lastScroll){
//       contenedorMenu.style.top = '0px';
//       await setTimeout(() => {
//         contenedorMenu.style.top = '-60px';
//     }, 10000);
//     }
//   }
//   if (currentScroll === 0) {
   
//     contenedorMenu.style.top = '0rem';
   
//   } 
 
// }, 1000)

let lastScroll = 0;
let timeout;

window.addEventListener('scroll', function() {
  clearTimeout(timeout);
  
  const currentScroll = window.scrollY || document.documentElement.scrollTop;
  const contenedorMenu = document.getElementById('contenedor_menu');

  if (currentScroll !== lastScroll) {
    if (currentScroll > lastScroll) {
      // Si el usuario hace scroll hacia abajo, ocultamos el menú
      contenedorMenu.style.top = '-3.75rem';
    } else {
      
    
      contenedorMenu.style.top = '-3.75rem';
    }
    
    lastScroll = currentScroll;
    
    timeout = setTimeout(() => {
      if (currentScroll === 0) {
        contenedorMenu.style.top = '0px';
      }
      
      if (window.scrollY !== 0) {
        
        console.log(window.scrollY);
        contenedorMenu.style.top = '0rem';

        timeout = setTimeout(() => {
          contenedorMenu.style.top = '-3.75rem';
        },10000);
      }
    }, 1000);
  }
});