import {useEffect, useState} from "react";
import {getUser} from "../../../../api.js";
import moment from "moment";

export default function SingleComment({comment}){

    const [user, setUser] = useState({})

    useEffect(() => {
        getUser(comment.author).then(user => setUser(user))
    }, []);

    return <section className={"block mb-5"}>
        <article className={"media"}>
            <figure className={"media-left"}>
                <img className={"image is-64x64 is-rounded"} src={user.avatar_url} alt={"user comment avatar"}/>
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
            </div>
        </article>
    </section>

}