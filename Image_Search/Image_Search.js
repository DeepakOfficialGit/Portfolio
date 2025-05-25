let search = document.getElementById('sname');
let Keys = document.getElementById('click');
let photos = document.getElementById('image');

Keys.onclick = function () {
    async function fun() {
        let accessKey = 'iFuGzl4SKkHI0TwrPOC_QnjU8Q6dGjeT4oU-EREolO8';

        let response = await fetch(`https://api.unsplash.com/search/photos?query=${search.value}&per_page=9&client_id=${accessKey}`);
        let data = await response.json();

        photos.innerHTML = '';

        for (let i = 0; i < data.results.length; i++) {
            let photo = data.results[i];

            let boxes = document.createElement('div');
            boxes.className = 'col-md-4';

            let imgs = document.createElement('img');
            imgs.src = photo.urls.small;

            boxes.appendChild(imgs);
            photos.appendChild(boxes);
        }

        // 🔻 Hide background after results are shown - added
        if (data.results.length > 0) {
            document.body.classList.add('hide-background'); // added
        }

        search.value = '';
    }
    fun();
};

search.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') Keys.click();
});
