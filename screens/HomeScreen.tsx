import * as React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Modal,
    FlatList,
    Dimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNPoll, { IChoice } from 'react-native-poll';
import RNAnimated from 'react-native-animated-component';
import PollContainer from '../components/PollContainer';
import Title from '../components/Title';

const pollMap = {
    prompt: 'Who will win Best Picture at the Oscars?',
    choices: [
        { id: 1, choice: 'Tar', votes: 12 },
        { id: 2, choice: 'Everything Everywhere All at Once', votes: 1 },
        { id: 3, choice: 'Top Gun: Maverick', votes: 3 },
        { id: 4, choice: 'The Fablemans', votes: 5 },
        { id: 5, choice: 'Triangle of Sadness', votes: 9 },
    ],
};

type PollInfo = {
    key: number;
    prompt: String;
    choices: Array<IChoice>;
};
const oscarPolls: Array<PollInfo> = [
    {
        key: 1,
        prompt: 'Who will win Best Picture at the Oscars?',
        choices: [
            { id: 1, choice: 'Tar', votes: 12 },
            { id: 2, choice: 'Everything Everywhere All at Once', votes: 1 },
            { id: 3, choice: 'Top Gun: Maverick', votes: 3 },
            { id: 4, choice: 'The Fablemans', votes: 5 },
            { id: 5, choice: 'Triangle of Sadness', votes: 9 },
        ],
    },
    {
        key: 2,
        prompt: 'Who will win Best Cinematography at the Oscars?',
        choices: [
            { id: 1, choice: 'Tar', votes: 5 },
            { id: 2, choice: 'All Quiet on the Western Front', votes: 8 },
            {
                id: 3,
                choice: 'Bardo, False Chronicle of a Handful of Truths',
                votes: 5,
            },
            { id: 4, choice: 'Empire of Light', votes: 3 },
            { id: 5, choice: 'Elvis', votes: 9 },
        ],
    },
    {
        key: 3,
        prompt: 'Who will win Best Costuming at the Oscars?',
        choices: [
            { id: 1, choice: 'Black Panther: Wakanda Forever', votes: 5 },
            { id: 2, choice: 'Everything Everywhere All at Once', votes: 9 },
            { id: 3, choice: 'Top Gun: Maverick', votes: 5 },
            { id: 4, choice: 'Babylon', votes: 3 },
            { id: 5, choice: 'Triangle of Sadness', votes: 8 },
        ],
    },
];

const HomeScreen = () => {
    const [isPollShowing, setIsPollShowing] = React.useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Title titleText={'Home'} />
            <View style={{ flexGrow: 1, paddingTop: 20 }}>
                <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    data={oscarPolls}
                    renderItem={({ item }) => (
                        <PollContainer
                            key={item.key}
                            prompt={item.prompt}
                            choices={item.choices}
                        />
                    )}
                />
            </View>
            {/* <PollContainer onButtonPress={() => setIsPollShowing(!isPollShowing)} text={"Which movie will win Best Picture - Oscars 2023?"}/> */}

            {
                // <FlatList
                // data={oscarPolls}
                // contentContainerStyle={{ paddingBottom: 60 }}
                // keyExtractor={(item) => item.prompt}
                // renderItem={({ item }) => <PollContainer prompt={item.prompt} choices={item.choices} />}/>
                // oscarPolls.map((prompt, choices) => {
                //     <PollContainer prompt={prompt} choices={choices}/>
                // })
            }
            {/* <PollContainer prompt={"Who will win Best Picture at the Oscars?"} */}
            {/* {
                isPollShowing ? (
                <RNPoll
                    totalVotes={30}
                    choices={choices}
                    onChoicePress={(selectedChoice: IChoice) =>
                        console.log("SelectedChoice: ", selectedChoice)
                    }
                />
                ): null
            } */}

            {/* <PollContainer prompt={"Who will win Best Picture at the Oscars?"}/>
            <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" />
            <Button label="Use this photo" />
            </View>
            <StatusBar style="auto" /> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f0ead6',
        alignItems: 'center',
    },
    pollContainer: {},
});

export default HomeScreen;
