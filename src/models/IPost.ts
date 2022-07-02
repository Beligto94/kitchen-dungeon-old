import {IComment} from "./IComment";

export interface IPost {
    id: number;
    title: string;
    description: string;
    author: string;
    comments: IComment[]
}
