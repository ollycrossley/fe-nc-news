import SingleComment from "./SingleComment.jsx";

export default function Comments({article, comments}){

    if (comments.length === 0) {
        return <section>
            <h1 className={"title is-size-3 mb-6"}>Comments ({article.comment_count})</h1>
            <p>There are no comments!</p>
            <br/><br/>
        </section>
    }

    return <section>
        <h1 className={"title is-size-3 mb-6"}>Comments ({article.comment_count})</h1>
        {comments.map(comment => <SingleComment comment={comment} key={comment.comment_id}/>)}
        <br/><br/>
    </section>
}