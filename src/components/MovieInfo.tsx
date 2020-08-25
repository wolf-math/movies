import React, { FC } from 'react';
import { IonCard, IonCardHeader, IonButton} from '@ionic/react';

interface MovieInfo { 
    title:string; 
    poster:string;
    details: string;

 }

const MovieInfo: FC<MovieInfo> = ({title, poster}) => (
    <IonCard >
        <img src={poster} />
        <IonCardHeader>{title}</IonCardHeader>
        <button>More</button>
    </IonCard>
)

export default MovieInfo;