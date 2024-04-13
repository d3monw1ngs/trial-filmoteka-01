document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("watched-btn"),t=document.getElementById("queue-btn"),o=document.querySelector(".gallery");let n=JSON.parse(localStorage.getItem("movie-watched")),i=JSON.parse(localStorage.getItem("movie-queue"));function a(e,t){localStorage.setItem("movie-watched",JSON.stringify(e)),localStorage.setItem("movie-queue",JSON.stringify(t))}async function c(e){console.log("Movie ID:",e);const t=`https://api.themoviedb.org/3/movie/${e}?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5`,o=await fetch(t),n=await o.json();return console.log("API Response:",n),n}function r(e){const t=document.createElement("div");if(o)return t.classList.add("movie"),t.innerHTML=`\n        <img src="${e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:"http://via.placeholder.com/1080x1500"}";\n        <h3>${e.title}</h3>\n    `,t;console.error("Gallery container not found.")}function s(e){return!isNaN(e)}!async function(e){if(console.log("moviesContainer:",o),!o)return void console.error("Movies container not found.");o.innerHTML="";for(const t of e)try{if(!t||!s(t)){console.warn(`Invalid movie ID: ${t}`);continue}const e=r(await c(t));o.appendChild(e)}catch(e){"Movie not found."===e.message?console.warn(`Movie with ID ${t} not found.`):console.error("Failed to display movie:",e)}}(n),e.addEventListener("click",(function(e){e.preventDefault(),a(n,i)})),t.addEventListener("click",(function(e){e.preventDefault(),a(n,i)}))}));
//# sourceMappingURL=library.f5bbc0c1.js.map