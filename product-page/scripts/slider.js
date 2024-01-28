document.addEventListener('sliderData', (event) => {
    sliderComponent.slider(event.detail)
})

const sliderComponent = {
    slider(sliderData) {
        const sliderPhotos = document.querySelector('.slider-photos');
        const selectedPhoto = document.querySelector('.selected-photo');

        sliderPhotos.addEventListener('click', (event) => {
            if (event.target.tagName !== 'IMG') return;
            const bigPhotoId = Array.from(sliderPhotos.children).indexOf(event.target);
            selectedPhoto.src = sliderData.bigPhotos[bigPhotoId];

            const selectedImg = document.querySelector('.selectedImg');
            selectedImg.classList.remove('selectedImg')
            event.target.classList.add('selectedImg')
        })
    }
}