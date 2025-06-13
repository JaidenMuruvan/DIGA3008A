const form = document.querySelector('form');
const container = document.querySelector('.image-container');

form.addEventListener('submit',(e)=>{
    //When button submitted it will take you to other page
    e.preventDefault();
    let query = form.querySelector('input').value;
    console.log(query);

    if(query==""){
        query="flash";
    }
    tvMazeApi(query);
})

async function tvMazeApi(query){
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const movies = await req.json();
    
    makeImages(movies);
}

function makeImages(movies){
    container.innerHTML = ''; //Clears the previous results

    for(let movie of movies){
        if (!movie.show.image) continue; //Skips search if theres no image

        const src = movie.show.image.medium;
        const url = movie.show.url; //Gets the TVmaze show URL

        //Created anchor element
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank'; //Opens a new tab

        //Created image element
        const img = document.createElement('img');
        img.src = src;
        img.alt = movie.show.name;
        img.classList.add('movie-poster');//Class added for styling

        //Appended image to link, then linked to container
        link.appendChild(img);
        container.appendChild(link);
    }
}