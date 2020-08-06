import React, { FC } from 'react';
import { IonCard, IonCardHeader } from '@ionic/react';

interface MovieProps { 
    title:string; 
 }

const MoviePoster: FC<MovieProps> = ({title}) => (
    <IonCard >
        <IonCardHeader>{title}</IonCardHeader>
    </IonCard>
)

export default MoviePoster;