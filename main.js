

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




  $('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 14000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });
  

  $(document).ready(function () {
    $('.carousel').slick({
      //   change prev and next button
  
      prevArrow:
        '<button class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button class="slick-next" aria-label="Next" type="button"> <i class="fas fa-chevron-right"></i></button>',
  
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 1,
    });
  });
  
  





  window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: '.carousel__indicadores',
      arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
      },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 450,
          settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 800,
          settings: {
          slidesToShow: 6,
          slidesToScroll: 1
          }
        }
      ]
    });
  });


  window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista_1'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: '.carousel__indicadores',
      arrows: {
        prev: '.carousel__anterior_1',
        next: '.carousel__siguiente_1'
      },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 450,
          settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 800,
          settings: {
          slidesToShow: 4,
          slidesToScroll: 1
          }
        }
      ]
    });
  });





  
  window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista_2'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: '.carousel__indicadores',
      arrows: {
        prev: '.carousel__anterior_2',
        next: '.carousel__siguiente_2'
      },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 450,
          settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 800,
          settings: {
          slidesToShow: 4,
          slidesToScroll: 1
          }
        }
      ]
    });
  });

  







  