import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Component } from 'react'
import marker from '../../../../assets/images/marker.png'

class MapsWrapper extends Component{
	static defaultProps ={
		center: {
			lat: 54.3186575,
			lng: 48.397776
		},
		zoom: 11
	}
	render(){
		// let center = ''
		// Geocode.setApiKey('AIzaSyBzbzAyOD0N9TQYwKwahgQXE_4awH2G3T8')
		// Geocode.setLanguage('ru')
		// Geocode.setRegion('ru')
		// if (this.props.city) {
		// 	Geocode.fromAddress(this.props.city.name).then(response => {
		// 		return center = response.results[0].geometry.location
		// 	})	
		// }
		// console.log(center);
		
		// let city = [
		// 	{ name:'Ульяновск', lat: 54.3186575, lng: 48.397776 },
		// 	{ name:'Саранск', lat: 54.2000477, lng: 45.1745115 },
		// ].filter(el => el.name === this.props.city.name)
		// console.log(city);
		// let lat = this.props.center.lat
		// lng = this.props.center.lng
		// if (city.length > 0) {
		// 	let {lat, lng} = city[0]
		// }
		// console.log(lat, lng);
		const Point = ({ text, address}) => {
			const setPoint = (address) => {
				this.props.handelrPointInput(address)
				this.props.selectPoint(address)
			}			
			return(
				<div className='marker-box'>
					<img onClick={() => setPoint(address)} className='marker' src={marker} alt=""/>
					<span>{text}</span>
				</div>
			)
		}

		return(
			<div style={{ height: '352px', width: '100%', marginTop: '16px'}}>
				<GoogleMapReact
					bootstrapURLKeys={ {
						key: 'AIzaSyARg5DDXQDgorhVwS7AGL6eh2wRGlLdvQE',
						language: 'ru',
						region: 'ru'
					}}

					defaultCenter={this.props.center}
					center={this.props.position}
					defaultZoom={this.props.zoom}
				>
				{
					this.props.points.map(el => (
						<Point
							key={el.lat}
							lat={el.lat}
							lng={el.lng}
							text={el.name}
							address={el.point}
							selectPoint={this.props.selectPoint}
							handelrPointInput={this.props.handelrPointInput}
						/>
					))
				}
				</GoogleMapReact>
			</div>
		)
	}
}

export default MapsWrapper