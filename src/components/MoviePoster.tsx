import React, { FC } from 'react';
import { IonCard, IonCardHeader } from '@ionic/react';

interface MovieProps { 
    title:string; 
    poster:string;
 }

const MoviePoster: FC<MovieProps> = ({title, poster}) => (
    <IonCard >
        <img src={poster} />
        <IonCardHeader>{title}</IonCardHeader>
        <button ion-button>More</button>
    </IonCard>
)

export default MoviePoster;