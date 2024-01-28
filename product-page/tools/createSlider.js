export function createSlider(data) {
    let sliderContentData = '';

    data.smallPhotos.map((imgSrc) => {
        if (data.smallPhotos[0] === imgSrc) {
            sliderContentData += `<img class='selectedImg' src=${imgSrc} alt='aaa'>`;
        } else {
            sliderContentData += `<img src=${imgSrc} alt='aaa'>`;
        }
    })

    const sliderContent = `
        <div class="slider-photos">${sliderContentData}</div>
        <img class="selected-photo" src=${data.bigPhotos[0]} alt="main photo" width="458px" height="690px">`
    return sliderContent;
}