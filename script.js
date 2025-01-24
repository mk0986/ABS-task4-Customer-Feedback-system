document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    if (!rating || !comments) {
        alert('Please fill out all fields.');
        return;
    }

    console.log('Rating:', rating);
    console.log('Comments:', comments);

    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = 'Thank you for your feedback!';
    responseMessage.style.color = 'green';

    document.getElementById('feedback-form').reset();
});
