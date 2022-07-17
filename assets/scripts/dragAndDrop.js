const label = document.querySelector('.form__dropZone');
const input = document.querySelector('.dropZone__input');

const onEnter = () => {
    label.classList.add('active');
    }
const onLeave = () => {
    label.classList.remove('active');
    }
label.addEventListener('dragenter', onEnter);

label.addEventListener('dragleave', onLeave);
label.addEventListener('dragexit', onLeave);
label.addEventListener('dragend', onLeave);
label.addEventListener('drop', onLeave);

input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        document.querySelector('.form__dropZone').appendChild(img);
    }
    reader.readAsDataURL(file);
}   , false);   