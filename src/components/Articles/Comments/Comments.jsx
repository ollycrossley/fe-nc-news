import SingleComment from "./SingleComment.jsx";
import {UserContext} from "../../../contexts/loggedUser.jsx";
import {useContext, useState} from "react";
import {postComment} from "../../../../api.js";

export default function Comments({article, comments, setComments}) {

    const {user, setUser} = useContext(UserContext)
    const [commentInput, setCommentInput] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        postComment(article.article_id, user.username, commentInput).then(newComment => {
            setComments(currComments => {
                return [newComment, ...currComments]
            })
        }).catch((err) => {
            alert("Something went wrong! Please refresh and try again")
        })
        alert("Comment successfully posted!")
        setCommentInput("")
    }

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

        {comments.map(comment => <SingleComment comment={comment} key={comment.comment_id}/>)}

        <br/><br/>
    </section>
}