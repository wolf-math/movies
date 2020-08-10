import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {IonInfiniteScroll, IonInfiniteScrollContent} from '@ionic/react';

// import GetMovies from './components/GetMovies';

import { IonApp, 
  IonHeader, 
  IonContent, 
  IonToolbar, 
  IonTitle, 
  IonGrid, 
  IonRow, 
  IonCol,
  IonSearchbar
 } from '@ionic/react';

import { api, poster } from './constants';
import MoviePoster from './components/MoviePoster';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [movies, setMovies] = useState<[]>([]);

  // API Call
  let page = 1;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=${page}`;

  const GetMovies = async () => {
    try{
      const response = await axios.get(url);
      setMovies(response.data.results) //JSON data
      
    } catch(error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetMovies();
  }, []);

  async function NextPage($event: CustomEvent<void>){
    await GetMovies();

    ($event.target as HTMLIonInfiniteScrollElement).complete();
  }

  // Search -- This should be integrated with GetMovies, but it's fine for now
  const [searchText, setSearchText] = useState('');

  const searchUrl = `https://api.themoviedb.org/3/search/${searchText}?api_key=${api}&page=1`

  const SearchMovies = async () => {
    try{
      const response = await axios.get(searchUrl);
      setSearchText(response.data.results) //JSON data
      console.log(searchText)
      
    } catch(error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    SearchMovies();
  }, []);

  return(
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          Movies
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
      <IonGrid>
        <IonRow>
          <IonCol>
            {movies.map(({title, release_date, poster_path}, idx)=> (
              <MoviePoster key={idx} title={title}
              poster={`${poster}${poster_path}`} />
            ))}
            <IonInfiniteScroll threshold="100px"
              
              onIonInfinite={(
                e: CustomEvent<void>) => {
                  page++;
                  console.log(page);
                  GetMovies()}}>
              <IonInfiniteScrollContent
                  loadingText="Loading more movies...">
              </IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonApp>
  );
};

export default App;
