function changeSize(size) {
const textElement = document.getElementById('text');
const style = window.getComputedStyle(textElement, null).getPropertyValue('font-size');
const currentSize = parseFloat(style);
 textElement.style.fontSize = (currentSize + size) + 'px';
        }