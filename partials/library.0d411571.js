!function(){var e,t,n,o="api_key=b5e824a3d922f68ba211fcf6dbdcb6f5",a="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&"+o;t=null===JSON.parse(localStorage.getItem("movie-queue"))?[]:JSON.parse(localStorage.getItem("movie-queue")),localStorage.setItem("movie-queue",JSON.stringify(t)),n=null===JSON.parse(localStorage.getItem("movie-watched"))?[]:JSON.parse(localStorage.getItem("movie-watched")),localStorage.setItem("movie-watched",JSON.stringify(n));var i,c=document.getElementById("myModal"),r=document.getElementById("modal-poster"),s=document.getElementById("modal-title"),l=document.getElementById("modal-vote"),d=document.getElementById("modal-popularity"),m=document.getElementById("modal-original-title"),u=document.getElementById("modal-genre"),g=document.getElementById("modal-overview"),v=document.getElementById("addToWatchedBtn"),p=document.getElementById("addToQueuBtn"),f=document.getElementsByClassName("close")[0];function h(){c.style.display="none"}fetch("https://api.themoviedb.org/3/genre/movie/list?"+o).then((function(e){return e.json()})).then((function(e){i=e.genres,N(a)})).catch((function(e){console.error("Error fetching genres:",e)})),f.addEventListener("click",h),window.addEventListener("click",(function(e){e.target===c&&h()}));var y=document.getElementById("main"),E=document.getElementById("search-form"),I=document.getElementById("search-input"),L=(document.getElementById("gallery"),document.querySelector(".loader-container")),b=document.getElementById("prev"),B=document.getElementById("next"),S=document.getElementById("current"),_=1,T=2,w=3,k="",q=100;function N(e){k=e,fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),0!==e.results.length?(!function(e){y.innerHTML="",e.forEach((function(e){var t=e.title,n=e.release_date,o=e.genre_ids,a=e.vote_average,v=document.createElement("div");v.classList.add("movie");var p=Array.isArray(i)?null==o?void 0:o.map((function(e){var t=i.find((function(t){return t.id===e}));return t?t.name:""})).join(", "):"",f=n?new Date(n).getFullYear():"";v.innerHTML='\n          <img src="https://image.tmdb.org/t/p/w500/'.concat(e.poster_path,'" alt="').concat(t,'"/>\n          \n          <div class="movie-info">\n              <h3>').concat(t,'</h3>\n          </div>\n          <div class="genredate">').concat(p," | ").concat(f,'</div>\n          <span id="vote_average" class="').concat(a,'">').concat(a,"</span>\n      "),v.addEventListener("click",(function(){!function(e){console.log("Movie data:",e),r.src="https://image.tmdb.org/t/p/w500/".concat(e.poster_path),s.textContent=e.title,l.innerHTML='Vote / Votes: <span class="vot">'.concat(e.vote_average,"</span> / ").concat(e.vote_count),d.innerHTML='Popularity: <span class="pop">'.concat(e.popularity,"</span>"),m.innerHTML='Title: <span class="titl">'.concat(e.original_title,"</span>");var t=e.genre_ids&&Array.isArray(i)?e.genre_ids.map((function(e){var t=i.find((function(t){return t.id===e}));return t?t.name:""})).join(", "):"";u.innerHTML='Genre: <span class="movgen">'.concat(t,"</span>"),g.textContent=e.overview,c.style.display="block"}(e)})),y.appendChild(v)}))}(e.results),_=e.page,T=_+1,w=_-1,q=e.total_pages,S.innerText=_,_<=1?(b.classList.add("disabled"),B.classList.remove("disabled")):_>=q?(b.classList.remove("disabled"),B.classList.add("disabled")):(b.classList.remove("disabled"),B.classList.remove("disabled"))):(y.classList.toggle("is-hidden"),L.classList.toggle("is-hidden"),y.innerHTML='<h1 class="no-results">No Results Found</h1>')})).catch((function(e){console.error("Error fetching movies:",e),y.classList.toggle("is-hidden"),console.log(),y.innerHTML='<h1 class="no-results">Error fetching movies</h1>'}))}function M(e){var t=k.split("?"),n=t[1].split("&"),o=n[n.length-1].split("=");if("page"!=o[0]){N(k+"&page="+e)}else{o[1]=e.toString();var a=o.join("=");n[n.length-1]=a;var i=n.join("&");N(t[0]+"?"+i)}}N(a),E.addEventListener("submit",(function(e){e.preventDefault();var t=I.value;N(t?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+t:a)})),b.addEventListener("click",(function(){w>0&&M(w)})),B.addEventListener("click",(function(){T<=q&&M(T)})),y.addEventListener("click",(function(t){var n=t.target.parentElement;e=n.lastElementChild.firstElementChild.innerText,console.log(e)})),v.addEventListener("click",(function(){n.includes(e)?alert("".concat(e," has been watched already")):n.push(e),localStorage.setItem("movie-watched",JSON.stringify(n))}));document.getElementById("queue-btn");var J=document.querySelector(".movie-queue");if(J){var O=J.innerText;console.log("Inner text:",O)}else console.error("Element not found.");p.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("movie-queue"))||[];e.includes("")?alert("".concat(""," has been added to the queue already")):(e.push(""),localStorage.setItem("movie-queue",JSON.stringify(e)))})),document.body.addEventListener("keydown",(function(e){"Escape"===e.code&&h()}))}();
//# sourceMappingURL=library.0d411571.js.map
