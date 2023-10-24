import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const UpdateProfil = ({ route }) => {
  const { nom, prenom, username } = route.params;

  const [updatedNom, setUpdatedNom] = useState('');
  const [updatedPrenom, setUpdatedPrenom] = useState('');
  const [updatedUsername, setUpdatedUsername] = useState('');

  const handleFieldChange = (field, text) => {
    switch (field) {
      case 'nom':
        setUpdatedNom(text);
        break;
      case 'prenom':
        setUpdatedPrenom(text);
        break;
      case 'username':
        setUpdatedUsername(text);
        break;
      default:
        break;
    }
};

const navigation = useNavigation() as any;
const navigate = useNavigation() as any;

const saveChanges = () => {
    navigation.navigate('Profil', {
        nom: updatedNom,
        prenom: updatedPrenom,
        username: updatedUsername,
      });
      alert('Profil modifier avec succès');
  };

  const CancelChanges = () => {
    navigate.navigate('Profil', {
        nom:nom,
        prenom:prenom,
        username:username,
    });
  };

  return (
    <View style={styles.container}>
        <View style={styles.form}>
            <Text style={styles.titre}>Modifier votre profil</Text>
    <Text style={styles.txt}>Nom:</Text>
    <TextInput
      value={updatedNom}
      placeholder={nom}
      placeholderTextColor={'black'}
      onChangeText={(text) => handleFieldChange('nom', text)}
      style={styles.input}
    />

    <Text style={styles.txt}>Prénom:</Text>
    <TextInput
      value={updatedPrenom}
      placeholder={prenom}
      placeholderTextColor={'black'}
      onChangeText={(text) => handleFieldChange('prenom', text)}
      style={styles.input}
    />

    <Text style={styles.txt}>Nom d'utilisateur:</Text>
    <TextInput
      value={updatedUsername}
      placeholder={username}
      placeholderTextColor={'black'}
      onChangeText={(text) => handleFieldChange('username', text)}
      style={styles.input}
    />
    
    <TouchableOpacity style={styles.btn} onPress={saveChanges}>
        <Text style={styles.txtBtn}>Enregistrer</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnCancel} onPress={CancelChanges}>
        <Text style={styles.txtCancel}>Annuler</Text>
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

      form:
  {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    borderRadius: 7,
    marginTop:'5%'
  },

  titre:
  {
    fontSize: 22,
    alignSelf: 'center',
    marginTop: '20%',
    marginBottom: '20%'
  },

  txt:
  {
    fontSize:16,
    left: '18%'
  },

  input: {
    width: '70%',
    height: 35,
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    marginBottom: 20,
    alignSelf:'center'
  },

  btn:
  {
    position:'relative',
    left:'15%',
    width: '30%',
    top: '5%',
    paddingVertical: 5,
    backgroundColor: '#212121',
    borderRadius: 15
  },
  txtBtn:
  {
    color: 'white',
    textAlign:'center'
  },

  btnCancel:
  {
    position:'relative',
    left:'50%',
    width: '30%',
    top: '1.3%',
    paddingVertical: 5,
    backgroundColor: '#212121',
    borderRadius: 15
  },
  txtCancel:
  {
    color: 'white',
    textAlign:'center'
  },
})

export default UpdateProfil;
