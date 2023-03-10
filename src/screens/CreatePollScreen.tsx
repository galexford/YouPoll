import * as React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Button,
} from 'react-native';
import { IChoice } from 'react-native-poll';
import PollChoices from '../components/PollChoices';
import useCreatePollController from '../view-controllers/useCreatePollController';
import { CreatePollType } from '../types/genericTypes';

const CreatePollScreen = () => {
    const [prompt, setPrompt] = React.useState('');
    const [poll, setPoll] = React.useState<CreatePollType | null>(null);

    const {onClickCreatePoll} = useCreatePollController();
    
    const handlePollUpdate = (choicesStr: Array<string>) => {
        // Translating choices inputs to IChoice type
        const choices: Array<IChoice> = [];
        choicesStr.map((choiceStr, i) => {
            const choice = {
                id: i,
                votes: 0,
                choice: choiceStr}
            choices.push(choice);
        })
        setPoll({prompt, choices});
    }

    return (
        <SafeAreaView>
            <TextInput
                style={styles.prompt}
                onChangeText={setPrompt}
                value={prompt}
                placeholder="Enter prompt"
            />
            <Button
                title="Create Poll"
                onPress={() => onClickCreatePoll(poll)}
            />
            <PollChoices onPollUpdate={handlePollUpdate}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    prompt: {
        height: 40,
        margin: 12,
        padding: 10,
        borderBottomWidth: 1
    },
    pollChoicesContainer: {
        marginLeft: 45,
        marginTop: 10,
    },
});
export default CreatePollScreen;
