import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13
};

class Map extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }

    componentDidMount(){
        // const ref = React.useRef<HTMLDivElement>(null);
        // const [map, setMap] = React.useState<google.maps.Map>();

        // React.useEffect(() => {
        // if (ref.current && !map) {
        //     setMap(new window.google.maps.Map(ref.current, {}));
        // }
        // }, [ref, map]);
    }

}