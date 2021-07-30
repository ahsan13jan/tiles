import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

export default class Cards2 extends React.Component {

  state = {
    loading: true,
    listing: null
  }
  async componentDidMount() {
    console.log('ZZZZZZZ')
    const apiUrl = 'http://localhost:8080/mainListings';
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    this.setState({listing: data, loading : false});
  }
  render() {

    if (this.state.loading){
      return <div>loading....</div>
    }


    return (
      <div className='cards'>
      <h1>Check out these EPIC Collection!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              this.state.listing.map(l => 
                <CardItem
                  src={l.imageUrl}
                  text={l.description}
                  label={l.category}
                  path={"/details?id=" + l.id}
                  />
                )
            }
          </ul>
        </div>
      </div>
    </div>
    )
  }
}