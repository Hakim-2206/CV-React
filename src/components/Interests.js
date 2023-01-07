import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsIcon from '@mui/icons-material/Sports';

function interests() {
  return (
    <div className='skills'>
      <h2 className='h2'>Centres d'intérêts</h2>
      <ul>
        <li>Informatique</li>
        <li>Musique</li>
        <li>Gaming</li>
        <li>Sports collectifs</li>
      </ul>
      <div className='interests'>
        <CodeIcon style={{ fontSize: 40 }} />
        <LibraryMusicIcon style={{ fontSize: 40 }} />
        <SportsEsportsIcon style={{ fontSize: 40 }} />
        <SportsIcon style={{ fontSize: 40 }} />
      </div>
    </div>
  )
}

export default interests