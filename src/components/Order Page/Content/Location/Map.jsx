import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from 'react-geocode';

export class Maps extends React.Component {
	componentDidUpdate(){
		
	}
	render() {
		const mapStyles = {
			width: "100%",
			height: "352px",
		};
		Geocode.setApiKey('AIzaSyBzbzAyOD0N9TQYwKwahgQXE_4awH2G3T8')
		Geocode.setLanguage('ru')
		Geocode.setRegion('ru')
		const arr = [{ lat: 54.3186575, lng: 48.397776 }]
		let points = this.props.point.map(el => {
			Geocode.fromAddress(el.cityName).then(
				response => {
					const { lat, lng } = response.results[0].geometry.location;
					let name = el.cityName
					let address = el.address 
					arr.push({ name, address, lat, lng})
					
				},
				error => {
					console.error(error);
				}
			);
		})
		const add = [
			{ name: "Ульяновск", address: "Нариманова 42", lat: 54.33723639999999, lng: 48.3828055 },
			{ name: "Ульяновск", address: "Гончарова 27", lat: 54.320867, lng: 48.3999777 },
			{ name: "Ульяновск", address: "Московское шоссе 34", lat: 54.3010483, lng: 48.2882419 },
 			{ name: "Саранск", address: "Рабочая 183", lat: 54.2017433, lng: 45.1941986 },
 			{ name: "Саранск", address: "Ленина 24", lat: 54.190118, lng: 45.18745 },
			{ name: "Саранск", address: "Гагарина 99А", lat: 54.1659777, lng: 45.1501861 },
		]
		let city = [
			{ name: "Саранск", lat: 54.2000477, lng: 45.1745115 },
			{ name: "Ульяновск", lat: 54.3186575, lng: 48.397776 }
		].filter( el => el.name === this.props.preorder.cityId.name)
		let ttr = {
			lat: 54.3186575,
			lng: 48.397776}
		if (city.length > 0) {
			ttr = city[0]
		}
		console.log(this.props.center);
		
		return (
			<div className='google-maps'>
				<Map
					google={this.props.google}
					zoom={10}
					style={mapStyles}
					ref={(ref) => {
						this.mapRef = ref;
					}}
					initialCenter={this.props.center}
				>
					{
						add
						.filter(el => el.name === this.props.preorder.cityId.name)
						.map((el,i) => {
							let lat = el.lat
							let lng = el.lng
							return(
								<Marker
									key={i}
									position={{ lat, lng}} 
								/>
							)
						})
					}
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyARg5DDXQDgorhVwS7AGL6eh2wRGlLdvQE",
})(Maps);
