import axios from "axios"

export const getArticles = () => {
    return axios.get("https://olly-nc-news.onrender.com/api/articles").then(response => response.data.articles)
}

export const getArticle = (article_id) => {
    return axios.get(`https://olly-nc-news.onrender.com/api/articles/${article_id}`).then(response => response.data.article)
}

export const getComments = (article_id) => {
    return axios.get(`https://olly-nc-news.onrender.com/api/articles/${article_id}/comments`).then(response => response.data.comments)
}

export const getUser = (username) => {
    return axios.get(`https://olly-nc-news.onrender.com/api/users/${username}`).then(response => response.data.user)
}

export const patchVote = (article_id, vote) => {
    return axios.patch(`https://olly-nc-news.onrender.com/api/articles/${article_id}`, {inc_votes: vote}).then(response => response.data.article)
}

export const postComment = (article_id, username, body) => {
    return axios.post(`https://olly-nc-news.onrender.com/api/articles/${article_id}/comments`, {username, body}).then(response => response.data.comment)
}

