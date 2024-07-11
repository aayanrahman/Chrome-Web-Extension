function getRandomFontSize(min, max) {
    return `${Math.floor(Math.random() * (max - min + 1)) + min}px`;
  }
  
  function changeFontSizes(minSize, maxSize) {
    const elements = document.body.querySelectorAll('*');
    requestAnimationFrame(() => {
      elements.forEach(element => {
        element.style.fontSize = getRandomFontSize(minSize, maxSize);
      });
    });
  }
  
  chrome.storage.sync.get(['minSize', 'maxSize', 'enabled'], (data) => {
    if (data.enabled) {
      const minSize = data.minSize || 12;
      const maxSize = data.maxSize || 36;
      changeFontSizes(minSize, maxSize);
    }
  });
  
  