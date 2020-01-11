import React, { useState } from 'react';

const NewSong = ({addSong}) => {
    const [title, setTitle] = useState('')

   const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('')
    }
    return ( 
        <form onSubmit={handleSubmit}> 
            <label>Song Name: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="submit" />
        </form>
     );
}
 
export default NewSong;