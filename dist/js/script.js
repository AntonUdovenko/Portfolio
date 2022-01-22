const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');
        closeOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    function validateForms(form){
        $(form).validate({
          rules: {
            name: {
              required: true,
              minlength: 2
            },
            phone: "required",
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: {
              required: "Please enter your name",
              minlength: jQuery.validator.format("Type from {0} characters!")
            },
            phone: "Please enter your phone number",
            email: {
              required: "Please enter your email",
              email: "Enter your email address correctly"
            }
          }
        });
      };

      validateForms('.contacts__form');

      $('form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) {
          return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          $('form').trigger('reset');
        });
        return false;
    });
});

