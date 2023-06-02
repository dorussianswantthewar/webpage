document.querySelectorAll('.off-content-blocks img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.show__image').style.display = 'block';
        document.querySelector('.show__image img').src = image.getAttribute('src');
    }
});
document.querySelector('.show__image').onclick = () =>{
    document.querySelector('.show__image').style.display = 'none';
    
}