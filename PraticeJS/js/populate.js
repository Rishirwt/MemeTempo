
var url = 'https://api.imgflip.com/get_memes';
 let html = '';
fetch(url)
.then(response => response.json())
.then(allmeme => {
    allmeme.data.memes.forEach(meme => {
        console.log(meme);
        html+= `<li class="card"> <h5>${meme.name}</h5>
<img src= ${meme.url} alt="getting memes">
</li> `
    });
  
    document.querySelector(".list").innerHTML = html; 
    
});


