document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const hotel = document.getElementById('hotel').value;
    const nights = document.getElementById('nights').value;

    const transactionResult = document.getElementById('transactionResult');
    transactionResult.textContent = `Thank you, ${name}. Your booking for ${hotel} for ${nights} nights has been confirmed. A confirmation email has been sent to ${email}.`;

    // Here you can add code to process the transaction (e.g., send data to the server)
});
