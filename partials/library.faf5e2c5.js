const e="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=b5e824a3d922f68ba211fcf6dbdcb6f5";let t,n,o;n=null===JSON.parse(localStorage.getItem("movie-queue"))?[]:JSON.parse(localStorage.getItem("movie-queue")),localStorage.setItem("movie-queue",JSON.stringify(n)),o=null===JSON.parse(localStorage.getItem("movie-watched"))?[]:JSON.parse(localStorage.getItem("movie-watched")),localStorage.setItem("movie-watched",JSON.stringify(o));const s=document.getElementById("myModal"),a=document.getElementById("modal-poster"),l=document.getElementById("modal-title"),i=document.getElementById("modal-vote"),d=document.getElementById("modal-popularity"),r=document.getElementById("modal-original-title"),c=document.getElementById("modal-genre"),m=document.getElementById("modal-overview"),g=document.getElementById("addToWatchedBtn"),u=document.getElementById("addToQueuBtn"),p=document.getElementsByClassName("close")[0];let v;function h(){s.style.display="none"}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5").then((e=>e.json())).then((t=>{v=t.genres,w(e)})).catch((e=>{console.error("Error fetching genres:",e)})),p.addEventListener("click",h),window.addEventListener("click",(function(e){e.target===s&&h()}));const y=document.getElementById("main"),E=document.getElementById("search-form"),f=document.getElementById("search-input"),b=(document.getElementById("gallery"),document.querySelector(".loader-container")),I=document.getElementById("prev"),L=document.getElementById("next"),B=document.getElementById("current");var S=1,_=2,T=3,$="",k=100;function w(e){$=e,fetch(e).then((e=>e.json())).then((e=>{console.log(e),0!==e.results.length?(!function(e){y.innerHTML="",e.forEach((e=>{const{title:t,release_date:n,genre_ids:o,vote_average:g}=e,u=document.createElement("div");u.classList.add("movie");const p=Array.isArray(v)?null==o?void 0:o.map((e=>{const t=v.find((t=>t.id===e));return t?t.name:""})).join(", "):"",h=n?new Date(n).getFullYear():"";u.innerHTML=`\n          <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${t}"/>\n          \n          <div class="movie-info">\n              <h3>${t}</h3>\n          </div>\n          <div class="genredate">${p} | ${h}</div>\n          <span id="vote_average" class="${g}">${g}</span>\n      `,u.addEventListener("click",(function(){!function(e){console.log("Movie data:",e),a.src=`https://image.tmdb.org/t/p/w500/${e.poster_path}`,l.textContent=e.title,i.innerHTML=`Vote / Votes: <span class="vot">${e.vote_average}</span> / ${e.vote_count}`,d.innerHTML=`Popularity: <span class="pop">${e.popularity}</span>`,r.innerHTML=`Title: <span class="titl">${e.original_title}</span>`;const t=e.genre_ids&&Array.isArray(v)?e.genre_ids.map((e=>{const t=v.find((t=>t.id===e));return t?t.name:""})).join(", "):"";c.innerHTML=`Genre: <span class="movgen">${t}</span>`,m.textContent=e.overview,s.style.display="block"}(e)})),y.appendChild(u)}))}(e.results),S=e.page,_=S+1,T=S-1,k=e.total_pages,B.innerText=S,S<=1?(I.classList.add("disabled"),L.classList.remove("disabled")):S>=k?(I.classList.remove("disabled"),L.classList.add("disabled")):(I.classList.remove("disabled"),L.classList.remove("disabled"))):(y.classList.toggle("is-hidden"),b.classList.toggle("is-hidden"),y.innerHTML='<h1 class="no-results">No Results Found</h1>')})).catch((e=>{console.error("Error fetching movies:",e),y.classList.toggle("is-hidden"),console.log(),y.innerHTML='<h1 class="no-results">Error fetching movies</h1>'}))}function q(e){let t=$.split("?"),n=t[1].split("&"),o=n[n.length-1].split("=");if("page"!=o[0]){w($+"&page="+e)}else{o[1]=e.toString();let s=o.join("=");n[n.length-1]=s;let a=n.join("&");w(t[0]+"?"+a)}}w(e),E.addEventListener("submit",(t=>{t.preventDefault();const n=f.value;w(n?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+n:e)})),I.addEventListener("click",(()=>{T>0&&q(T)})),L.addEventListener("click",(()=>{_<=k&&q(_)})),y.addEventListener("click",(e=>{let n=e.target.parentElement;t=n.lastElementChild.firstElementChild.innerText,console.log(t)})),g.addEventListener("click",(()=>{o.includes(t)?alert(`${t} has been watched already`):o.push(t),localStorage.setItem("movie-watched",JSON.stringify(o))}));document.getElementById("queue-btn");const N=document.querySelector(".movie-queue");if(N){const e=N.innerText;console.log("Inner text:",e)}else console.error("Element not found.");u.addEventListener("click",(()=>{const e=JSON.parse(localStorage.getItem("movie-queue"))||[];e.includes("")?alert(" has been added to the queue already"):(e.push(""),localStorage.setItem("movie-queue",JSON.stringify(e)))})),document.body.addEventListener("keydown",(e=>{"Escape"===e.code&&h()}));
//# sourceMappingURL=library.faf5e2c5.js.map
