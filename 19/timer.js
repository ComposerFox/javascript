let count = 1;
let timerID = null;

onmessage = function(e) {
    if (e.data == "start") {
        if (timerID != null) return;    // 타이머가 작동중이면 리턴한다
        timerID = setInterval(myCallback, 1000);
    } else if (e.data == "stop") {
        if (timerID == null) return;    // 타이머가 작동하지 않으면 리턴한다
        clearInterval(timerID);
        close();
    }
}

function myCallback() {
    postMessage(count);
    count++;
}