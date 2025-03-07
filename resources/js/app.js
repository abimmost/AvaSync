import "./bootstrap";
import Alpine from "alpinejs";
// import Cropper from "cropperjs";
// import "cropperjs/dist/cropper.css";

window.Alpine = Alpine;
Alpine.start();

// document.addEventListener("DOMContentLoaded", function () {
//     const fileInput = document.getElementById("pfp");
//     const profilePicture = document.getElementById("profile-picture");
//     const cropperImage = document.getElementById("cropper-image");
//     const cropperCard = document.getElementById("cropper-card");
//     const doneBtn = document.getElementById("done-btn");
//     const cancelBtn = document.getElementById("cancel-btn");
//     const chooseNewPictureBtn = document.getElementById(
//         "choose-new-picture-btn"
//     );
//     let cropper;

//     if (fileInput) {
//         fileInput.addEventListener("change", function (event) {
//             const file = event.target.files[0];
//             if (file) {
//                 const reader = new FileReader();
//                 reader.onload = function (e) {
//                     cropperImage.src = e.target.result;
//                     cropperCard.classList.remove("hidden");
//                     cropper = new Cropper(cropperImage, {
//                         aspectRatio: 1,
//                         viewMode: 1,
//                         autoCropArea: 1,
//                         cropBoxResizable: false,
//                         cropBoxMovable: true,
//                         minCropBoxWidth: 256,
//                         minCropBoxHeight: 256,
//                     });
//                 };
//                 reader.readAsDataURL(file);
//             }
//         });
//     }

//     if (doneBtn) {
//         doneBtn.addEventListener("click", function () {
//             const canvas = cropper.getCroppedCanvas({
//                 width: 256,
//                 height: 256,
//             });
//             canvas.toBlob(function (blob) {
//                 const url = URL.createObjectURL(blob);
//                 profilePicture.src = url;
//                 const dataTransfer = new DataTransfer();
//                 dataTransfer.items.add(new File([blob], "profile-picture.png"));
//                 fileInput.files = dataTransfer.files;
//                 cropperCard.classList.add("hidden");
//                 cropper.destroy();
//             });
//         });
//     }

//     if (cancelBtn) {
//         cancelBtn.addEventListener("click", function () {
//             cropperCard.classList.add("hidden");
//             cropper.destroy();
//         });
//     }

//     if (chooseNewPictureBtn) {
//         chooseNewPictureBtn.addEventListener("click", function () {
//             fileInput.click();
//             cropper.destroy();
//         });
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("pfp");
    const profilePicture = document.getElementById("profile-picture");
    const changePictureBtn = document.getElementById("change-picture-btn");
    const deletePictureBtn = document.getElementById("delete-picture-btn");
    const defaultProfilePictureUrl =
        "/storage/profile_pictures/default-profile.png";

    if (changePictureBtn) {
        changePictureBtn.addEventListener("click", function () {
            fileInput.click();
        });
    }

    if (deletePictureBtn) {
        deletePictureBtn.addEventListener("click", function () {
            profilePicture.src = defaultProfilePictureUrl;
            fileInput.value = "";
        });
    }
});
