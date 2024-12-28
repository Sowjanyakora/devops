// JavaScript to change background color and show a message
document.getElementById('changeColorButton').addEventListener('click', function() {
    // Change the background color of the body
    document.body.style.backgroundColor = getRandomColor();

    // Display a message
    document.getElementById('message').innerText = 'Background color changed!';
});

// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
