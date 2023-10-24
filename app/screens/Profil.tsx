import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Icon } from 'app/components';
const defaultUser = require("../../assets/images/logo.png")

export const Profil = ({ route }) => {
  const { nom, prenom, username } = route.params;
  const navigation = useNavigation() as any;
  

  function goNext() {
    navigation.navigate("UpdateProfil", {nom:nom, prenom:prenom, username:username})
  }

  const [image, setImage] = useState("../assets/images/logo.png");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  
  
  return (
    <View style={styles.container}>
       <View style={styles.nav}>
            <Text>sqbjkbfkqsjfb</Text>
        </View>
      <View style={styles.form}>

      <View style={styles.imgView}>
  <Image source={{ uri: image }} style={styles.image} />
  <View style={styles.editIconContainer}>
  <Icon icon='edit' size={30} color='yellow' onPress={pickImage}> </Icon>
  </View>
</View>

       
  
        <Text style={styles.titre}>{username} </Text>
        <View style={styles.field}>
          <Text style={styles.label}>Nom :</Text>
          <Text style={styles.info}>{nom}</Text>
        </View>
  
        <View style={styles.field}>
          <Text style={styles.label}>Prénom :</Text>
          <Text style={styles.info}>{prenom}</Text>
        </View> 
          
        <View style={styles.field}>
          <Text style={styles.label}>Nom d'utilisateur :</Text>
          <Text style={styles.info}>{username}</Text>
        </View>
  
        <TouchableOpacity style={styles.btn} onPress={goNext}>
          <Text style={styles.txtBtn}>Modifier</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  
  nav: {
    width: '100%',
    height: '10%',
    backgroundColor: 'grey',
  },
  
  form: {
    backgroundColor: '#E5E5E5',
    width: '90%',
    height: '80%',
    borderRadius: 7,
    marginTop: '5%',
    padding: 20,
  },
  
  imgView: {
    position:'relative',
    alignSelf:'center',
  },
  
  image:{
    position:'relative',
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 5
  },
  editIconContainer:
  {
    position:'absolute',
    top: '70%',
    left:'30%',
    color: 'green'

  },

  titre: {
    textAlign: 'center',
    marginBottom: '30%',
    fontSize: 22,
    top: '5%'
  },
  
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    marginBottom: 10,
    padding: 10,
  },
  
  label: {
    position: 'relative',
    left: '20%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
  },
  
  btn: {
    backgroundColor: '#212121',
    width: '50%',
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 10,
  },
  
  txtBtn: {
    color: 'white',
    textAlign: 'center',
  },
});
  
export default Profil;
