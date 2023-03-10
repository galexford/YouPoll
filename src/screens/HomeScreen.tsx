import * as React from 'react';
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ViewPollContainer from '../components/ViewPollContainer';
import useHomeController from '../view-controllers/useHomeController';
import { PollType } from '../types/genericTypes';

const HomeScreen = () => {
    const { polls } = useHomeController();

    const renderPollList = ({item} : {item: PollType}) => {
        return(
            <ViewPollContainer key={item.key} prompt={item.prompt} choices={item.choices} />
        );
    }

    return (
          <SafeAreaView style={styles.container}>
            <View style={{flexGrow: 1, paddingTop: 20}}>
                <FlatList
                        contentContainerStyle={{ flexGrow: 1}}
                        data={polls}
                        renderItem={renderPollList}
                    />
            </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        backgroundColor: '#f0ead6',
        alignItems: 'center',
    },
    pollContainer: {
    }
  });

  export default HomeScreen;