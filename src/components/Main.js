import React from 'react'
import './Main.css';


export default class Main extends React.Component {

  state = {
    loading: true,
    listing: null
  }
  async componentDidMount() {
    console.log('ZZZZZZZ')

		const urlSearchParams = new URLSearchParams(window.location.search);
		const params = Object.fromEntries(urlSearchParams.entries());
	
		console.log(params)
    const apiUrl = 'http://ec2-3-109-139-237.ap-south-1.compute.amazonaws.com//getDetails?id=' + params.id;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    this.setState({listing: data, loading : false});
  }
  render() {

    if (this.state.loading){
      return <div>loading....</div>
    }

		const l = this.state.listing
    return (
			<div class="main_container">
			<div className="product_preview">
				<img src={l.imageUrl}/>
			</div>
			<div className="product_data">
				<h1 className="product_title"> {l.description} </h1>
				<p>Price: {l.price}</p>
				<p>Category: {l.category}</p>
			</div>
		</div>
    )
  }
}