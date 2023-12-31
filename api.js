import axios from "axios"

const baseURL = "https://olly-nc-news.onrender.com"
// const baseURL = "http://localhost:9090"

export const getArticles = (topic, order, sort) => {
    let getArticlesBase = `${baseURL}/api/articles`
    if (order || topic || sort) {
        getArticlesBase += "?"
        order ? getArticlesBase += `order=${order}&` : ""
        topic ? getArticlesBase += `topic=${topic}&` : ""
        sort ? getArticlesBase += `sort_by=${sort}&` : ""
    }
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

export const getTopics = () => {
    return axios.get(`${baseURL}/api/topics/`).then(response => response.data.topics)
}

export const removeComment = (comment_id) => {
    return axios.delete(`${baseURL}/api/comments/${comment_id}`)
}
