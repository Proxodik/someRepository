export function createAddInfo(data) {
    let phrases = '';

    data.phrases.map((phrase) => {
        phrases += `<p>${phrase}</p>`
    })

    let journalPhotos = ''

    for (let info in data.journalPhotos) {
        journalPhotos += `<div class="journal-photo">
            <img src=${info} alt="img1">
            <p>${data.journalPhotos[info]}</p>
        </div>`
    }

    let instaLinks = '';

    for (let instLink in data.instagram) {
        instaLinks += `<a target="_blank" href=${data.instagram[instLink]}><img src=${instLink} alt="insta"></a>`
    }

    const addInfo = `<img src=${data.mainPhoto} alt="" width="100%" height="480px">

    <div class="product-history">${phrases}</div>

    <div class="journal-photos">${journalPhotos}</div>

    <div class="quote">
        <p>${data.quote}</p>
    </div>
</div>


<div class="instagram">
    <p class="insta-title">As Seen On Instagram</p>
    <div class="instagram-photos">${instaLinks}</div>`

    return addInfo;
}