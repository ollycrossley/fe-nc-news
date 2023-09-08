import {useContext, useEffect, useState} from "react";
import {getUser} from "../../../../api.js";
import moment from "moment";
import {UserContext} from "../../../contexts/loggedUser.jsx";

export default function SingleComment({comment, deleteComment}){

    const {user, setUser} = useContext(UserContext)
    const [thisUser, setThisUser] = useState({})

    useEffect(() => {
        getUser(comment.author).then(user => setThisUser(user))
    }, []);

    return <section className={"block mb-5"}>
        <article className={"media"}>
            <figure className={"media-left"}>
                <img className={"image is-64x64 is-rounded"} src={thisUser.avatar_url} alt={"user comment avatar"}/>
            </figure>
            <div className={"media-content"}>
                <div className={"content"}>
                    <p><strong>{comment.author}</strong> <small>{moment(comment.created_at).fromNow()}</small></p>
                    <p style={{width: "70%"}}>{comment.body}</p>
                </div>

                <span className={"icon-text"}>
                    <span className={"icon has-text-danger"} aria-label={"Likes"}><i className={"fas fa-heart"}/></span>
                <   span><p>{comment.votes}</p></span>
                </span>
                {comment.author === user.username ? <a className={"pl-5"} onClick={() => deleteComment(comment.comment_id)}>Delete</a> : null}
            </div>
        </article>
    </section>

}