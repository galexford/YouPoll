import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import RNPoll, { IChoice } from 'react-native-poll';

interface ViewPollProps {
    prompt: String;
    choices: Array<IChoice>;
}

const ViewPollContainer = (props: ViewPollProps) => {
    const {prompt, choices} = props;

    return (
        <SafeAreaView>
            <View style={styles.pollContainer}>
                <Text style={styles.prompt}>{prompt}</Text>
                <RNPoll
                    totalVotes={30}
                    choices={choices}
                    onChoicePress={(selectedChoice) =>
                        console.log('SelectedChoice: ', selectedChoice)
                    }
                />
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    pollContainer: {
        marginBottom: 30,
    },
    prompt: {
        flex: 1,
        fontSize: 18,
        alignItems: 'center',
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: '#f5deb3',
    },
});

export default ViewPollContainer;
