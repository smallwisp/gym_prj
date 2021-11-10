const selectClub = () => {
    const clubSelect = document.querySelector('.club-select'),
          clubsList = document.querySelector('.clubs-list');
          
    clubSelect.addEventListener('click', (event) => {
        event.target.classList.toggle('flag');
        if (event.target.classList.contains('flag')) {
            event.target.nextElementSibling.style.display = 'block';
        } else {
            event.target.nextElementSibling.style.display = 'none';
        }
    })
};

export default selectClub;