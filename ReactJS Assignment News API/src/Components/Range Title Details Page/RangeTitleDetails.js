import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './RangeTitleDetails.css'


function RangeTitleDetails() {
    const [articles,setArticles] = useState([])
    const rangeTitleInfoName=sessionStorage.getItem('rangeTitleInfoName')
    let titleName=articles.map(article =>article.title)
    let author=articles.map(article =>article.author)
    let description=articles.map(article =>article.description)
    let url=articles.map(article =>article.url)
    let urlToImage=articles.map(article =>article.urlToImage)
    let publishedAt=articles.map(article =>article.publishedAt)
    let content=articles.map(article =>article.content)
    for(let i=0;i<titleName.length;i++){
        if(rangeTitleInfoName===titleName[i]){
            titleName=titleName[i]
            author=author[i]
            description=description[i]
            url=url[i]
            urlToImage=urlToImage[i]
            publishedAt=publishedAt[i]
            content=content[i]
        }
    }

    useEffect(() =>{
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-12-13&sortBy=publishedAt&apiKey=31e92b13ac7b4a93a3891f0daa8df7be')
        .then(res =>{
            setArticles(res.data.articles)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1 className='news-details-head'>News Details</h1>
            <h1 className='news-details'>Title: <span className='news-detail'>{titleName}</span></h1>
            <h1 className='news-details'>Author: <span className='news-detail'>{author}</span></h1>
            <h1 className='news-details'>Description: <span className='news-detail'>{description}</span></h1>
            <h1 className='news-details'>URL: <span className='news-detail'>{url}</span></h1>
            <h1 className='news-details'>Image URL: <span className='news-detail'>{urlToImage}</span></h1>
            <h1 className='news-details'>Publishing Date and Time: <span className='news-detail'>{publishedAt}</span></h1>
            <h1 className='news-details'>Content: <span className='news-detail'>{content}</span></h1>
            <Link to='/rangetitle'>
                <button className='news-details-go-back-button'>Go Back</button>
            </Link>
        </div>
    )
}

export default RangeTitleDetails
