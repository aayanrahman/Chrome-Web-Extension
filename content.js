function getRandomFontSize() {
    return `${Math.floor(Math.random() * 24) + 12}px`;
  }
  
  function changeFontSizes() {
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      element.style.fontSize = getRandomFontSize();
    });
  }
  
  changeFontSizes();
  