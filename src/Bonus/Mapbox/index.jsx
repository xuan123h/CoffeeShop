import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import axios from "axios";
function MapBox() {
  const [viewport, setViewport] = React.useState({
    width: "100vw",
    height: "100vh",
    latitude: 21.091881685026486,
    longitude: 105.62773411468957,
    zoom: 16
  });
  // 21.091881685026486,105.62773411468957
  const [showPopup, togglePopup] = React.useState(false);
  const [addressMarker, setAddressMarker] = useState([]);
  const addressdata = [
    {
      id: 1,
      address: "số 1 vô văn ngân phường linh chiểu thành phố thủ đức"
    },
    {
      id: 2,
      address: "phường 12 quận gò vấp thành phố hồ chí minh"
    },
    {
      id: 3,
      address: "đường số 7 phường linh trung thành phố thủ đức"
    }
  ];
  useEffect(() => {
    let newaddressdata = [];
    addressdata.map((address) => {
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${address.address}.json ? acces_token=pk.eyJ1IjoieHVhbjEyMzUzMiIsImEiOiJja3k5eDhnbWQwOHlhMnZtZ2w2d2ludnZsIn0.qH1JWGuQGbhdi8hUFoth1Q`
        )
        .then(function (response) {
          //  handle success
          newaddressdata.push({
            ...address,
            longitude: response.data.features[0].center[0],
            latitude: response.data.features[0].center[1]
          });
        })
        .catch(function (error) {
          //  handle error
          console.log(error);
        })
        .then(function () {
          //  always executed
        });
    });
    console.log(" >> arr new ", newaddressdata);
    setAddressMarker(newaddressdata);
  }, []);
  return (
    <ReactMapGl
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1IjoieHVhbjEyMzUzMiIsImEiOiJja3k5eDhnbWQwOHlhMnZtZ2w2d2ludnZsIn0.qH1JWGuQGbhdi8hUFoth1Q"
    >
      {showPopup && (
        <Popup
          latitude={21.091881685026486}
          longitude={105.62773411468957}
          closeButton={true}
          closeOnClick={false}
          onClose={() => togglePopup(false)}
          anchor="top-right"
        >
          <div> Pop up marker </div>
        </Popup>
      )}
      {/* {addressMarker.map((addressm) => ( */}
      <Marker
        latitude={21.091881685026486}
        longitude={105.62773411468957}
        offsetLeft={-20}
        offsetTop={-30}
      >
        <img
          style={{ height: 50, width: 50 }}
          src="https://vectorified.com/images/google-maps-marker-icon-38.png"
          alt=""
          onClick={() => togglePopup(true)}
        />
        <div> Quê tôi , quán tôi đấy </div>
      </Marker>
      <Marker
        latitude={21.091881685026486}
        longitude={105.82748387211468957}
        offsetLeft={-20}
        offsetTop={-30}
      >
        <img
          style={{ height: 50, width: 50 }}
          src="https://vectorified.com/images/google-maps-marker-icon-38.png"
          alt=""
        />
        <div> Quê tôi , quán tôi đấy </div>
      </Marker>
    </ReactMapGl>
  );
}
export default MapBox;
