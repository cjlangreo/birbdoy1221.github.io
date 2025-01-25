const collection = {
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:\'",.<>?/~`'
};

function display_text(text) {
    var textField = document.getElementById('text');
    console.log(text)
    let textIndex = textField.textContent.length - 1;
    let currentIndex = 0;
    setInterval(() => {
        if (currentIndex < text.length) {
            textField.textContent += text[currentIndex];
            currentIndex++;
        }
    }, 70)
}