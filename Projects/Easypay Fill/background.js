chrome.action.onClicked.addListener((tab) => {
  if (
    tab.url.includes("easypay.drcsystems.ooo") ||
    tab.url.includes("easypay-new.drcsystems.ooo")
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["execute.js"],
    });
  } else {
    console.log("This extension only works on Easypay domains.");
  }
});
