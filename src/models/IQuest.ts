import { IComment } from './IComment';
import { IReward } from './IReward';

export interface IQuest {
    id: number;
    title: string;
    description: string;
    author: string;
    comments: IComment[];
    rewards: string;
}
