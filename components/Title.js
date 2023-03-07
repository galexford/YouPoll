import { StyleSheet, View, Text } from 'react-native';

const Title = ({titleText}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.baseText}>
                <Text style={styles.titleText}>{titleText}</Text>
            </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0ead5',
        alignItems: 'center',
        paddingTop: 75,
      },
    baseText: {
        fontFamily: 'Cochin',
      },
   titleText :{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#eb4034'
   }
  });

export default Title;
