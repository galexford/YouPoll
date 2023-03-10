import {useNavigation} from '@react-navigation/native';
import React from 'react';
import useAppViewModel from '../view-models/useAppViewModel';
import {screenMap} from '../navigation/screenMap';

const useCreatePollController = () => {
  const navigation = useNavigation();
  const {polls, createPoll} = useAppViewModel();

  const onHomeClick = () => {

  }
  
  const onPressTodoItem = (todoItem: TodoItemType) => {
    navigation.navigate(screenMap.UpdateTodo, {todoItem});
  };

  const onPressCreate = () => {
    navigation.navigate(screenMap.NewTodo);
  };

  return {
    polls,
    onPressTodoItem,
    onPressCreate,
  };
};

export default useCreatePollController;