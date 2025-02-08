const form = document.querySelector('#searchForm')
const display = document.querySelector('section.display')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value
    const config = {
        params : {
            q : searchTerm
        },
        headers : {

        }
    }
    const res = await axios.get(`http://api.tvmaze.com/search/shows/`, config)
    makeImages(res.data)
    form.elements.query.value = ''
})

const makeImages = (data) => {
    for (let result of data) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            display.append(img)   
        }
    }
}