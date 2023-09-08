import axios from "axios"

const baseURL = "https://olly-nc-news.onrender.com"
// const baseURL = "http://localhost:9090"

export const getArticles = (topic, order) => {
    let getArticlesBase = `${baseURL}/api/articles`
    if (topic || order) {
        getArticlesBase += "?"
        topic ? getArticlesBase += `topic=${topic}&` : ""
        order ? getArticlesBase += `order=${order}&` : ""
    }
    console.log(getArticlesBase)
    return axios.get(`${getArticlesBase}`).then(response => response.data.articles)
}

export const getArticle = (article_id) => {
    return axios.get(`${baseURL}/api/articles/${article_id}`).then(response => response.data.article)
}

export const getComments = (article_id) => {
    return axios.get(`${baseURL}/api/articles/${article_id}/comments`).then(response => response.data.comments)
}

export const getUser = (username) => {
    return axios.get(`${baseURL}/api/users/${username}`).then(response => response.data.user)
}

export const patchVote = (article_id, vote) => {
    return axios.patch(`${baseURL}/api/articles/${article_id}`, {inc_votes: vote}).then(response => response.data.article)
}

export const postComment = (article_id, username, body) => {
    return axios.post(`${baseURL}/api/articles/${article_id}/comments`, {username, body}).then(response => response.data.comment)
}

