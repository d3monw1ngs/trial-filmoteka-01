!function(){var e,t,n,a,o="api_key=b5e824a3d922f68ba211fcf6dbdcb6f5",i="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&"+o;n=null===JSON.parse(localStorage.getItem("movie-queue"))?[]:JSON.parse(localStorage.getItem("movie-queue")),localStorage.setItem("movie-queue",JSON.stringify(n)),a=null===JSON.parse(localStorage.getItem("movie-watched"))?[]:JSON.parse(localStorage.getItem("movie-watched")),localStorage.setItem("movie-watched",JSON.stringify(a));var c,s=document.getElementById("myModal"),l=document.getElementById("modal-poster"),r=document.getElementById("modal-title"),d=document.getElementById("modal-vote"),u=document.getElementById("modal-popularity"),m=document.getElementById("modal-original-title"),g=document.getElementById("modal-genre"),v=document.getElementById("modal-overview"),p=document.getElementById("addToWatchedBtn"),h=document.getElementById("addToQueuBtn"),f=document.getElementsByClassName("close")[0];function y(){s.style.display="none"}fetch("https://api.themoviedb.org/3/genre/movie/list?"+o).then((function(e){return e.json()})).then((function(e){c=e.genres,J(i)})).catch((function(e){console.error("Error fetching genres:",e)})),f.addEventListener("click",y),window.addEventListener("click",(function(e){e.target===s&&y()}));var E=document.getElementById("main"),L=document.getElementById("search-form"),b=document.getElementById("search-input"),I=(document.getElementById("gallery"),document.querySelector(".loader-container")),S=document.getElementById("prev"),B=document.getElementById("next"),w=document.getElementById("current"),_=1,k=2,T=3,N="",q=100;function J(e){N=e,fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),0!==e.results.length?(!function(e){E.innerHTML="",e.forEach((function(e){var t=e.title,n=e.release_date,a=e.genre_ids,o=e.vote_average,i=document.createElement("div");i.classList.add("movie");var p=Array.isArray(c)?null==a?void 0:a.map((function(e){var t=c.find((function(t){return t.id===e}));return t?t.name:""})).join(", "):"",h=n?new Date(n).getFullYear():"";i.innerHTML='\n          <img src="https://image.tmdb.org/t/p/w500/'.concat(e.poster_path,'" alt="').concat(t,'"/>\n          \n          <div class="movie-info">\n              <h3>').concat(t,'</h3>\n          </div>\n          <div class="genredate">').concat(p," | ").concat(h,'</div>\n          <span id="vote_average" class="').concat(o,'">').concat(o,"</span>\n      "),i.addEventListener("click",(function(){!function(e){console.log("Movie data:",e),l.src="https://image.tmdb.org/t/p/w500/".concat(e.poster_path),r.textContent=e.title,d.innerHTML='Vote / Votes: <span class="vot">'.concat(e.vote_average,"</span> / ").concat(e.vote_count),u.innerHTML='Popularity: <span class="pop">'.concat(e.popularity,"</span>"),m.innerHTML='Title: <span class="titl">'.concat(e.original_title,"</span>");var t=e.genre_ids&&Array.isArray(c)?e.genre_ids.map((function(e){var t=c.find((function(t){return t.id===e}));return t?t.name:""})).join(", "):"";g.innerHTML='Genre: <span class="movgen">'.concat(t,"</span>"),v.textContent=e.overview,s.style.display="block"}(e)})),E.appendChild(i)}))}(e.results),_=e.page,k=_+1,T=_-1,q=e.total_pages,w.innerText=_,_<=1?(S.classList.add("disabled"),B.classList.remove("disabled")):_>=q?(S.classList.remove("disabled"),B.classList.add("disabled")):(S.classList.remove("disabled"),B.classList.remove("disabled"))):(E.classList.toggle("is-hidden"),I.classList.toggle("is-hidden"),E.innerHTML='<h1 class="no-results">No Results Found</h1>')})).catch((function(e){console.error("Error fetching movies:",e),E.classList.toggle("is-hidden"),I.classList.toggle("is-hidden"),E.innerHTML='<h1 class="no-results">Error fetching movies</h1>'}))}function M(e){var t=N.split("?"),n=t[1].split("&"),a=n[n.length-1].split("=");if("page"!=a[0]){J(N+"&page="+e)}else{a[1]=e.toString();var o=a.join("=");n[n.length-1]=o;var i=n.join("&");J(t[0]+"?"+i)}}J(i),L.addEventListener("submit",(function(e){e.preventDefault();var t=b.value;J(t?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+t:i)})),S.addEventListener("click",(function(){T>0&&M(T)})),B.addEventListener("click",(function(){k<=q&&M(k)})),E.addEventListener("click",(function(t){var n=t.target.parentElement;e=n.lastElementChild.firstElementChild.innerText,console.log(e)})),p.addEventListener("click",(function(){a.includes(e)?alert("".concat(e," has been watched already")):a.push(e),localStorage.setItem("movie-watched",JSON.stringify(a))}));var O=document.querySelector(".movie-queu");if(O)O.innerText;else console.error("Element not found.");h.addEventListener("click",(function(){n.includes(e)?alert("".concat(e," has been added to the queue already")):n.push(e),localStorage.setItem("movie-queue",JSON.stringify(n))})),p.addEventListener("click",(function(){a.includes(t)?alert("".concat(e," has been watched already")):a.push(t),localStorage.setItem("movie-watched",JSON.stringify(a))})),h.addEventListener("click",(function(){n.includes(t)?alert("".concat(e," has been added to the queue already")):n.push(t),localStorage.setItem("movie-queue",JSON.stringify(n))})),document.body.addEventListener("keydown",(function(e){"Escape"===e.code&&y()}))}();
//# sourceMappingURL=library.8d9facf5.js.map
