document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addToHomeScreen").addEventListener("click", function() {
        // Check if the browser supports the beforeinstallprompt event
        if ('beforeinstallprompt' in window) {
            // Get the beforeinstallprompt event
            window.addEventListener('beforeinstallprompt', function(event) {
                // Prevent Chrome <= 67 from automatically showing the prompt
                event.preventDefault();
                // Stash the event so it can be triggered later
                deferredPrompt = event;
                // Show the add to home screen prompt
                deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                deferredPrompt.userChoice.then(function(choiceResult) {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    // Clear the deferredPrompt variable
                    deferredPrompt = null;
                });
            });
        }
    });
});