export interface TodoInterface {


    id: number;
    title: string;
    description: string;
    status: 'todo' | 'inprogress' | 'completed';
    date: Date;
    priority: 'High'|'Medium'|'Low';
    complete_percentage:number;
 

}
