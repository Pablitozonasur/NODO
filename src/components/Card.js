import React from 'react'
import PropTypes from 'prop-types'

import './Cards.css'

function Card ({title, imageSource, text, url}) {
  return (
    <div className="card text-center bg-dark animate__animated animate__faceInUp">
      <div className="overflow">
        <img src={imageSource} alt="imagen de producto" className='card-img-top' />
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          {
            text ? text : 'Labore aliqua excepteur tempor dolore eiusmod esse mollit exercitation esse elit veniam enim consectetur nisi. In deserunt sit do minim anim cupidatat consectetur non incididunt nisi irure. Dolore dolore Lorem esse officia aute occaecat minim excepteur elit mollit amet adipisicing labore et. Enim magna ea et id id irure. Elit id culpa non id quis est sunt labore laboris dolor nostrud?'
          }
        </p>
        <a href={url} className='btn btn-outline-secondary' target="_blank">Contactar</a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Card