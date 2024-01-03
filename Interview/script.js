$('#userinput').keypress(function (e){
	if (e.which === 13){
		sendMessage();
	}
});

function sendMessage() {
    const userInput = $('#userinput').val();
    if (userInput.trim() === '') return;

    const currentDate = new Date();
    const currentDateTime = currentDate.toLocaleString(); 

    const chatContainer = $('#messages');
    const message = $('<div class="message"></div>'); //userinput
	const reply = $('<div class="reply"></div>'); //botreply

    message.append(`<b>You</b><p>${userInput}</p><small>${currentDateTime}</small>`); 
	chatContainer.append(message);
	
    let response = getBotResponse(userInput); //validation

    reply.append(`<b>Jamie</b><p>${response}</p><small>${currentDateTime}</small>`);
    chatContainer.append(reply);

    $('#userinput').val(''); //clear
    chatContainer.scrollTop(chatContainer[0].scrollHeight); 
}


function getBotResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.endsWith('jamie')) {
        return 'Can I help you?';
    } else if (userInput.endsWith('?!') || userInput.endsWith('!?')) {
        return 'Please give me some time to resolve the issue.';
    } else if (userInput.endsWith('?')) {
        return 'Yes.';
    } else if (userInput.endsWith('!')) {
        return 'Please remain calm.';
    } else {
        return 'Sorry, I don’t understand';
    }
}
