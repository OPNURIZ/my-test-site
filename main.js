document.addEventListener('DOMContentLoaded', () => {
  const eutteumBtn = document.getElementById('eutteum-gif-button');
  const amyBtn = document.getElementById('amy-gif-button');
  const eutteumContainer = document.getElementById('eutteum-gif-container');
  const amyContainer = document.getElementById('amy-gif-container');

  // 진짜 흔한남매 GIF 주소를 여기에 넣으면 돼!
  const eutteumGifs = [
    'https://media1.tenor.com/m/h24uJMj25-gAAAAC/%ED%9D%94%ED%95%9C%EB%82%A8%EB%A7%A4-%EC%9C%BC%EB%9C%B0.gif', // 내가 찾은 진짜 GIF 주소!
    'https://media1.tenor.com/m/y50-nJIL2-0AAAAC/%EB%83%A3%ED%95%98-%ED%9D%94%ED%95%9C%EB%82%A8%EB%A7%A4.gif',
    ' 여기에 구글이나 Tenor에서 찾은 세 번째 GIF 주소를 붙여넣으세요 '
  ];

  const amyGifs = [
    'https://media1.tenor.com/m/wD29_mtD8pAAAAAC/%EC%97%90%EC%9D%B4%EB%AF%B8-%ED%9D%94%ED%95%9C%EB%82%A8%EB%A7%A4.gif', // 내가 찾은 진짜 에이미 GIF!
    ' 여기에 두 번째 에이미 GIF 주소를 붙여넣으세요 ',
    ' 여기에 세 번째 에이미 GIF 주소를 붙여넣으세요 '
  ];

  function showRandomGif(container, gifArray) {
    // 유효한 URL만 필터링
    const validGifs = gifArray.filter(url => url.startsWith('http'));
    if (validGifs.length === 0) {
        container.innerHTML = '표시할 GIF가 없어요! main.js 파일에 진짜 GIF 주소를 넣어주세요.';
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
