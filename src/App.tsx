import React, { useEffect } from 'react';



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
  
  const getMovies = async () => {
    try{
      const response = await axios.get(`https://api.themoviedb.org/3/movie/600?${api}`)
      await console.log(response)
    }catch(error){
      console.log(error.message);
    }}
    useEffect(() => {
    getMovies();
    },[])
    
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
      {/* <IonGrid>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>
                
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid> */}

    </IonContent>
  </IonApp>
  );
};

export default App;
