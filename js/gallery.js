document.querySelectorAll('.image-gallery img').forEach(image =>{ 
  image.onclick = () =>{
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.modal img').src = image.getAttribute('src');
    var captionText = document.getElementById("caption");
  }
});

document.querySelector('.modal span').onclick = () =>{
  document.querySelector('.modal').style.display = 'none';
}

document.querySelectorAll('.image-gallerycomms img').forEach(image =>{ 
  image.onclick = () =>{
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.modal img').src = image.getAttribute('src');
    var captionText = document.getElementById("caption");
  }
});

document.querySelector('.modal span').onclick = () =>{
  document.querySelector('.modal').style.display = 'none';
}