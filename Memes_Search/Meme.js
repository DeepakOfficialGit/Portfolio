const API_KEY = 'JjtuWTZMzhqXWRujAeS0RthZtVn1jwNF';  //API
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const limitSelect = document.getElementById('limitSelect');
const gifContainer = document.getElementById('gifContainer');
const message = document.getElementById('message');

async function fetchGifs(query, limit) {
  message.textContent = 'Loading GIFs...';
  gifContainer.innerHTML = '';

  if (!query) {
    message.textContent = 'Please enter a search term.';
    return;
  }

  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=${limit}&rating=g`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.data.length) {
      message.textContent = 'No GIFs found.';
      return;
    }

    message.textContent = `Found ${data.data.length} GIFs for "${query}".`;

    // 🔻 Background hide on result show
    document.body.classList.add('hide-background'); // ✅ Add this line

    data.data.forEach(gifData => {
      const gifUrl = gifData.images.fixed_height.url;

      const col = document.createElement('div');
      col.className = 'col-md-4';

      const card = document.createElement('div');
      card.className = 'gif-card';

      const img = document.createElement('img');
      img.src = gifUrl;
      img.alt = gifData.title || 'Meme GIF';

      const downloadBtn = document.createElement('button');
      downloadBtn.className = 'download-btn';
      downloadBtn.textContent = 'Download';
      downloadBtn.title = 'Download GIF';
      downloadBtn.onclick = () => downloadGif(gifUrl, gifData.id);

      card.appendChild(img);
      card.appendChild(downloadBtn);
      col.appendChild(card);
      gifContainer.appendChild(col);
    });

  } catch (error) {
    message.textContent = 'Error fetching GIFs. Please try again later.';
    console.error(error);
  }
}

function downloadGif(url, id) {
  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `meme_${id}.gif`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
    .catch(err => {
      alert('Failed to download GIF');
      console.error(err);
    });
}

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  const limit = limitSelect.value;
  fetchGifs(query, limit);
});

searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});
