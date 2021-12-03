import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import MyMarker from './my_marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13
};

class HouseMap extends React.Component{
    constructor(props){
        super(props)
        // this.myRef = React.createRef();
        // console.log(this.props)
        this.center = {
            lat: this.props.houses[0].latitude,
            lng: this.props.houses[0].longitude
        }
        // console.log(this.props.houses)
    }

    // componentDidMount(){
    //     const ref = React.useRef<HTMLDivElement>(null);
    //     const [map, setMap] = React.useState<google.maps.Map>();

    //     React.useEffect(() => {
    //     if (ref.current && !map) {
    //         setMap(new window.google.maps.Map(ref.current, {}));
    //     }
    //     }, [ref, map]);
    // }

    render() {
        // console.log(mapOptions.center)
        // console.log(this.center)
        return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAZsmOMc3VUofOxE2fbhDv6JrQGwlPY_Bk' }}
            defaultCenter={this.center}
            defaultZoom={mapOptions.zoom}
            >
            {this.props.houses.map(({ id, location, latitude, longitude }) => {
                return (
                    <MyMarker key={id} lat={latitude} lng={longitude} text={location} tooltip={location} />
                );
            })}
            {/* <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
            /> */}
            </GoogleMapReact>
        </div>
        );
    }

}

export default HouseMap