const button = document.getElementById("button");
const videoElement = document.getElementById("video");

// Promt to select media stream, pass to video elemnt, then play

async function selectMediaStream() {
  try {
    const mediaStrem = await navigator.mediaDevices.getDisplayMedia();
    console.log(mediaStrem);
    videoElement.srcObject = mediaStrem;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

selectMediaStream();
