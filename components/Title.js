import { StyleSheet, View, Text } from 'react-native';

const Title = ({ titleText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                <Text style={styles.titleText}>{titleText}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 10,
    },
    baseText: {},
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Title;
