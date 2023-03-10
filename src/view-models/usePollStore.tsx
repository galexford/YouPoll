import { IChoice } from 'react-native-poll';
import { useQuery } from 'react-query';
import PollStore from '../stores/PollStore';

const fetchPolls = () => {
    return useQuery(['polls'], () => {
        return PollStore;
    });
};

const createPoll = (prompt: String, choices: Array<IChoice>) => {
    // Functionality to be added when not using mock data
    return PollStore;
};

export const usePollStore = () => {
    return {
        fetchPolls,
        createPoll,
    };
};
