import {useEffect, useState} from "react";
import {getComments} from "../../../../api.js";
import SingleComment from "./SingleComment.jsx";


export default function Comments({article}){

    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(article.article_id).then(comments => setComments(comments))
    }, []);

    return <section>
        <h1 className={"title is-size-3 mb-6"}>Comments ({article.comment_count})</h1>

        {comments.map(comment => <SingleComment comment={comment}/>)}

        <br/><br/>
    </section>
}