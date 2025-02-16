document.getElementById('colorPicker').addEventListener('input', function () {
    document.getElementById('textSample').style.color = this.value;
});

document.getElementById('sizePicker').addEventListener('input', function () {
    document.getElementById('textSample').style.fontSize = this.value + 'px';
});

document.getElementById('fontPicker').addEventListener('change', function () {
    document.getElementById('textSample').style.fontFamily = this.value;
});
