document.addEventListener('DOMContentLoaded', () => {
  const eutteumBtn = document.getElementById('eutteum-gif-button');
  const amyBtn = document.getElementById('amy-gif-button');
  const eutteumContainer = document.getElementById('eutteum-gif-container');
  const amyContainer = document.getElementById('amy-gif-container');

  // 으뜸이 GIF 목록 전체 업데이트
  const eutteumGifs = [
    'https://media1.tenor.com/m/h24uJMj25-gAAAAC/%ED%9D%94%ED%95%9C%EB%82%A8%EB%A7%A4-%EC%9C%BC%EB%9C%B0.gif',
    'https://media1.tenor.com/m/y50-nJIL2-0AAAAC/%EB%83%A3%ED%95%98-%ED%9D%94%ED%95%9C%EB%82%A8%EB%A7%A4.gif',
    'https://media.tenor.com/dZ9a-l2pNAYAAAAM/heunhan-nammae.gif'
  ];

  // 에이미 GIF 목록 전체 업데이트
  const amyGifs = [
    'https://media1.tenor.com/m/wD29_mtD8pAAAAAC/%EC%97%90%EC%9D%B4%EB%AF%B8-%ED%9D%94%ED%95%9C%EB%82%A8%EB%A7%A4.gif',
    'https://media.tenor.com/yS5Y8YyO9j4AAAAM/heunhan-nammae.gif',
    'https://media.tenor.com/4g3D4c3aM_sAAAAM/heunhan-nammae.gif'
  ];

  function showRandomGif(container, gifArray) {
    const validGifs = gifArray.filter(url => url.startsWith('http'));
    if (validGifs.length === 0) {
        container.innerHTML = '표시할 GIF가 없어요!';
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * validGifs.length);
    const randomGifUrl = validGifs[randomIndex];

    container.innerHTML = `<img src="${randomGifUrl}" alt="흔한남매 랜덤 GIF">`;
  }

  eutteumBtn.addEventListener('click', () => {
    showRandomGif(eutteumContainer, eutteumGifs);
  });

  amyBtn.addEventListener('click', () => {
    showRandomGif(amyContainer, amyGifs);
  });
});
