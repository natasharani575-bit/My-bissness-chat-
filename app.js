// Local logic for Frontend testing
let currentUser = "";

function loginUser() {
    const inputName = document.getElementById("username-input").value.trim();
    if (inputName === "") {
        alert("برائے مہربانی اپنا نام درج کریں!");
        return;
    }
    
    currentUser = inputName;
    document.getElementById("display-my-name").innerText = currentUser;
    
    // Switch screens
    document.getElementById("login-screen").classList.remove("active");
    document.getElementById("app-screen").classList.add("active");
}

function sendMessage() {
    const inputField = document.getElementById("message-input");
    const messageText = inputField.value.trim();
    
    if (messageText === "") return;
    
    const container = document.getElementById("messages-container");
    
    // Create sent message element
    const msgDiv = document.createElement("div");
    msgDiv.className = "message sent";
    
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    msgDiv.innerHTML = `
        <div class="msg-text">${messageText}</div>
        <div class="msg-time">${timeNow}</div>
    `;
    
    container.appendChild(msgDiv);
    inputField.value = "";
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function checkEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function openChat(chatName) {
    document.getElementById("active-chat-name").innerText = chatName;
    document.getElementById("active-last-seen").innerText = "آن لائن (Last Seen: Just Now)";
}

function startVideoCall() {
    document.getElementById("call-status-text").innerText = "ویڈیو کال مل رہی ہے...";
    document.getElementById("call-modal").style.display = "flex";
}

function startAudioCall() {
    document.getElementById("call-status-text").innerText = "آڈیو کال مل رہی ہے...";
    document.getElementById("call-modal").style.display = "flex";
}

function endCall() {
    document.getElementById("call-modal").style.display = "none";
}
