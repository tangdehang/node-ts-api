import { PostSummary } from './postSummary'
import { Todo } from './todo'

export class PostDetail extends PostSummary {
    price: number;
    currency: string;
    todos: Todo;

    constructor(postData:any, todos: any){
        super(postData);
        this.price = postData.price;
        this.currency = postData.currency;
        this.todos = todos;
    }
}