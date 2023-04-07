const sendForms = (id) => {
/*   const forms = document.querySelectorAll('form');
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';

  const errorMessage = 'Возникла ошибка!',
        successMessage = 'Форма отправлена! Скоро с вами свяжутся.';

  async function postDataPromise(body) {
    let request = fetch('../../server.php', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    let response = await request;

    if (response.status !== 200) {
      throw new Error('Requets error!');
    }

    statusMessage.textContent = successMessage;
  };

  forms.forEach(item => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();
      item.append(statusMessage);
      const formData = new FormData(item);
      let body = {}; 

      formData.forEach((val, key) => {
        body[key] = val;
      })

      postDataPromise(body)
        .catch(error => {
          statusMessage.textContent = errorMessage;
          console.log(error);
        })
      console.log(body);
    })
  }) */

  const errorMessage = 'Возникла ошибка!',
        successMessage = 'Форма отправлена! Скоро с вами свяжутся.';
  
  const form = document.getElementById(`${id}`);

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';

  const loadGif = document.createElement('div');
  loadGif.classList.add('sk-rotating-plane'); 
  loadGif.style.marginTop = '20px';
                            
  if (id === 'form1') {
    statusMessage.style.cssText = `font-size: 2rem;
                                  color: #fff;`;
    statusMessage.style.display = 'flex';
    statusMessage.style.justifyContent = 'center';
    statusMessage.style.alignItems = 'center';
  }

  const clearInputs = (id) => {
    const form = document.getElementById(`${id}`);
    const inputs = form.querySelectorAll('input');
    inputs.forEach(item => {
      item.value = '';
    })
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.append(statusMessage);
    form.append(loadGif);
    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;

    })

    postDataPromise(body)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('network status is not 200!')
      }
      form.innerHTML = '';
      form.append(statusMessage);
      form.append(loadGif);
      loadGif.classList.remove('sk-rotating-plane');
      statusMessage.textContent = successMessage;
      clearInputs(id);
      
    })
    .catch((error) => {
      form.innerHTML = '';
      form.append(statusMessage);
      form.append(loadGif);
      loadGif.classList.remove('sk-rotating-plane');
      statusMessage.textContent = errorMessage;
      clearInputs(id);
      console.error(error);
    })
})

  const postDataPromise = (body) => {
    return fetch('../server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }; 
}

export default sendForms;