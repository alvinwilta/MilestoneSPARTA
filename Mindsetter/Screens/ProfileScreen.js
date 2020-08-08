import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const Face = ({icon, title, color, full}) => {
  return (
    <View style={styles.faceGroup}>
      {full ? (
        <View style={{backgroundColor: color, borderRadius: 40}}>
          <Icon name={icon} size={36} color={'#fff'} />
        </View>
      ) : (
        <Icon name={icon} size={36} color={color} />
      )}

      <Text style={[styles.faceText, {color}]}>{title}</Text>
    </View>
  );
};


export const CardHome = ({title, info, noHeader}) => {
  return (
    <View style={styles.cardContainer}>
      {!noHeader && (
        <View style={styles.cardHeaderContaner}>
          <Text style={styles.cardHeading}>{title}</Text>
          <Text style={styles.cardMore}>See All</Text>
        </View>
      )}
      
        <View style={styles.cardBodyTop}>

          <View style={styles.cardLeftSide}>
            <Text style={styles.tag}>{info.tag}</Text>
            <Text style={styles.cardTime}>{info.time}</Text>
            
            <Text style={styles.cardName}>{info.name}</Text>
            
            <Text style={styles.cardTime}>{info.address}</Text>
            <Text style={styles.cardAddress}>{info.detail}</Text>
          
          </View>
        </View>
      
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Hi John Doe</Text>
        <Text style={styles.desc}>My Account</Text>
      </View>
      <View>
        <View style={ styles.cardWhite}>
            <CardHome
            title="Bio"
            info={{
                name: 'An unknown person with an anknown name. It`s like lorem ipsum for user. ',
            }}
            /> 
        </View>
        <View style={ styles.cardBody}> 
            <CardHome
            title="Letter Of Commitment"
            info={{
                name: 'You haven`t write your letter of Commitment',
                
                tag: 'It`s a great way to keep you in track',
            }}
            /> 
        </View>
        <View style={ styles.cardPurple}>
            <CardHome
            title="Weekly Progress"
            info={{
                name: '1 of 2 ',
                time: ' You have read ',
                address: 'articles'
                
            }}
            />
        </View>
        <View style={ styles.cardTosca}>
            <CardHome
            title="Articles Read"
            info={{
                name: ' 20 ',
                time: 'You Have read ',
                address: 'Articles so far',
                tag: 'Keep up the good work',
            }}
            />
        </View>
        <View style={ styles.cardGreen}> 
            <CardHome
            title="Goals Completed"
            info={{
                name: '80 ',
                time: 'You have completed ',
                address: 'percent of your goals',
                tag: 'Keep up the good work',
            }}
            />
        </View>
       
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    marginTop: 5,
  },
  tag: {
    color: '#B066A4',
  },
  cardContainer: {
    padding: 15,
    paddingBottom: 0,
  },
  margin: {
    height: 1,
    backgroundColor: '#F0F1F2',
    width: '100%',
    marginVertical: 10,
  },
  cardBodyBottom: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBottomTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  cardGroupIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMore: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  iconLike: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cardWhite: {
    paddingHorizontal: 10, 
    padding: 10,
    backgroundColor: '#F5F5F5',
    marginTop: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 9,
  },
  cardBody: {
    paddingHorizontal: 10,
    
    backgroundColor: '#FFEBEB',
    marginTop: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 4, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 9,
  },
  cardPurple: {
    padding: 10,
    backgroundColor: '#ECDDF2',
    marginTop: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 4, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 9,
  },
  cardTosca: {
    padding: 10,
    backgroundColor: '#D3E7EC',
    marginTop: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 4, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 9,
  },
  cardGreen: {
    padding: 10,
    backgroundColor: '#D3ECE5',
    marginTop: 12,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 4, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 9,
  },
  cardBodyTop: {
    flexDirection: 'row',
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  cardName: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTime: {
    color: '#222',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  cardAddress: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 5,
  },
  cardHeaderContaner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardMore: {
    fontWeight: 'bold',
    color: '#FFB241',
  },
  faceGroup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceContainer: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
  },
  faceText: {
    fontSize: 16,
    marginTop: 6,
  },

  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 52,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
  desc: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    marginTop: 5,
  },
  buttonBooks: {
    flexDirection: 'row',
    marginTop: 20,
  },
  btnGradient: {
    padding: 10,
    borderRadius: 40,
  },
  btnBookText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});