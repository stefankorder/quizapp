import { toogleAnswer, bookmarkToogle } from './toggle';

toggleElement('.question__button', toogleAnswer)
toggleElement('.question__checkbox', bookmarkToogle)

function toggleElement(selector, toogleItem) {
    const toggles = document.querySelectorAll(selector);
    toggles.forEach(toogleItem);
}    