import { PollsType } from '../types/genericTypes';

const PollStore: PollsType = [
    {
        key: 1,
        prompt: 'Who will win Best Picture at the Oscars?',
        choices: [
            { id: 1, choice: 'Tar', votes: 12 },
            { id: 2, choice: 'Everything Everywhere All at Once', votes: 1 },
            { id: 3, choice: 'Top Gun: Maverick', votes: 3 },
            { id: 4, choice: 'The Fablemans', votes: 5 },
            { id: 5, choice: 'Triangle of Sadness', votes: 9 },
        ],
    },
    {
        key: 2,
        prompt: 'Who will win Best Cinematography at the Oscars?',
        choices: [
            { id: 1, choice: 'Tar', votes: 5 },
            { id: 2, choice: 'All Quiet on the Western Front', votes: 8 },
            {
                id: 3,
                choice: 'Bardo, False Chronicle of a Handful of Truths',
                votes: 5,
            },
            { id: 4, choice: 'Empire of Light', votes: 3 },
            { id: 5, choice: 'Elvis', votes: 9 },
        ],
    },
    {
        key: 3,
        prompt: 'Who will win Best Costuming at the Oscars?',
        choices: [
            { id: 1, choice: 'Black Panther: Wakanda Forever', votes: 5 },
            { id: 2, choice: 'Everything Everywhere All at Once', votes: 9 },
            { id: 3, choice: 'Top Gun: Maverick', votes: 5 },
            { id: 4, choice: 'Babylon', votes: 3 },
            { id: 5, choice: 'Triangle of Sadness', votes: 8 },
        ],
    },
];

export default PollStore;
