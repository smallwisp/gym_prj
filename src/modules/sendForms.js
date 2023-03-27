const sendForms = () => {
  const forms = document.querySelectorAll('form');
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';
  
  forms.forEach(item => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();

    })
  })
}

export default sendForms;