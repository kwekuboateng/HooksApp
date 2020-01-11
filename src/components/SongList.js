import React, { useState } from 'react';
import uuid from 'uuid/v1'
import NewSong from './NewSong';

const SongList = () => {
   const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'memory gospel', id: 2},
        {title: 'this wild darkness', id: 3}
    ])

    const addSong = (title) => {
        setSongs([...songs, {title, id: uuid()}])
    }

    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                return (<li key={song.id}>{song.title}</li>)
                })}
             </ul>
 
            <NewSong addSong={addSong} />
        </div>
     );
}
 
export default SongList;