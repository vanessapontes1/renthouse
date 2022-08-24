  import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
  import { Camera, CameraType } from 'expo-camera';
  import { useEffect, useState } from 'react';

  import { initializeApp } from "firebase/app";
  import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";
  const app = initializeApp('../renthouse-74331-firebase-adminsdk-dmoss-f62b02e009.json');
  // Create a root reference
  const storage = getStorage(app, "gs://renthouse-74331.appspot.com");


  // console.log(app)
  // app.

  
  export default function TirarFoto( {navigation} ) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraInstance, setCameraInstance] = useState();
    const [ photo, setPhoto] = useState();
    const [type, setType] = useState(CameraType.back);
  
    useEffect(() => {
      (async () => {  
        const {status} = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null ) {
      return <View />
    }
  
  if (hasPermission === false) {
    return <Text> No access to camera </Text>
  }

    const savePhoto = async (photo)=> {
      const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            resolve(xhr.response);
          };
          xhr.onerror = function (e) {
            console.log(e);
          reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", photo.uri, true);
          xhr.send(null);
      });
      
      const storageRef = ref(storage, `images/${new Date()}`  );

      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, blob).then(async (snapshot) => {
        console.log(await getDownloadURL(snapshot.ref));
      });
    }

    return (
      <View style={styles.container}>
        {
          photo ?
            <>
              <Button style={styles.button}  title="Tirar outra Foto" onPress={async () => {
                setPhoto(null);
              }}/>
              <Button style={styles.button} title="Postar" onPress={() => navigation.navigate('Imoveis', {name: 'imoveis'})}/>
              <Image source={photo} />
            </>
            
          :
            <Camera style={styles.camera} type={type} ref={instance => {
              setCameraInstance(instance);
            }}
            >
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setType(type === CameraType.back ? CameraType.front : CameraType.back);
                  }}
                >
                  <Button title="Captura" onPress={async () => {
                    let photo = await cameraInstance.takePictureAsync()
                    savePhoto(photo)
                    setPhoto(photo);
                  }}/>              
                </TouchableOpacity>
            </View>
          </Camera>
        }
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      margin: 30,
      left: '5%',
      right:'5%'
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });
