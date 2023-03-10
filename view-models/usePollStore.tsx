import React from 'react-query';
import PollStore from '../stores/PollStore';

export const usePollStore = () => {
    const fetchPolls = () => {
        return React.useQuery('polls', () => {
            return PollStore;
        });
    }

    const createPoll = () => {
        // Functionality to be added when not using mock data
        return PollStore;
    }

    return {
        fetchPolls,
        createPoll
    } 
};
