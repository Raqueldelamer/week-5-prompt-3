function createMessage() {
    let message = {};
    message.sender = prompt("What is your name?");
    message.recipient = prompt("Who will you send the message to?")
    message.request = prompt("What is your request?");
  
    myMessage.innerHTML = `Dear ${message.recipient}, First off, I truly appreciate you and all your help. I just wanted to ask you if you could please ${message.request} next week? It would be a big help and I will pay you for your time. Let me know at your convenience. Sincerely, ${message.sender}`
  
    myHeader.style.color = "white";
    myHeader.style.backgroundColor = "blue";
    myMessage.style.color = "black";
    myMessage.style.backgroundColor = "cyan";
  }
  
  messageButton.onclick = createMessage;