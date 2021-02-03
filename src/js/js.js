const buttons = document.querySelectorAll('.question__button')

buttons.forEach(button =>
button.addEventListener('click',
    () => {
        const answer = button.parentNode.querySelector('.question__text');
        answer.classList.toggle('hidden');

        const tag = button.parentNode.querySelector('.right');
        tag.classList.toggle('tag');

        button.innerText = answer.classList.contains('hidden')
        ? 'Show'
        : 'Hide';
        button.innerText += ' Answer';
}))

const bookmarks = document.querySelectorAll('.question__checkbox')

bookmarks.forEach(bookmark =>
bookmark.addEventListener('click',
    () => {
        bookmark.classList.toggle('checked');
}))