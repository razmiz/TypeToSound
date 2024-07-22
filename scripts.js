document.addEventListener('keydown', function(event) {
    const contentDiv = document.getElementById('content');
    const key = event.key.toLowerCase();

    contentDiv.innerHTML = ''; // נקה את התוכן הקודם

    if (key >= 'a' && key <= 'z') {
        playSound(key);
        displayContent(key);
    }
});

function playSound(key) {
    // שימוש בקובץ אודיו אחד לדוגמה לכל האותיות
    const audio = new Audio('a.mp3');
    audio.play();
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