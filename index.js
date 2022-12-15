const container = document.getElementById('scroller');
function loadImages(numImages = 10) {
    let i = 0;
    while (i < numImages) {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                const img = document.createElement('img');
                img.src = `${data.message}`
                container.appendChild(img)
            })
        i++;
    }
}
loadImages();
window.addEventListener('scroll', () => {
    console.log("scrolled", window.scrollY)
    console.log(window.innerHeight)
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages();
    }
})