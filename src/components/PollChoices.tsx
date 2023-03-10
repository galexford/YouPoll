import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

interface PollChoicesProps {
    onPollUpdate: (choices: Array<string>) => void;
}

const PollChoices = (props: PollChoicesProps) => {
    const { onPollUpdate } = props;
    const [choices, setChoices] = React.useState(['', '']);

    const onClickAdd = () => {
        setChoices((prev) => [...prev, '']);
    };

    const onClickDelete = () => {};

    const onChangeText = (text: string, i: number) => {
        const newChoices = [...choices];
        newChoices[i] = text;
        setChoices(newChoices);
        onPollUpdate(choices);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.choicesContainer}>
                {choices.map((choice, i) => {
                    return (
                        <View key={i} style={styles.row}>
                            <View style={styles.row}>
                                <TextInput
                                    autoFocus={i > 1}
                                    maxLength={25}
                                    style={styles.choicePlaceholder}
                                    value={choice}
                                    onChangeText={(text) =>
                                        onChangeText(text, i)
                                    }
                                    placeholder={`Choice ${i + 1}`}
                                />
                                <View style={styles.letterCountContainer}>
                                    <Text style={styles.letterCount}>
                                        {25 - (choice ? choices.length : 0)}
                                    </Text>
                                </View>
                            </View>
                            {choices.length > 1 && i != choices.length - 1 && (
                                <Pressable onPress={() => onClickDelete()}>
                                    <Feather
                                        name="x-circle"
                                        size={24}
                                        color="black"
                                    />
                                </Pressable>
                            )}
                            {i > 0 && i == choices.length - 1 && i < 5 && (
                                <Pressable
                                    style={styles.plusContainer}
                                    onPress={() => onClickAdd()}
                                >
                                    <AntDesign
                                        name="pluscircleo"
                                        size={24}
                                        color="black"
                                    />
                                </Pressable>
                            )}
                        </View>
                    );
                })}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        width: '95%',
        backgroundColor: '#f0ead6',
        borderRadius: 8,
        borderWidth: 1,
        marginLeft: 15,
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderRadius: 50,
    },
    choicesContainer: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pollLengthContainer: {
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    choicePlaceholder: {
        borderWidth: 1,
        width: '90%',
        padding: 10,
        paddingRight: 30,
        borderRadius: 8,
        marginVertical: 8,
    },
    letterCountContainer: {
        position: 'absolute',
        zIndex: 10,
        right: 40,
    },
    letterCount: {
        color: 'grey',
        fontSize: 13,
    },
    plusContainer: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: -5,
    },
});

export default PollChoices;
