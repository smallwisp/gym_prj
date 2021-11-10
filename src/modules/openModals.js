const openModals = function() {
  const right = document.querySelector('.right'),
        visitForm = document.querySelector('#free_visit_form'),
        callbackForm = document.querySelector('#callback_form'),
        fixedGift = document.querySelector('.fixed-gift'),
        giftForm = document.querySelector('#gift');

  function closeModal(form) {
    form.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('overlay') || target.classList.contains('close_icon')) {
        form.style.display = 'none';
      }
    })
  }
  
  right.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target);
    if (target.classList.contains('open-popup')) {
      visitForm.style.display = 'block';
    };
        
    if (target.classList.contains('btn')) {
      callbackForm.style.display = 'block';
    }
    closeModal(visitForm);
    closeModal(callbackForm);
  })

  fixedGift.addEventListener('click', (event) => {
    fixedGift.style.display = 'none';
    giftForm.style.display = 'block';
    closeModal(giftForm);
  })
};

export default openModals;
