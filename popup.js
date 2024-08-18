document.getElementById("myButton").addEventListener("click", () => {
    chrome.runtime.sendMessage({from: "popup", action: "button_clicked"});
});