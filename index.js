window.addEventListener('load', function() {
    var image = document.getElementById('cover');
    image.style.opacity = 1;
  });





  window.addEventListener('load', function() {
    var image = document.getElementById('map');
    image.style.opacity = 1;
  });





  window.addEventListener('load', function() {
    var image = document.getElementById('index');
    image.style.opacity = 1;
  });





  window.addEventListener('load', function() {
    var image = document.getElementById('card');
    image.style.opacity = 1;
  });





function isElementPartiallyInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    var isTopVisible = rect.top < windowHeight && rect.bottom >= 0;
    var isLeftVisible = rect.left < windowWidth && rect.right >= 0;
  
    return isTopVisible && isLeftVisible;
  }
  
  function handleScroll() {
    var fadeIns = document.getElementsByClassName('fade-in');
  
    for (var i = 0; i < fadeIns.length; i++) {
      var div = fadeIns[i];
  
      if (isElementPartiallyInViewport(div)) {
        div.style.opacity = '1';
      } else {
        div.style.opacity = '0';
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);





  $(document).ready(function() {
    var previewImages = $("#imageContainer img");
    var modalContainer = $("<div></div>").attr("id", "modalContainer").addClass("modal-container");
    var modalContent = $("<div></div>").attr("id", "modalContent").addClass("modal-content");
    var modalImage = $("<img>").attr("id", "modalImage").addClass("modal-image").attr("alt", "");
    var closeButton = $("<span></span>").addClass("close-button").html("&times;");
    var body = $("body");
    var photo = [
      'images2/gallery1.jpg',
      'images2/gallery2.jpg',
      'images2/gallery3.jpg',
      'images2/gallery4.jpg',
      'images2/gallery5.jpg',
      'images2/gallery9.jpg',
      'images2/gallery6.jpg',
      'images2/gallery8.jpg',
      'images2/gallery7.jpg',
      ];

      modalContainer.append(modalContent);

      modalContent.append(modalImage);
      modalContent.append(closeButton);
    
      $("body").append(modalContainer);
    
      previewImages.each(function() {
        var image = $(this);
    
        image.on("click", function() {
          var source = image.attr("src");
          var alt = image.attr("alt");
    
          modalImage.attr("src", source);
          modalImage.attr("alt", alt);
    
          modalContainer.css("display", "block");
    
          body.addClass("overflow-hidden");
        });
      });
    
      closeButton.on("click", function() {
        modalContainer.css("display", "none");
    
        body.removeClass("overflow-hidden");
      });
    });
