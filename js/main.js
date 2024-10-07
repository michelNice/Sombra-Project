$(function() {
  $(".br").click(function() {
      //cabeçalho
      $(".nav-menu").children().eq(0).text("Home");
      $(".nav-menu").children().eq(1).text("sobre mim");
      $(".nav-menu").children().eq(2).text("Galleria");
      $(".nav-menu").children().eq(3).text("contato");
      $(".language-selected").text("pt-BR");
      $(".language-selected").removeClass("change-en");
      $(".language-selected").removeClass("change-es");
      $(".language-selected").addClass("change-br");
      //seção
      $("#title").text("Derek, um b-boy de Olinda, Pernambuco, conquistou triunfantemente a vitória em um evento local. Com ampla experiência em workshops, ele viajou por vários estados, mostrando suas habilidades desde 2012. Sua paixão por breaking é igualada apenas por sua dedicação ao ofício, pois ele constantemente busca oportunidades para aprender e crescer. Derek colaborou com vários artistas, misturando estilos e influências para criar uma assinatura de performance única. Conhecido por sua criatividade e destreza técnica, ele inspira dançarinos mais jovens enquanto participa de eventos e competições comunitárias. Sempre ansioso para compartilhar seu conhecimento, Derek organiza workshops que capacitam outros a se expressarem por meio da dança.");
      //sobre

      $(".padded-multi-line").eq(0).find("span span").text("SOBRE MIM");


      $(".padded-multi-line").eq(1).find("span span").text("GALLERIA");

     
      $(".padded-multi-line").eq(2).find("span span").text("CONTATO");


      $(".name-js").text("Nome");
      $(".name-input-js").attr("placeholder", "Nome");


      $(".lastname-js").text("Sobrenome");
      $(".lastname-input-js").attr("placeholder", "Sobrenome");


      $(".message-js").text("Mensagem")
      $(".input-message-js").attr("placeholder", "Sua mensagem");

      $("#form-button").text("Envia");



  
  });
});


//english
$(function() {
  $(".en").click(function() {
      //cabeçalho
      $(".nav-menu").children().eq(0).text("Home");
      $(".nav-menu").children().eq(1).text("About me");
      $(".nav-menu").children().eq(2).text("Gallery");
      $(".nav-menu").children().eq(3).text("Contact me");
      $(".language-selected").text("en-US");
      $(".language-selected").removeClass("change-br");
      $(".language-selected").removeClass("change-es");
      $(".language-selected").addClass("change-en");
      //seção
      $("#title").text("Derek, a b-boy hailing from Olinda, Pernambuco, has triumphantly clinched victory at a local event. With extensive experience in workshops, he has traveled across numerous states, showcasing his skills since 2012. His passion for breaking is matched only by his dedication to the craft, as he constantly seeks opportunities to learn and grow. Derek has collaborated with various artists, blending styles and influences to create a unique performance signature. Known for his creativity and technical prowess, he inspires younger dancers while participating in community events and competitions. Always eager to share his knowledge, Derek hosts workshops that empower others to express themselves through dance.");
     
      
      $(".padded-multi-line").eq(0).find("span span").text("ABOUT ME");

      $(".padded-multi-line").eq(1).find("span span").text("GALLERY");

      $(".padded-multi-line").eq(2).find("span span").text("CONTACT ME");


      $(".name-js").text("Name");
      $(".name-input-js").attr("placeholder", "Name");


      $(".lastname-js").text("Lastname");
      $(".lastname-input-js").attr("placeholder", "Lastname");


      $(".message-js").text("Message")
      $(".input-message-js").attr("placeholder", "Your Message");

      $("#form-button").text("Send");



  });
});


//english
$(function() {
  $(".es").click(function() {
      //cabeçalho
      $(".nav-menu").children().eq(0).text("Home");
      $(".nav-menu").children().eq(1).text("Acerca de mí");
      $(".nav-menu").children().eq(2).text("galería");
      $(".nav-menu").children().eq(3).text("Contáctame");
      $(".language-selected").text("es-ES");
      $(".language-selected").removeClass("change-en");
      $(".language-selected").removeClass("change-br");
      $(".language-selected").addClass("change-es");
      //seção
      $("#title").text("Derek, un b-boy oriundo de Olinda, Pernambuco, logró triunfalmente la victoria en un evento local. Con amplia experiencia en talleres, ha viajado por numerosos estados, mostrando sus habilidades desde 2012. Su pasión por el break solo es igualada por su dedicación al oficio, ya que busca constantemente oportunidades para aprender y crecer. Derek ha colaborado con varios artistas, combinando estilos e influencias para crear una interpretación única. Conocido por su creatividad y destreza técnica, inspira a bailarines más jóvenes mientras participa en eventos y competencias comunitarias. Derek, siempre dispuesto a compartir sus conocimientos, organiza talleres que permiten a otros expresarse a través de la danza.");
      //sobre
      

      
      $(".padded-multi-line").eq(0).find("span span").text("ACERCA DE MÍ");

      $(".padded-multi-line").eq(1).find("span span").text("GALERÍA");

      $(".padded-multi-line").eq(2).find("span span").text("CONTACTAME");




      $(".name-js").text("Nombre");
      $(".name-input-js").attr("placeholder", "Nombre");


      $(".lastname-js").text("Apellido");
      $(".lastname-input-js").attr("placeholder", "Apellido");


      $(".message-js").text("Mensaje")
      $(".input-message-js").attr("placeholder", "Tu mensaje");

      $("#form-button").text("Envia");



  });
});




// Sticky Navbar
window.onscroll = function() {
  const header = document.querySelector('.header');
  const stickyPoint = header.offsetHeight / 2;
  if (window.pageYOffset > stickyPoint) {
      header.classList.add("sticky");
  } else {
      header.classList.remove("sticky");
  }
};

/*
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
*/



const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
  // Toggle the 'active' class on the menu and hamburger icon
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});


// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
 // On-page links
 if (
   location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
   && 
   location.hostname == this.hostname
 ) {
   // Figure out element to scroll to
   var target = $(this.hash);
   target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
   // Does a scroll target exist?
   if (target.length) {
     // Only prevent default if animation is actually gonna happen
     event.preventDefault();
     $('html, body').animate({
       scrollTop: target.offset().top
     }, 1000, function() {
       // Callback after animation
       // Must change focus!
       var $target = $(target);
       $target.focus();
       if ($target.is(":focus")) { // Checking if the target was focused
         return false;
       } else {
         $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
         $target.focus(); // Set focus again
       };
     });
   }
 }
});
