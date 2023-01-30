
const movieName= document.getElementById("movieSearch1");
const Year=document.getElementById("yearSearch1");


const movieBTN=document.getElementById("movieSearching");
const yearBTN=document.getElementById("yearSearching");

window.onload = function () {
    let localData = localStorage.getItem("localData");
    if (localData) {
      let movieDetail = document.getElementById("movieDisp");
      movieDetail.innerHTML = localData;
    }
    sessionStorage.clear();
};


window.onbeforeunload = function () {
    let movieDetail = document.getElementById("movieDisp").innerHTML;
    localStorage.setItem("localData", movieDetail);
  };


const getMovie = async(movieName) => {
    

    //works if user has only entered movie name
    if(Year.value===""){
        const resp = await fetch(`http://www.omdbapi.com/?s=${movieName.value}&apikey=5c67ab15`);
        const data = await resp.json();
        console.log(data);
        const movieArr=data.Search;
        document.getElementById("movieDisp").innerHTML="";
        movieArr.map(addMovies);
    }
    //works if user has entered year
    else{
        const resp = await fetch(`http://www.omdbapi.com/?s=${movieName.value}&y=${Year.value}&apikey=5c67ab15`);
        const data = await resp.json();
        console.log(data);
        const movieArr=data.Search;
        document.getElementById("movieDisp").innerHTML="";
        movieArr.map(addMovies);
    }
 
  
    // const tarr=data.Search;
    // const showYear = tarr.filter((data) => {
    //     return data===Year.value;
    // });
 


   // console.log(movieArr);
   // const neighbor = data[0].borders[6];
   // const n_resp = await fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
  //  const n_data = await n_resp.json();
   // console.log(n_data);
}



// const getbyYear = async(movieName,Year) => {
//     alert(movieName.value+Year.value);
//     const resp = await fetch(`http://www.omdbapi.com/?s=${movieName.value}&y=${Year.value}&apikey=5c67ab15`);
//     const data = await resp.json();
//     movieArr.map(addMovies);
//     console.log(movieArr);
//     console.log(data);
//    // const neighbor = data[0].borders[6];
//    // const n_resp = await fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//   //  const n_data = await n_resp.json();
//    // console.log(n_data);
// }

movieBTN.addEventListener("click",()=>{
    if(movieName.value===""){
        alert("Enter Movie Name");
    }
    else{
        getMovie(movieName);
    }
 });
 const yearButton = document.getElementById("yearSearch1");
 yearButton.addEventListener("keyup", getMovie);

//  yearBTN.addEventListener("click", ()=>{
//     if(Year.value==="" || movieName.value===""){
//         alert("Enter Movie Year or name");
//     }
//     else{
//         getbyYear(movieName,Year);
//     }
//  });

 function addMovies(data){
    const movieDet=document.getElementById("movieDisp");

    const movieDetails=` <div class="movieCard">
    <img class="imgWork" src=${data.Poster}    alt="movieImg">
    <h2 class="MovTitle">${data.Title}</h2>
    <h3>${data.Type}</h3>
    <h3>${data.Year}</h3>
    <h3>${data.imdbID}</h3>
   </div>`
   
   movieDet.insertAdjacentHTML("afterbegin",movieDetails);
 }




