import SingleComment from "./SingleComment.jsx";

export default function Comments({article, comments}){
    return <section>
        <h1 className={"title is-size-3 mb-6"}>Comments ({article.comment_count})</h1>
        {comments.map(comment => <SingleComment comment={comment} key={comment.comment_id}/>)}
        <br/><br/>
    </section>
}