import React, { useEffect, useState } from 'react';
import axios from 'axios';


const [movies, setMovies] = useState<[]>([]);

// const GetMovies = async () => {
//   try{
//       const response = await axios.get(`https://api.themoviedb.org/3/movie/600?${api}`);
//       setMovies(response.data) // await (movieInfo = useState(response)); //console.log(response) //JSON data
//   } catch(error) {
//       console.log(error.message);
//   }
// }

// export default GetMovies;