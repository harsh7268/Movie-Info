popular();
function popular(){

    let type='popular'
     let a=1
     common1(type,a);
}
topRated();
function topRated(){

    let type='top_rated'
     let a=2
     common1(type,a);
}
upcoming();
function upcoming(){

    let type='upcoming'
     let a=3
     common1(type,a);
}

function common1(type,a) {
    url = `https://api.themoviedb.org/3/movie/${type}?api_key=4750523db0d1c5cd05c4585cdac5a1c5`;
    fetch(url).then((response) =>{
        return response.json();
    }).then((data) =>{
         let arr = [];
         popularData = data.results;
         for(let k of popularData){
            url1 = `https://api.themoviedb.org/3/movie/${k.id}?api_key=4750523db0d1c5cd05c4585cdac5a1c5`;
           fetch(url1).then((response1) =>{
               return response1.json();
           }).then((data1) =>{
                arr.push(data1);
                let mainContainer = document.getElementById(`mainContainer${a}`);
                str =`
                
                <div class="card mb-3 cardBox" >
                <div class="row no-gutters">
                  <div class="col-md-4 imgBox" >
                    <img src="https://image.tmdb.org/t/p/w500${arr[0].poster_path}" class="card-img" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body cardContent">
          
                      <h2  class="card-title title">
                        <span class="btn btn-danger">Title</span>
                        <span class="mainTitle">${arr[0].original_title}</span>
                      </h2>
          
                      <p class="card-text" >${arr[0].overview}</p>
                      <h2  class="title">
                      <span class="badge badge-info ">Budget</span>
                      <span class="contentValue"> Rs. ${arr[0].budget} </span>
                    </h2>
          
                      <h2  class="title">
                        <span class="badge badge-info ">Language</span>
                        <span class="contentValue">${arr[0].spoken_languages[0].name} </span>
                      </h2>
          
                      <h2  class="title">
                        <span class="badge badge-info ">Release Date</span>
                        <span class="contentValue">${arr[0].release_date}</span>
                      </h2>
          
                      <h3  class="title">
                        <span class="badge badge-info ">Popularity</span>
                        <span class="contentValue">${arr[0].popularity}</span>
                      </h3>
                      <h3  class="title">
                      <span class="badge badge-info ">Revenue</span>
                      <span class="contentValue">${arr[0].revenue}</span>
                    </h3>
                     
                    
                      <h2  class="title">
                        <span class="badge badge-info ">Rating</span>
                        <span class="contentValue">${arr[0].vote_average}</span>
                      </h2>
                     
                    </div>
                  </div>
                </div>
              
              </div>
        
                `;
                mainContainer.innerHTML = str;
                let lessBtn = document.getElementById(`lessBtn${a}`);
        
        
        lessBtn.addEventListener('click',(e) =>{
            e.preventDefault();
             str = '';
            
                str =`
                
                <div class="card mb-3 cardBox" >
                <div class="row no-gutters">
                  <div class="col-md-4 imgBox" >
                    <img src="https://image.tmdb.org/t/p/w500${arr[0].poster_path}" class="card-img" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body cardContent">
          
                      <h2  class="card-title title">
                        <span class="btn btn-danger">Title</span>
                        <span class="mainTitle">${arr[0].original_title}</span>
                      </h2>
          
                      <p class="card-text" >${arr[0].overview}</p>
                      <h2  class="title">
                      <span class="badge badge-info ">Budget</span>
                      <span class="contentValue"> Rs. ${arr[0].budget} </span>
                    </h2>
          
                      <h2  class="title">
                        <span class="badge badge-info ">Language</span>
                        <span class="contentValue">${arr[0].spoken_languages[0].name} </span>
                      </h2>
          
                      <h2  class="title">
                        <span class="badge badge-info ">Release Date</span>
                        <span class="contentValue">${arr[0].release_date}</span>
                      </h2>
          
                      <h3  class="title">
                        <span class="badge badge-info ">Popularity</span>
                        <span class="contentValue">${arr[0].popularity}</span>
                      </h3>
          
                      <h3  class="title">
                      <span class="badge badge-info ">Revenue</span>
                      <span class="contentValue">${arr[0].revenue}</span>
                    </h3>
                     
                    
                      <h2  class="title">
                        <span class="badge badge-info ">Rating</span>
                        <span class="contentValue">${arr[0].vote_average}</span>
                      </h2>
                     
                    </div>
                  </div>
                </div>
              
              </div>
        
                `;
            
            let elm = document.getElementById(e.target.id);
            let mainBox = elm.parentElement.parentElement.parentElement.children[1];
            mainBox.innerHTML = str;
        });
        });
    }
        console.log(arr);
    
         let moreBtn = document.getElementById(`moreBtn${a}`);
        
        
        moreBtn.addEventListener('click',(e) =>{
            e.preventDefault();
             str = '';
            for(let item of arr){
                str +=`
                
                <div class="card mb-3 cardBox" >
                <div class="row no-gutters">
                  <div class="col-md-4 imgBox" >
                    <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" class="card-img" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body cardContent">
          
                      <h2  class="card-title title">
                        <span class="btn btn-danger">Title</span>
                        <span class="mainTitle">${item.original_title}</span>
                      </h2>
          
                      <p class="card-text" >${item.overview}</p>
                      <h2  class="title">
                      <span class="badge badge-info ">Budget</span>
                      <span class="contentValue"> Rs. ${item.budget} </span>
                    </h2>
          
                      <h2  class="title">
                        <span class="badge badge-info ">Language</span>
                        <span class="contentValue">${item.spoken_languages[0].name} </span>
                      </h2>
          
                      <h2  class="title">
                        <span class="badge badge-info ">Release Date</span>
                        <span class="contentValue">${item.release_date}</span>
                      </h2>
          
                      <h3  class="title">
                        <span class="badge badge-info ">Popularity</span>
                        <span class="contentValue">${item.popularity}</span>
                      </h3>
                      <h3  class="title">
                      <span class="badge badge-info ">Revenue</span>
                      <span class="contentValue">${item.revenue}</span>
                    </h3>
                     
                     
                    
                      <h2  class="title">
                        <span class="badge badge-info ">Rating</span>
                        <span class="contentValue">${item.vote_average}</span>
                      </h2>
                     
                    </div>
                  </div>
                </div>
              
              </div>
        
                `;
            }
            let elm = document.getElementById(e.target.id);
            let mainBox = elm.parentElement.parentElement.parentElement.children[1];
            mainBox.innerHTML = str;

        })
    })
}