import { StyleSheet, View, Text, InputAccessoryView, TextInput } from 'react-native';

const PollContainer = ({prompt}) => {
    return(
        <View style={styles.container}>
            <TextInput>{prompt}</TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b3e3e0',
      alignItems: 'center',
      paddingTop: 60,
    },
});

export default PollContainer;