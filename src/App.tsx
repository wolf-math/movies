import React, { useEffect, useState } from 'react';



import axios from 'axios';

import { IonApp, 
  IonHeader, 
  IonContent, 
  IonToolbar, 
  IonTitle, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonItem, 
  IonLabel
 } from '@ionic/react';

import { api } from './api-key';

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

  const GetMovies = async () => {
    try{
      const response = await axios.get(`https://api.themoviedb.org/3/movie/600?${api}`);
      setMovies(response.data) // await (movieInfo = useState(response)); //console.log(response) //JSON data
    } catch(error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetMovies();
  }, [movies]);
  
  
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
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>
                Some stuff!
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>

    </IonContent>
  </IonApp>
  );
};

export default App;
