function toogleAnswer (button) {
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
        })}

function bookmarkToogle (bookmark) {
    bookmark.addEventListener('click',
        () => {
            bookmark.classList.toggle('checked');
        })}

export { toogleAnswer, bookmarkToogle }