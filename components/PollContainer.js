import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Pressable,
    Button,
} from 'react-native';
import RNPoll, { IChoice } from 'react-native-poll';

const PollContainer = ({ prompt, choices }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.promptContainer}>{prompt}</Text>
            <RNPoll
                totalVotes={30}
                choices={choices}
                onChoicePress={(selectedChoice) =>
                    console.log('SelectedChoice: ', selectedChoice)
                }
            />
            {/* <Button style={styles.buttonText} onPress={onButtonPress} title={text}/> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        borderRadius: 12,
        //   width: 40,
        //   height: 30,
    },
    promptContainer: {
        color: '#000000',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#f5deb3',
        // borderRadius: 12,
        // alignItems: 'center',
        // justifyContent: 'center',
        // height: 50
    },
});

export default PollContainer;
