export interface comment {
id?:string,
parentCommentId?:number;
ownerId?:number;
txt?:string;
createdAt?:string;
deletedAt?:any;
}
export interface Usercomment {
    displayName?:string;
    id?:string,
    parentCommentId?:number;
    ownerId?:number;
    txt?:string;
    createdAt?:string;
    deletedAt?:any;
    comments?:Usercomment[];
    }