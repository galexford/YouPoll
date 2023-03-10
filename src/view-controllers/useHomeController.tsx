import {useNavigation} from '@react-navigation/native';
import React from 'react';
import useAppViewModel from '../view-models/useAppViewModel';

const useHomeController = () => {
  const {polls, fetchPolls} = useAppViewModel();

  React.useEffect(() => {
    // fetchPolls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [polls]);

  return {
    polls
  };
};

export default useHomeController;