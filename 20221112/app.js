const myImage = document.querySelector('.img');

document.querySelector('#inp-f').addEventListener('input', (e) => {
    console.log(e);
    console.log(e.target.value)
    console.log(e.target.files[0])
    const src =  window.URL.createObjectURL(e.target.files[0]);
    myImage.innerHTML = `<img src="${ src }" >`;
});

fetch('./Blob-NEW_seul.png')
  .then((response) => response.blob())
  .then((myBlob) => {
    console.log(myBlob);
    const objectURL = URL.createObjectURL(myBlob);
    console.log(objectURL);
    myImage.src = objectURL;
  });