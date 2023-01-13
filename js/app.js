const list = document.querySelector('.list');
const listValues = list.querySelectorAll('li');
const listLength = listValues.length;
const myButton = document.querySelector('.button');

function sortSettings (a, b) {
    let x = a.childNodes[0].nodeValue;
    let y = b.childNodes[0].nodeValue;
    return x.localeCompare(y);
} 

function insertAfter (secondElement, firstElement) {
    secondElement.parentNode.insertBefore(secondElement, firstElement.nextSibling);
}

myButton.addEventListener('click', () => {
    let arr = Array.from(listValues).sort(sortSettings);
    for(let i = 1; i < listLength; i++) {
        insertAfter(arr[i], arr[i-1]);
    }
});





