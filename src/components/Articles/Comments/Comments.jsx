import SingleComment from "./SingleComment.jsx";
import {UserContext} from "../../../contexts/loggedUser.jsx";
import {useContext, useEffect, useState} from "react";
import {getComments, postComment, removeComment} from "../../../../api.js";

export default function Comments({article}) {
    const {user, setUser} = useContext(UserContext)
    const [commentInput, setCommentInput] = useState("")
    const [comments, setComments] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        postComment(article.article_id, user.username, commentInput).then(newComment => {
            setComments(currComments => [newComment, ...currComments])
        }).catch(() => {
            alert("Something went wrong! Please refresh and try again")
        })
        setCommentInput("")
    }

    function remove(array, key, value) {
        const index = array.findIndex(obj => obj[key] === value);
        return index >= 0 ? [
            ...array.slice(0, index),
            ...array.slice(index + 1)
        ] : array;
    }

    function deleteComment (comment_id) {
        const oldComments = [...comments]
        setComments(remove(comments, "comment_id", comment_id))
        removeComment(comment_id).then(()=> {
            alert("This comment has been removed!")
        }).catch(() => {
            setComments(oldComments)
            alert("Something went wrong, please try again later!")
        })

    }

    useEffect(() => {
        getComments(article.article_id).then(comments => {
            setComments(comments)
        })
    }, []);

    if (comments.length === 0) {
        return <section>
            <h1 className={"title is-size-3 mb-6"}>Comments ({article.comment_count})</h1>
            <p>There are no comments!</p>
            <br/><br/>
        </section>
    }

    return <section>
        <h1 className={"title is-size-3 mb-6"}>Comments ({article.comment_count})</h1>
            <form className={"block"} onSubmit={handleSubmit}>
                <article className={"media"}>
                    <figure className={"media-left"}>
                        <img className={"image is-64x64 is-rounded"} src={user.avatar_url} alt={"user comment avatar"}/>
                    </figure>
                    <div className={"media-content"}>
                        <div className={"field"}>
                            <p className={"control"} style={{width: "70%"}}>
                        <textarea required={true} className="textarea" placeholder="Add a comment..."
                                  onChange={e => setCommentInput(e.target.value)} value={commentInput}></textarea>
                            </p>
                        </div>
                        <div className={"field"}>
                            <div className={"control"}>
                                <button type={"submit"} className={"button is-danger"}>Submit</button>
                            </div>
                        </div>
                    </div>
                </article>
            </form>
        <br/>

        {comments.map(comment => <SingleComment comment={comment} key={comment.comment_id} deleteComment={deleteComment}/>)}

        <br/><br/>
    </section>
}