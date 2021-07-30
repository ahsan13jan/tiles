import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {

  return (
    <div className='cards'>
      <h1>Check out these EPIC Collection!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://hillceramic.se/storage/media/products/2020/06/marmor-klinker-emperador-morkgra-matt-60x60-cm-KLN5143.jpg'
              text='Gray exotic tiles in your bathroom'
              label='Tiles'
              path='/tiles'
            />
            <CardItem
              src='https://i.pinimg.com/736x/43/c0/5f/43c05f1189c02595b15223e22c9cc530.jpg'
              text='Rio Grey EcoTec Matt Porcelain Floor Tile'
              label='Luxury'
              path='/tiles'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://hillceramic.se/storage/media/products/2020/11/klinker-flodsten-morkgra-matt-rund-60x60-cm-KLN5107-485x485.webp'
              text='Gray exotic tiles in your bathroom'
              label='Tiles'
              path='/tiles'
            />
            <CardItem
              src='https://thumbor-gc.tomandco.uk/unsafe/trim/fit-in/1154x1385/filters:upscale():fill(white)/https://www.toppstiles.co.uk/static/media/catalog/product/a/s/ash-80x80.jpg'
              text='Italtile Origami Satin White Glazed Ceramic Wall Decor Tile '
              label='Luxury'
              path='/tiles'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcI93wHuFUXHWJKT29FRQYs7kIyp_fjQHkQ&usqp=CAU'
              text='Klinker Flodsten Mörkgrå Matt Rund'
              label='Luxury'
              path='/tiles'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;