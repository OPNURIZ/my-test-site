document.addEventListener('DOMContentLoaded', () => {
  const eutteumBtn = document.getElementById('eutteum-gif-button');
  const amyBtn = document.getElementById('amy-gif-button');
  const eutteumContainer = document.getElementById('eutteum-gif-container');
  const amyContainer = document.getElementById('amy-gif-container');

  // 흔한남매 GIF URL 목록 (나중에 더 추가하거나 바꿀 수 있어!)
  const eutteumGifs = [
    'https://media.tenor.com/images/1f1b7f0f6f7b9f3f4b8b8b8b8b8b8b8b/tenor.gif', // 예시 GIF
    'https://media.tenor.com/images/2f2b7f0f6f7b9f3f4b8b8b8b8b8b8b8b/tenor.gif', // 예시 GIF
    'https://media.tenor.com/images/3f3b7f0f6f7b9f3f4b8b8b8b8b8b8b8b/tenor.gif'  // 예시 GIF
  ];

  const amyGifs = [
    'https://media.tenor.com/images/4f4b7f0f6f7b9f3f4b8b8b8b8b8b8b8b/tenor.gif', // 예시 GIF
    'https://media.tenor.com/images/5f5b7f0f6f7b9f3f4b8b8b8b8b8b8b8b/tenor.gif', // 예시 GIF
    'https://media.tenor.com/images/6f6b7f0f6f7b9f3f4b8b8b8b8b8b8b8b/tenor.gif'  // 예시 GIF
  ];

  function showRandomGif(container, gifArray) {
    // 배열에서 랜덤 인덱스 선택
    const randomIndex = Math.floor(Math.random() * gifArray.length);
    const randomGifUrl = gifArray[randomIndex];

    // 이미지 태그 생성 및 추가
    container.innerHTML = `<img src="${randomGifUrl}" alt="흔한남매 랜덤 GIF">`;
  }

  eutteumBtn.addEventListener('click', () => {
    showRandomGif(eutteumContainer, eutteumGifs);
  });

  amyBtn.addEventListener('click', () => {
    showRandomGif(amyContainer, amyGifs);
  });
});
