// jQuery
$(document).ready(function(){ 

 //******ejericio uno******//
 //botones desplegables de FILTRAR POR
   $('#sexo-desplegable').on('click',function(){
      $('#sexo-opciones').toggle();
   });
   $('#deporte-desplegable').on('click',function(){
      $('#deporte-opciones').toggle();
   });
   $('#color-desplegable').on('click',function(){
      $('#color-opciones').toggle();
   });
   // fin botones desplegables de FILTRAR POR
   

  //******** ejercios 2 y 3 ***********//
   //array de objets
         var products = [
                           { title: 'BotÃ­n', price: 800.44, category: 'Botines', image: 'http://placehold.it/225x225', brand: 'nike' },
                           { title: 'Ojotas', price: 300.99, category: 'Ojotas', image: 'http://placehold.it/225x225', brand: 'adidas' },
                           { title: 'Zapatillas', price: 1120.00, category: 'Calzado', image: 'http://placehold.it/225x225', brand: 'puma' },
                           { title: 'Short', price: 320.44, category: 'Vestimenta', image: 'http://placehold.it/225x225', brand: 'nike' },
                           { title: 'PantalÃ³n', price: 360.44, category: 'NataciÃ³n', image: 'http://placehold.it/225x225', brand: 'nike' } 
                        ];
         
      //Se cargan los productos dentro del HTML de forna dinamica haciendo uso de los datos del array:
      var DIVS = document.getElementsByName("DIVS");
      var contador= 1;

      for (i = 0; i < products.length; i ++) {
         //creo una variable llamda oferta, de string, vacia que luego llenare si el numero es impar
         //seguidamente incluire esta variable en el innerhtml
         //que mostrara la oferta o no
          var  oferta='';
         if (contador % 2 == 1){
                  oferta='<span class="oferta">OFERTA</span>';
               }
         DIVS[i].innerHTML = `
               <div class="articulos-individuales-foto-a">
                  <img  src="${products[i].image}" id="img${contador}">
               </div>
               <p>${oferta}</p>
               <p  class="title" id="title${contador}">${products[i].title}</p>
               <div class="contenedor-precio-marcas-categoria">
                  <span class="precio" id="precio${contador}">${products[i].price}</span>
                  <div class="marca">
                     ${products[i].brand}
                  </div>
               </div>
               <span class="categoria">
                  ${products[i].category}
               </span>
            `;
           contador= contador + 1;
           //aumento en uno el contador al finalizar cada ciclo para que luego 
           //el if detecte cuando es par o impar
      }

      //Ejericio 4: cambiar titulo tamaño y color precio

 
     
         $("#img1").on("mouseover",function(){
          $("#precio1").css("color", "#33FF39");
          $("#title1").css("fontSize", "18px");
           });
          $("#img1").on("mouseout",function(){
          $("#precio1").css("color", "#d44700");
          $("#title1").css("fontSize", "16px");
           });
         
          $("#img2").on("mouseover",function(){
          $("#precio2").css("color", "#33FF39");
          $("#title2").css("fontSize", "18px");
           });
          $("#img2").on("mouseout",function(){
          $("#precio2").css("color", "#d44700");
          $("#title2").css("fontSize", "16px");
           });

           $("#img3").on("mouseover",function(){
          $("#precio3").css("color", "#33FF39");
          $("#title3").css("fontSize", "18px");
           });
          $("#img3").on("mouseout",function(){
          $("#precio3").css("color", "#d44700");
          $("#title3").css("fontSize", "16px");
           });

           $("#img4").on("mouseover",function(){
          $("#precio4").css("color", "#33FF39");
          $("#title4").css("fontSize", "18px");
           });
          $("#img4").on("mouseout",function(){
          $("#precio4").css("color", "#d44700");
          $("#title4").css("fontSize", "16px");
           });

           $("#img5").on("mouseover",function(){
          $("#precio5").css("color", "#33FF39");
          $("#title5").css("fontSize", "18px");
           });
          $("#img5").on("mouseout",function(){
          $("#precio5").css("color", "#d44700");
          $("#title5").css("fontSize", "16px");
           });

});

      //ejercicio 5 llamada ajax
      var marcasCentrales=document.getElementById('marcasCentrales');
      var respuestaAjax=document.getElementById('resultadoFetch');

      marcasCentrales.addEventListener("click", modify); 
 
      function modify(){

            fetch(' http://remote.fizzmod.com/ajax.php')
              .then(ajaxPositive)
              .catch(showError);

              function ajaxPositive(response){
               response.text().then(showResult);
              }

              function showError(){
               console.log(showError);
              }

              function showResult(txt) {
                 console.log('muestro respuesta: ', txt);
                 marcasCentrales.style.display = "none";
                 respuestaAjax.innerHTML=txt;
               }

      }
      