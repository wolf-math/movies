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
    </IonCard>
)

export default MoviePoster;