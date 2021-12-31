let a;
//Popular movies
 function popular(){
    type = 'popular'
     a=1;
    
     
    common1(type,a);
}
 popular();
 
 //Top Rated Movies
 function topRated(){
    type = 'top_rated'
     a=2;
    

    common1(type,a);
}
topRated();
 
  //Upcoming movies

  function upcoming(){
    type = 'upcoming'
     a=3;
    common1(type,a);
}
upcoming();

 


  //main logic
  
function common1(type,a){
  url = `https://api.themoviedb.org/3/movie/${type}?api_key=4750523db0d1c5cd05c4585cdac5a1c5`;
  fetch(url).then((response) =>{
      return response.json();
  }).then((data) =>{
   
        console.log(data);
      
        let imgBox = document.getElementById(`imgBox${a}`);
        let viewBtn = document.getElementById(`viewBtn${a}`);
        let lessBtn = document.getElementById(`lessBtn${a}`);
        
        let popularData = data.results;
       
      
        let str =  '';
        str = `
   <div class="card my-5 imgContainer" >
     <img src="https://image.tmdb.org/t/p/w500${popularData[0].poster_path}" alt="...">
   </div>
   <div class="card my-5 imgContainer" >
     <img src="https://image.tmdb.org/t/p/w500${popularData[1].poster_path}">
   </div>
   <div class="card my-5 imgContainer" >
     <img src="https://image.tmdb.org/t/p/w500${popularData[2].poster_path}" alt="...">
   </div>
   <div class="card my-5 imgContainer" >
   <img src="https://image.tmdb.org/t/p/w500${popularData[3].poster_path}" alt="...">
 </div>
 
      `;
      imgBox.innerHTML = str;
 
      viewBtn.addEventListener('click',(e) =>{
        let viewId = document.getElementById(e.target.id);
       let img = viewId.parentElement.parentElement.parentElement.children[1];
         
          
           str = '';
          for(let k  of  popularData){
             
              str +=`
   <div class="card my-5 imgContainer" >
     <img src="https://image.tmdb.org/t/p/w500${k.poster_path}" alt="...">
   </div>`;
          }
          img.innerHTML = str;

    });

    lessBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        let viewId = document.getElementById(e.target.id);
       let img = viewId.parentElement.parentElement.parentElement.children[1];
        let str =  '';
        str = `
   <div class="card my-5 imgContainer" >
     <img src="https://image.tmdb.org/t/p/w500${popularData[0].poster_path}" alt="...">
   </div>
   <div class="card my-5 imgContainer" >
     <img src="https://image.tmdb.org/t/p/w500${popularData[1].poster_path}">
   </div>
   <div class="card my-5 imgContainer" >
     <img src="https://image.tmdb.org/t/p/w500${popularData[2].poster_path}" alt="...">
   </div>
   <div class="card my-5 imgContainer" >
     <img src="https://image.tmdb.org/t/p/w500${popularData[3].poster_path}" alt="...">
   </div>
   
      `;
      img.innerHTML = str;
    })
   
});
}

