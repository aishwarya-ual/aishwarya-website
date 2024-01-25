
function changeImage() {
    var imgElement = document.getElementById("aishu");
    imgElement.src = "IG.png"; // Replace "new_image.jpg" with your actual new image source
    imgElement.onclick = function() {
        window.location.href = "https://www.instagram.com/aishwaryargowri";
    };
}

function restoreImage() {
    var imgElement = document.getElementById("aishu");
    imgElement.src = "814FA533-09E6-4F54-AABB-60620345CC5D.JPG";
    imgElement.onclick = null;
}
