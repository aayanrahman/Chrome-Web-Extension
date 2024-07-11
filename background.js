chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ minSize: 12, maxSize: 36, enabled: false });
  });
  
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'sync') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.reload(tabs[0].id);
      });
    }
  });
  