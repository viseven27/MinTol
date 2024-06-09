document.querySelector('.send-button').addEventListener('click', () => {
    const input = document.querySelector('.chat-input input');
    if (input.value.trim()) {
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = input.value;
        document.querySelector('.chat-messages').appendChild(userMessage);
        input.value = '';
    }
});
