function camHide() {
    var x = document.getElementById('servoB');
    if (x.style.display === "none") {
        x.style.display = 'block';
        document.getElementById('camBtn').innerHTML = 'Hide Cameras';
    } else {
        x.style.display = 'none';
        document.getElementById('camBtn').innerHTML = 'Show Cameras';
    }
}
