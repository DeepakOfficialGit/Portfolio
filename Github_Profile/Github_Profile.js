let bhailikha = document.getElementById('bhailikh');
let bhaidekh = document.getElementById('bhaiclick');

bhaidekh.onclick = function (event) {
    async function fun() {
        let bhaihai = bhailikha.value;
        let bhai = await fetch(`https://api.github.com/users/${bhaihai}`);
        let bhaibhai = await bhai.json();

        let bhainame = document.getElementById('bhainaam');
        let bhaibio = document.getElementById('bhaidata');
        let bhaiimg = document.getElementById('bhaiphoto');

        bhainame.textContent = bhaibhai.name || 'Not Found';
        bhaibio.textContent = bhaibhai.bio || 'Not Found';

        bhaiimg.setAttribute('src', bhaibhai.avatar_url || 'Not Found');

        let bhaicard = document.querySelector('.card');
        bhaicard.classList.remove('d-none');    

        let bhaigo = document.getElementById('bhaiview');
        bhaigo.innerHTML = `<a href="${bhaibhai.html_url}" target="_blank" style="color:black; text-decoration: none;">View Profile</a>` || 'User Not Found';
    }
    fun();
};

bhailikha.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') bhaidekh.click();
    });