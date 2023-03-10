import React from 'react';
import { usePollStore } from './usePollStore';
const useAppViewModel = () => {
    const {fetchPolls, createPoll} = usePollStore();
    const polls = fetchPolls();
    
    return {
        polls,
        fetchPolls,
        createPoll
    };
};

export default useAppViewModel;
