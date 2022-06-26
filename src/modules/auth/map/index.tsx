// React Native Geolocation
// https://aboutreact.com/react-native-geolocation/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  StyleSheet,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
} from 'react-native';

//import all the components we are going to use.
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import {LatLong} from '../../../../typings/dataTypes';
import {Button, View} from 'native-base';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {KEY} from '../../../config';
import {width} from '../../../utils/handy';
import axios from 'axios';
import { AUTH_NAVIGATION } from '../../../../typings/navigation';
import { icons } from '../../../assets/icons';

let watchID: any = null;
const MapScreen = (props:any) => {
  const [currentPos, setCurrentPos] = useState<LatLong>({
    latitude: 23.811056,
    longitude:  90.407608,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [locationStatus, setLocationStatus] = useState<boolean>(false);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
          } else {
            //go back
            setLocationStatus(false);
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        //getting the Longitude from the location json
        const currentLongitude = position.coords.longitude;

        //getting the Latitude from the location json
        const currentLatitude = position.coords.latitude;

        //Setting Longitude state
        setCurrentPos({
          ...currentPos,
          latitude: currentLatitude,
          longitude: currentLongitude,
        });
        setLocationStatus(true);
      },
      error => {
        setLocationStatus(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const getLanLong = place_id => {
    let url =
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=` +
      place_id +
      `&key=` +
      KEY +
      ``;
  //console.log(url)
    axios
      .get(url)
      .then(res => {
      //  console.log(res?.data?.result?.geometry)
        let loc=res?.data?.result?.geometry.location
        setCurrentPos({
          ...currentPos,
          latitude: loc.lat,
          longitude: loc.lng,
        });
      })
      .catch(err => {
        console.log(err)
      });
  };
  console.log(currentPos)
  return (
    <View flex={1}>
      <MapView
        style={{flex: 1}}
        loadingEnabled={true}
        showsUserLocation={true}
        onRegionChangeComplete={region =>{
          console.log(region)
          setCurrentPos({
            ...region,
           // longitudeDelta:currentPos.longitudeDelta,
           // latitudeDelta:currentPos.latitudeDelta
          })
        }}
        region={currentPos}
      >
        <Marker coordinate={currentPos}
        image={icons.pin}
         />
      </MapView>

      <View position={'absolute'} top={0} width={width}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            console.log(data.place_id);
            getLanLong(data.place_id)
          }}
          query={{
            key: KEY,
            language: 'en',
          }}
        />
      </View>
      <View position={'absolute'} bottom={5} alignItems="center" width={width}>
        <Button size={'lg'} onPress={()=>props.navigation.navigate(AUTH_NAVIGATION.INFO_CONFIRM,currentPos)} >Confirm Location</Button>
      </View>
    </View>
  );
};

export default MapScreen;
