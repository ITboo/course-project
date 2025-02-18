export interface Form {
    id: string,
    title:string,
    description:string,
    author_id:string,
    likes: number,
    status: 'active'|'blocked',
    is_private:boolean,
    comments:[],
    theme:string,
    img: string,
    created_at: Date
}