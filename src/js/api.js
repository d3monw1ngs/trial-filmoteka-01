export const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b5e824a3d922f68ba211fcf6dbdcb6f5";

export const options = {
    params: {
        key: API_KEY,
        query: "",
        include_adult: false,
        language: "en-US",
        primary_release_year: "",
        page: 1,
        region: "",
        year: "",
       
    }
}

// async function fetchPopularMovieDetails() {
//     try {
//       const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch: ${response.statusText}`);
//       }
//       const data = await response.json();
//       console.log("Popular Movie Details:", data.results[0]); // Logging details of the first popular movie
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
  
//   // Call the function to fetch popular movie details
//   fetchPopularMovieDetails();