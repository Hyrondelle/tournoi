import { Button } from '@/components/ui/button';
import React from 'react';

export const Player = (array:string[]) => {
    console.log(array,"array");
    
    return (
        array.map((player)=>
        <Button>{player}</Button>)
    );
};

export default Player;