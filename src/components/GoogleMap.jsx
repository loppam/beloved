import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'

const GoogleMap = ({location, zoomLevel}) => {

  return (
      <div className='GoogleMap'>
          <GoogleMapReact
              bootstrapURLKeys={{ Key: '' }}
              defaultCenter={location}
              defaultZoom={zoomLevel}
          >
              <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}/>
          </GoogleMapReact>
    </div>
  )
}

export default GoogleMap