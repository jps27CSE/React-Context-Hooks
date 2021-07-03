import React, { useState, useEffect } from 'react'
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from '../components/NewSongForm'
const SongList = () => {

  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ])
  
  const [age,setAge] = useState(20)

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuidv1() }])
  }

  useEffect(()=>{
    console.log('useEffect ran',songs)
  },[songs])

  return (
    <div className='song-list'>
      <ul>
        {
          songs.map(song => {
            return (
              <li key={song.id}>{song.title}</li>
            )
          })
        }
      </ul>
      <NewSongForm addSong={addSong}/>
      <button onClick={()=>{setAge(age+1)}}>add age : {age}</button>
    </div>
  )
}

export default SongList