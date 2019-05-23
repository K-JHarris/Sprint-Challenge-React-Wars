import React from 'react'
import './StarWars.css'

const CharacterList = props => {
  console.log(props)
  return <div className="characterItemContainer">
    {props.characters.map(chars => {
      return <div>
        <h2>{chars.name}</h2>
        <p>Gender: {chars.gender}</p>
        <p>Height: {chars.height}</p>
      </div>;
    })}
  </div>
}

export default CharacterList