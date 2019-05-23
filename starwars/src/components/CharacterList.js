import React from 'react'

import CharacterItem from './CharacterItem'

const CharacterList = props => {
  return <div>
    <CharacterItem characters={props.characters}/>
  </div>
}

export default CharacterList