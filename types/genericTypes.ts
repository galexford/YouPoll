import { IChoice } from 'react-native-poll';

export type PollType = {
    key: number;
    prompt: String;
    choices: Array<IChoice>;
};

export type PollsType = Array<PollType>;
