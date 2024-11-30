let currentSentence = 1;
const totalSentences = 3;

function showNextSentence() {
    document.getElementById(`sentence${currentSentence}`).style.display = 'none';
    currentSentence = currentSentence < totalSentences ? currentSentence + 1 : 1;
    document.getElementById(`sentence${currentSentence}`).style.display = 'flex';
}

setInterval(showNextSentence, 5000); // 每5秒切換一次
