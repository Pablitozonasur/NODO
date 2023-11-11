import React from 'react'
import Card from './Card'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: 'Producto 1',
    image: image1,
    url: 'https://',
    text: 'Description of the product'
  },
  {
    id: 2,
    title: 'Producto 2',
    image: image2,
    url: 'https://'
  },
  {
    id: 3,
    title: 'Producto 3',
    image: image3,
    url: 'https://'
  },
]

function Cards() {
  return (
    <div className='container d-flex justify-content-center h-100 align-items-center'>
      <div className='row'>
        {
          cards.map((card) => (
            <div className='col-md-4' key={card.id}>
              <Card title={card.title} imageSource={card.image} text={card.text} url={card.url}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards