function redirectToYes() {
    window.location.href = "yes-page.html";
}

function runAway() {
    var noButton = document.querySelector('.buttons .no-button');
    var container = document.querySelector('.container');
    
    var containerRect = container.getBoundingClientRect();
    var buttonRect = noButton.getBoundingClientRect();

    var maxX = containerRect.width - buttonRect.width;
    var maxY = containerRect.height - buttonRect.height;

    // Adjust the random range and factor for more randomness and larger movement area
    var randomFactorX = 2; // You can experiment with different values
    var randomFactorY = 2; // You can experiment with different values
    var newX = Math.random() * (maxX * randomFactorX);
    var newY = Math.random() * (maxY * randomFactorY);

    // Add padding for a larger movement area
    var paddingX = 50; // You can experiment with different values
    var paddingY = 50; // You can experiment with different values
    newX = newX - paddingX + (Math.random() * 2 * paddingX);
    newY = newY - paddingY + (Math.random() * 2 * paddingY);

    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
    
    // You can add more animations or actions here if needed
}
