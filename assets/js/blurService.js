document.addEventListener("DOMContentLoaded", () => {
  let serviceBtns = document.querySelectorAll('.service-button');
  let servicePictures = document.querySelectorAll('.service-picture');
  let serviceFigcaptions = document.querySelectorAll('.service-figcaption');
  let countActiveBtns = 0;

  serviceBtns.forEach(x => {
    x.addEventListener('click', function() {
      if (countActiveBtns < 2) {
        countActiveBtns += (x.classList.contains('active')) ? -1 : 1;
        x.classList.toggle('active');
        removeBlur(x);
        if (countActiveBtns) {
          serviceBtns.forEach(y => {
            if (!y.classList.contains('active')) {
              addBlur(y);
            }
          }) 
        } else {
          servicePictures.forEach(y => y.classList.replace('blur', 'unblur'));
          serviceFigcaptions.forEach(y => y.classList.replace('blur', 'unblur'))
        }
      } else if (countActiveBtns === 2 && x.classList.contains('active')) {
        countActiveBtns -= 1;
        x.classList.remove('active');
        addBlur(x);
      }
    })})

  function addBlur(elem) {
    if (elem.classList.contains('gardens')) {
      servicePictures[0].classList.replace('unblur', 'blur');
      servicePictures[4].classList.replace('unblur', 'blur');
      serviceFigcaptions[0].classList.replace('unblur', 'blur');
      serviceFigcaptions[4].classList.replace('unblur', 'blur');
    } else if (elem.classList.contains('lawn')) {
      servicePictures[2].classList.replace('unblur', 'blur');
      serviceFigcaptions[2].classList.replace('unblur', 'blur');
    } else {
      servicePictures[1].classList.replace('unblur', 'blur');
      servicePictures[3].classList.replace('unblur', 'blur');
      servicePictures[5].classList.replace('unblur', 'blur');
      serviceFigcaptions[1].classList.replace('unblur', 'blur');
      serviceFigcaptions[3].classList.replace('unblur', 'blur');
      serviceFigcaptions[5].classList.replace('unblur', 'blur');
    }
  }

    function removeBlur(elem) {
      if (elem.classList.contains('gardens')) {
        servicePictures[0].classList.replace('blur', 'unblur');
        servicePictures[4].classList.replace('blur', 'unblur');
        serviceFigcaptions[0].classList.replace('blur', 'unblur');
        serviceFigcaptions[4].classList.replace('blur', 'unblur');
      } else if (elem.classList.contains('lawn')) {
        servicePictures[2].classList.replace('blur', 'unblur');
        serviceFigcaptions[2].classList.replace('blur', 'unblur');
      } else {
        servicePictures[1].classList.replace('blur', 'unblur');
        servicePictures[3].classList.replace('blur', 'unblur');
        servicePictures[5].classList.replace('blur', 'unblur');
        serviceFigcaptions[1].classList.replace('blur', 'unblur');
        serviceFigcaptions[3].classList.replace('blur', 'unblur');
        serviceFigcaptions[5].classList.replace('blur', 'unblur');
      }
  }
})