import React from 'react';

const Card = ({character}) => {
  return( 
  <div className='card w-25'>
      <img 
      src={character.image} 
      alt="img"
      className='card-img-top'
      />
      <div className='card-body'>
        <h5 className='card-tile mb-0'>
            {character.name}
        </h5>
        <p className='card-text'>
            {character.status} - {character.species}
        </p>
        <h6 className='card-subtitle text-muted'>Last known Location</h6>
        <p className='card-text'>{character.location.name}</p>
      </div>

  </div>
  )

};

export default Card;
