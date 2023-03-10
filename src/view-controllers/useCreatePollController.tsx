import useAppViewModel from '../view-models/useAppViewModel';
import { CreatePollType } from '../types/genericTypes';

const useCreatePollController = () => {
    const { polls, createPoll } = useAppViewModel();

    const onClickCreatePoll = (poll: CreatePollType | null) => {
        poll ? createPoll(poll.prompt, poll.choices) : null;
    };

    return {
        onClickCreatePoll,
    };
};

export default useCreatePollController;
