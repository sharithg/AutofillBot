var contextMenus = {};

contextMenus.createCounterString = chrome.contextMenus.create(
  { title: "Autofill info" },
  () => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  }
);

const contextMenuHandler = (info, tab) => {
  if (info.menuItemId === contextMenus.createCounterString) {
    chrome.tabs.executeScript({
      file: "js/autofill.js",
    });
  }
};

chrome.contextMenus.onClicked.addListener(contextMenuHandler);
