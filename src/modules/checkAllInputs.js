import maskPhone from "./maskPhone";

const checkAllInputs = () => {

  const deleteHyphenSpace = str => {
    str = str.trim();
    str = str.replace(/ +/g, ' ');
    str = str.replace(/\-+/g, '\-');
    str = str.replace(/^-/g, '');
    str = str.replace(/-$/g, '');
    return str;
  };

  const inputsAll = document.querySelectorAll('input');

  inputsAll.forEach((item) => {
    item.value = '';
    item.addEventListener('input', (event) => {
      if (event.target.name === 'name') {
        const nameValue = event.target.value;
        event.target.value = nameValue.replace(/[;\+\>\<\*\!\=\.@:\?\,#\$\%^\&\}{\[\]\^\"\\\|\/\_)(\w]/gi, '');
      } else if (event.target.name === 'phone') {
        console.log(event.target.tagName);
        maskPhone(event.target.tagName.toLowerCase());
      } 
    })

    item.addEventListener('blur', event => {
      if (event.target.name === 'name') {
        const nameValue = event.target.value;
        event.target.value = deleteHyphenSpace(nameValue)[0].toUpperCase() + deleteHyphenSpace(nameValue).slice(1, deleteHyphenSpace(nameValue).length).toLowerCase();

      } else if (event.target.name === 'phone') {
        event.target.value = deleteHyphenSpace(event.target.value);
      }
  });
  })
};

export default checkAllInputs;