import { View } from "native-base";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { KEY } from "../../../config";
import { styles } from "../../../utils/style";

const MapDirectionScreen = () => {
    const [coordinates] = useState([
      {
        latitude: 48.8587741,
        longitude: 2.2069771,
      },
      {
        latitude: 48.8323785,
        longitude: 2.3361663,
      },
    ]);
    return (
      <View flex={1}>
        <MapView
          style={styles.maps}
          initialRegion={{
            latitude: coordinates[0].latitude,
            longitude: coordinates[0].longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0121,
          }}>
          <MapViewDirections
            origin={coordinates[0]}
            destination={coordinates[1]}
            apikey={KEY} // insert your API Key here
            strokeWidth={4}
            strokeColor="#111111"
          />
          <Marker coordinate={coordinates[0]} />
          <Marker coordinate={coordinates[1]} />
        </MapView>
      </View>
    );
  };

  export default MapDirectionScreen