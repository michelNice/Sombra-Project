 /***************************************/
            /*Change Language*/
 /***************************************/

$(function() {
  $(".br").click(function(event) {
      event.preventDefault(); // Prevent default link behavior
      let scrollPosition = $(window).scrollTop(); // Get current scroll position

      // Update content
      $(".nav-menu").children().eq(0).text("Home");
      $(".nav-menu").children().eq(1).text("sobre mim");
      $(".nav-menu").children().eq(2).text("Galleria");
      $(".nav-menu").children().eq(3).text("contato");
      $(".language-selected").text("pt-BR");
      $(".language-selected").removeClass("change-en change-es").addClass("change-br");
      
      // Update section text
      $("#title").text("Derek, um b-boy de Olinda, Pernambuco, conquistou triunfantemente a vitória em um evento local. Com ampla experiência em workshops, ele viajou por vários estados, mostrando suas habilidades desde 2012. Sua paixão por breaking é igualada apenas por sua dedicação ao ofício, pois ele constantemente busca oportunidades para aprender e crescer. Derek colaborou com vários artistas, misturando estilos e influências para criar uma assinatura de performance única. Conhecido por sua criatividade e destreza técnica, ele inspira dançarinos mais jovens enquanto participa de eventos e competições comunitárias. Sempre ansioso para compartilhar seu conhecimento, Derek organiza workshops que capacitam outros a se expressarem por meio da dança.");
      $(".padded-multi-line").eq(0).find("span span").text("SOBRE MIM");
      $(".padded-multi-line").eq(1).find("span span").text("GALLERIA");
      $(".padded-multi-line").eq(2).find("span span").text("CONTATO");

      $(".name-js").text("Nome");
      $(".name-input-js").attr("placeholder", "Nome");
      $(".lastname-js").text("Sobrenome");
      $(".lastname-input-js").attr("placeholder", "Sobrenome");
      $(".message-js").text("Mensagem");
      $(".input-message-js").attr("placeholder", "Sua mensagem");
      $("#form-button").text("Envia");

      $(window).scrollTop(scrollPosition); 
  });

  $(".en").click(function(event) {
      event.preventDefault();
      let scrollPosition = $(window).scrollTop();

      // Update content for English
      $(".nav-menu").children().eq(0).text("Home");
      $(".nav-menu").children().eq(1).text("About me");
      $(".nav-menu").children().eq(2).text("Gallery");
      $(".nav-menu").children().eq(3).text("Contact me");
      $(".language-selected").text("en-US");
      $(".language-selected").removeClass("change-br change-es").addClass("change-en");

      $("#title").text("#title").text("Derek, a b-boy hailing from Olinda, Pernambuco, has triumphantly clinched victory at a local event. With extensive experience in workshops, he has traveled across numerous states, showcasing his skills since 2012. His passion for breaking is matched only by his dedication to the craft, as he constantly seeks opportunities to learn and grow. Derek has collaborated with various artists, blending styles and influences to create a unique performance signature. Known for his creativity and technical prowess, he inspires younger dancers while participating in community events and competitions. Always eager to share his knowledge, Derek hosts workshops that empower others to express themselves through dance.");
      $(".padded-multi-line").eq(0).find("span span").text("ABOUT ME");
      $(".padded-multi-line").eq(1).find("span span").text("GALLERY");
      $(".padded-multi-line").eq(2).find("span span").text("CONTACT ME");

      $(".name-js").text("Name");
      $(".name-input-js").attr("placeholder", "Name");
      $(".lastname-js").text("Lastname");
      $(".lastname-input-js").attr("placeholder", "Lastname");
      $(".message-js").text("Message");
      $(".input-message-js").attr("placeholder", "Your Message");
      $("#form-button").text("Send");

      $(window).scrollTop(scrollPosition);
  });

  $(".es").click(function(event) {
      event.preventDefault();
      let scrollPosition = $(window).scrollTop();

      // Update content for Spanish
      $(".nav-menu").children().eq(0).text("Home");
      $(".nav-menu").children().eq(1).text("Acerca de mí");
      $(".nav-menu").children().eq(2).text("galería");
      $(".nav-menu").children().eq(3).text("Contáctame");
      $(".language-selected").text("es-ES");
      $(".language-selected").removeClass("change-en change-br").addClass("change-es");

      $("#title").text("Derek, un b-boy oriundo de Olinda, Pernambuco, logró triunfalmente la victoria en un evento local. Con amplia experiencia en talleres, ha viajado por numerosos estados, mostrando sus habilidades desde 2012. Su pasión por el break solo es igualada por su dedicación al oficio, ya que busca constantemente oportunidades para aprender y crecer. Derek ha colaborado con varios artistas, combinando estilos e influencias para crear una interpretación única. Conocido por su creatividad y destreza técnica, inspira a bailarines más jóvenes mientras participa en eventos y competencias comunitarias. Derek, siempre dispuesto a compartir sus conocimientos, organiza talleres que permiten a otros expresarse a través de la danza.");
      $(".padded-multi-line").eq(0).find("span span").text("ACERCA DE MÍ");
      $(".padded-multi-line").eq(1).find("span span").text("GALERÍA");
      $(".padded-multi-line").eq(2).find("span span").text("CONTACTAME");

      $(".name-js").text("Nombre");
      $(".name-input-js").attr("placeholder", "Nombre");
      $(".lastname-js").text("Apellido");
      $(".lastname-input-js").attr("placeholder", "Apellido");
      $(".message-js").text("Mensaje");
      $(".input-message-js").attr("placeholder", "Tu mensaje");
      $("#form-button").text("Envia");

      $(window).scrollTop(scrollPosition);
  });
});


 /***************************************/
            /*Skitcky Nav*/
 /***************************************/

window.onscroll = function() {
  const header = document.querySelector('.header');
  const stickyPoint = header.offsetHeight / 2;
  if (window.pageYOffset > stickyPoint) {
      header.classList.add("sticky");
  } else {
      header.classList.remove("sticky");
  }
};



 /***************************************/
            /*Humbuger Nav*/
 /***************************************/

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});


 /***************************************/
            /*Scroll Nav*/
 /***************************************/


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
   
   var target = $(this.hash);
   target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
   
   if (target.length) {
    
     event.preventDefault();
     $('html, body').animate({
       scrollTop: target.offset().top
     }, 1000, function() {
     
       var $target = $(target);
       $target.focus();
       if ($target.is(":focus")) { 
         return false;
       } else {
         $target.attr('tabindex','-1'); 
         $target.focus(); 
       };
     });
   }
 }
});


 /***************************************/
            /*Clear Input*/
 /***************************************/


document.querySelector('#form').addEventListener('submit', function (event) {
  event.preventDefault();  

  let form = event.target;
  let formData = new FormData(form);
  let email = form.querySelector('input[type="email"]').value;

  // Check if the email domain is allowed (Gmail, Hotmail, iCloud)
  if (!validateEmailDomain(email)) {
    alert('Please use a valid Gmail, Hotmail, or iCloud email address.');
    return;
  }

  // Submit the form using fetch
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    if (data.success) {
      // If the submission is successful, clear the form after 2 seconds
      setTimeout(() => {
        form.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => input.value = '');
        form.querySelectorAll('textarea').forEach(textarea => textarea.value = '');
      }, 2000);  // 2000 milliseconds = 2 seconds
      alert('Form submitted successfully!');
    } else {
      alert('Form submission failed. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  });
});

// Function to validate email domain
function validateEmailDomain(email) {
  const allowedDomains = ['gmail.com', 'hotmail.com', 'icloud.com'];
  const emailDomain = email.split('@')[1];
  return allowedDomains.includes(emailDomain);
}




