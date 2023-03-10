import * as React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Modal,
    FlatList,
    Dimensions,
    TextInput,
    Button,
    Alert,
    Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNPoll, { IChoice } from 'react-native-poll';
import RNAnimated from 'react-native-animated-component';
import PollContainer from '../components/PollContainer';
import Title from '../components/Title';
import { PlusCircleOutlined } from '@ant-design/icons';
import PollChoices from '../components/PollChoices';

const CreatePollScreen = () => {
    const [prompt, setPrompt] = React.useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={setPrompt}
                value={prompt}
                placeholder="Enter prompt"
            />
            <Button
                title="Create Poll"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
            <PollChoices />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 12,
    },
    pollChoicesContainer: {
        marginLeft: 45,
        marginTop: 10,
    },
});
export default CreatePollScreen;
