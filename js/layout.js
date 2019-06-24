$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: true,
  nav: false,
  items: 1,
  autoHeight: true,
  autoplaySpeed: 1000,
});


// XZOOM
$('.xzoom-carousel').owlCarousel({
  loop:false,
  autoplay: false,
  dots: false,
  margin:10,
  nav: true,
  items: 4,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15, position: 'inside'});
$('.main-image').bind('click', function () {
  var xzoom = $(this).data('xzoom');
  xzoom.closezoom();
  var gallery = xzoom.gallery().cgallery;
  var i, images = new Array();
  for (i in gallery) {
    images[i] = {
      src: gallery[i]
    };
  }
  $.magnificPopup.open({
    items: images,
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  event.preventDefault();
});

$('.product-carousel').owlCarousel({
  loop: false,
  autoplay: false,
  dots: false,
  nav: true,
  margin: 30,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
  responsive: {
    0: {
      items:1,
    },
    575: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items:4,
    }
  }
});

$('.comunity-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  autoplaySpeed: 1000,
  margin: 30,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
  responsive: {
    0: {
        items:1,
    },
    575: {
      items:2
    },
    992: {
      items: 3
    },
    1200: {
      items:3,
    }
  }
});

$('.our-product-carousel').owlCarousel({
  loop: false,
  autoplay: false,
  dots: true,
  nav: true,
  items: 1,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

$('.adaptable-carousel').owlCarousel({
  loop: false,
  autoplay: false,
  dots: false,
  nav: true,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
  responsive: {
    0: {
        items:1,
    },
    575: {
      items:2
    },
    992: {
      items:3,
      nav: true,
      autoplay: true,
      loop: true,
    },
    1200: {
      items:4,
    }
  }
});


$(document).ready(() => {
  // GO TOP
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.go-top').fadeIn().css('transform','scale(1)');
    } else {
      $('.go-top').fadeOut().css('transform','scale(0)');
    }
  });

  $('.article-top a, .go-top').click(() => {
    $('html, body').animate({
      scrollTop: $($('.product')).offset().top + 1
    }, 300, 'linear');
  });

  $('.order-submit').click(() => {
    Swal({
      title: 'Đặt hàng thành công',
      type: 'success',
      html: 'Quý khách vui lòng kiểm tra hòm thư có chứa thông tin đơn hàng. Xin cám ơn !',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        'Tiếp tục mua sắm',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });

  $('.order-submit').on('click', function() {
    $('.quickview, .modal-backdrop').removeClass('show')
    $('.quickview').css('display', 'none');
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open')
  })
});
