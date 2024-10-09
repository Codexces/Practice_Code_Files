// Correctly set the function name and use an event to trigger audio playback
window.onload = function() {
    // Set up the game loop to run at 10fps
    setInterval(GameLoop, 1000 / 10); // 10fps

    let myAudio = new Audio();
    myAudio.src = '/images/temple-bell-2426.mp3';
    myAudio.loop = true; // Enable looping

    function GameLoop() {
        // Play audio once, check if it's playing, and start it if it's not
        if (myAudio.paused) {
            myAudio.play().catch(function(error) {
                console.log('Autoplay prevented, waiting for user interaction.');
            });
        }
    }

    // Wait for user interaction if autoplay is blocked
    document.addEventListener('click', function() {
        myAudio.play().catch(function(error) {
            console.log('Error playing audio:', error);
        });
    }, { once: true }); // Trigger once after first click
};