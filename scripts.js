document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    handleKeyPress(key);
});

document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', function() {
        const key = this.getAttribute('data-key');
        handleKeyPress(key);
    });
});

function handleKeyPress(key) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // נקה את התוכן הקודם

    if (key >= 'a' && key <= 'z') {
        playSound(key);
        displayContent(key);
    }
}

function playSound(key) {
    // בדיקה אם קובץ האודיו קיים
    const audioFilePath = `sounds/${key}.mp3`;
    const audio = new Audio(audioFilePath);
    audio.play().catch(error => {
        console.error(`Error playing sound for key ${key}:`, error);
    });
}

function displayContent(key) {
    const contentDiv = document.getElementById('content');

    // דוגמא להצגת טקסט
    const textElement = document.createElement('p');
    textElement.textContent = `לחצתם על האות ${key}`;
    contentDiv.appendChild(textElement);

    // דוגמא להצגת וידאו
    const videoElement = document.createElement('video');
    videoElement.src = `videos/${key}.mp4`;
    videoElement.controls = true;
    contentDiv.appendChild(videoElement);
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// פתיחת המקלדת במכשיר נייד
document.addEventListener('click', function() {
    const hiddenInput = document.getElementById('hidden-input');
    hiddenInput.focus();
    hiddenInput.click();
});
