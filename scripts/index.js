const buttonVisibilityFilmPageNode = document.querySelector('#button-visibilityFilmPage');
const filmPageRefNode = document.querySelector('#filmPageRef');

const audioNode = document.querySelector('audio');
audioNode.volume = 0.1;

buttonVisibilityFilmPageNode.addEventListener('click',function() {
    refVisibility = filmPageRefNode.style.visibility;
    if(refVisibility == 'hidden')
    {
        refVisibility = 'visible';
    } else {
        refVisibility = 'hidden';
    };

    filmPageRefNode.style.visibility = refVisibility;
});

