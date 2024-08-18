chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.from === "popup") {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {from: "background", action: message.action});
        });
    }
});
