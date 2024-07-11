document.addEventListener('DOMContentLoaded', () => {
    const minSizeInput = document.getElementById('minSize');
    const maxSizeInput = document.getElementById('maxSize');
    const toggleEnabled = document.getElementById('toggleEnabled');
    const saveButton = document.getElementById('save');
  
    chrome.storage.sync.get(['minSize', 'maxSize', 'enabled'], (data) => {
      minSizeInput.value = data.minSize || 12;
      maxSizeInput.value = data.maxSize || 36;
      toggleEnabled.checked = data.enabled || false;
    });
  
    saveButton.addEventListener('click', () => {
      const minSize = parseInt(minSizeInput.value, 10);
      const maxSize = parseInt(maxSizeInput.value, 10);
      const enabled = toggleEnabled.checked;
      
      chrome.storage.sync.set({ minSize, maxSize, enabled }, () => {
        alert('Settings saved');
      });
    });
  });
  