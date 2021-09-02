
$(document).ready(function(){
    //modal-video
    $('.image').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
    
    });
    //video
    $('.video').magnificPopup({
        type:'iframe'       
    
    }); 
   // or 
   $(function () {
    $('#vidBox').VideoPopUp({
     opener: "video-trigger",
     idvideo: "demo"
     });
   });

   //slcik slider
   $('.multiple-items').slick({
    infinite: true,
    slidesToShow:5,
    slidesToScroll:1,
    arrows:true,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll:1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //paralax plugin
  
  //countdown
  $("#getting-started")
  .countdown("2022/02/28", function(event) {
    $('#days').text(
      event.strftime('%D')
    );
    $('#hours').text(
        event.strftime(' %H')
      );
      $('#munites').text(
        event.strftime('%M')
      );
      $('#seconds').text(
        event.strftime('%S')
      );
  });
    
  //vide plugin

  $('#myBlock').vide('video/ocean.mp4');


});