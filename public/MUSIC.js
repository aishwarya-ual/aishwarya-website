document.addEventListener('DOMContentLoaded', function () {
    const filmVideos = document.querySelectorAll('#film video');

    filmVideos.forEach(function (video) {
        video.muted = true;

        video.addEventListener('mouseover', function () {
            video.play();
            video.style.transform = 'scale(1.2)';
        });

        video.addEventListener('mouseout', function () {
            video.pause();
            video.currentTime = 0;
            video.style.transform = 'scale(1)';
        });
    });
});

document.getElementById('filmNavigator').addEventListener('click', function(){

    const filmContainerTop = document.getElementById('filmHeading').offsetTop;

    window.scrollTo({
        top: filmContainerTop,
        behavior: 'smooth'
    });
});