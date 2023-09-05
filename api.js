import axios from "axios"

export const getArticles = () => {
    return axios.get("https://olly-nc-news.onrender.com/api/articles").then(response => response.data.articles)
}

export const getArticle = (article_id) => {
    return axios.get(`https://olly-nc-news.onrender.com/api/articles/${article_id}`).then(response => response.data.article)
}