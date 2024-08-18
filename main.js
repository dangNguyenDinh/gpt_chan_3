// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.from === "background" && message.action === "button_clicked") {
//     alert("Button in popup was clicked!");
//   }
// });

function setBackgroundWithBefore(element, imageUrl) {
  if (!element) return; // Kiểm tra xem phần tử có tồn tại không

  element.style.position = "relative";
  element.style.zIndex = 1;

  const beforeElement = document.createElement("div");

  beforeElement.style.content = '""';
  beforeElement.style.position = "absolute";
  beforeElement.style.top = "0";
  beforeElement.style.left = "0";
  beforeElement.style.width = "100vw";
  beforeElement.style.height = `100vh`;
  beforeElement.style.backgroundPosition = "top left";
  beforeElement.style.backgroundImage = `url('${imageUrl}')`;
  beforeElement.style.backgroundSize = "cover";
  beforeElement.style.zIndex = "-10000";
  beforeElement.style.overflow = "hidden";
  element.style.overflow = "hidden";
  beforeElement.style.opacity = "0.5"; // Sửa typo từ opactity thành opacity

  element.appendChild(beforeElement);
}

function change_background_image(link) {
  const presentation = document.querySelector('[role="presentation"]');
  if (presentation) {
    setBackgroundWithBefore(presentation, link);
  }

  const stickyElements = document.querySelectorAll(".sticky");
  if (stickyElements.length > 0) {
    const last_sticky = stickyElements[stickyElements.length - 1];
    setBackgroundWithBefore(last_sticky, link);
  }
}

function setBackgroundForClass(className, color) {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach((element) => {
    element.style.backgroundColor = color;
    element.style.padding = "1rem";
    element.style.borderRadius = "1rem";
  });
}

function updateAvatarImages(link) {
  const elements = document.querySelectorAll(".gizmo-bot-avatar");
  elements.forEach((element) => {
    element.innerHTML = `<img src="${link}" alt="New Avatar">`;
  });
}

function setLinkOnClick() {
  const buttons = document.querySelectorAll("button");
  if (buttons.length > 1) {
    const secondButton = buttons[1];
    secondButton.addEventListener("click", (e) => {
        e.preventDefault();
        secondButton.click();
        location.reload();
    });
  }

  const firstLink = document.querySelector("a");
  if (firstLink) {
    firstLink.addEventListener("click", (e) => {
        e.preventDefault();
        firstLink.click();
        location.reload();
    });
  }
}

window.addEventListener("load", function () {
  console.log("Tất cả tài nguyên đã được tải xong");

  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        change_background_image(
          "https://i.pinimg.com/736x/98/81/54/988154dee034db90b0ee3812e0c13828.jpg"
        );
        setBackgroundForClass("agent-turn", "aliceblue");
        updateAvatarImages(
          "https://i.pinimg.com/564x/c8/41/09/c84109f4a3c34926df4f9d17f5345efe.jpg"
        );
        setLinkOnClick();
      }
    });
  }
});
