!function(){var e="api_key=b5e824a3d922f68ba211fcf6dbdcb6f5",t="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&"+e,n="https://image.tmdb.org/t/p/w500",a=document.getElementById("main"),s=document.getElementById("search-form"),i=document.getElementById("search-input"),c=(document.getElementById("gallery"),document.getElementById("prev")),d=document.getElementById("next"),o=document.getElementById("current"),l=1,r=2,m=3,v="",u=100;function p(e){v=e,fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e.results),0!==e.results.length?(!function(e){a.innerHTML="",e.forEach((function(e){var t=e.title,s=e.poster_path,i=e.release_date,c=e.vote_average,d=document.createElement("div");d.classList.add("movie"),d.innerHTML='\n            <img src="'.concat(s?n+s:"http:/>/via.placeholder.com/1080x1500",'"\n                alt="').concat(t,'"/>\n            \n            <div class="movie-info">\n                <h3>').concat(t,'</h3>\n                <div class="movie-details">\n                    <span id="release_date" class="').concat(i,'">').concat(i,'</span>\n                    <span id="vote_average" class="').concat(c,'">').concat(c,"</span>\n                </div>\n            </div>        \n        "),a.appendChild(d)}))}(e.results),l=e.page,r=l+1,m=l-1,u=e.total_pages,o.innerText=l,l<=1?(c.classList.add("disabled"),d.classList.remove("disabled")):l>=u?(c.classList.remove("disabled"),d.classList.add("disabled")):(c.classList.remove("disabled"),d.classList.remove("disabled"))):a.innerHTML='<h1 class="no-results">No Results Found</h1>'}))}function f(e){var t=v.split("?"),n=t[1].split("&"),a=n[n.length-1].split("=");if("page"!=a[0]){p(v+"&page="+e)}else{a[1]=e.toString();var s=a.join("=");n[n.length-1]=s;var i=n.join("&");p(t[0]+"?"+i)}}p(t),s.addEventListener("submit",(function(e){e.preventDefault();var n=i.value;p(n?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+n:t)})),c.addEventListener("click",(function(){m>0&&f(m)})),d.addEventListener("click",(function(){r<=u&&f(r)}))}();
//# sourceMappingURL=index.11008f26.js.map
