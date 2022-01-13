import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './TitleInfo.css'

function TitleInfo() {
    const [articles,setArticles] = useState([])
    const [titleInfoName, setTitleInfoName] = useState('')
    const inputDate = sessionStorage.getItem('inputDate')
    let titles=articles.map(article =>article.title)
    let publishedAt=articles.map(article =>article.publishedAt)
    let showTitle = true
    let titleNames=[]
    for(let i=0;i<titles.length;i++){
        let publishDate=publishedAt[i].slice(0,10);
        if(publishDate===inputDate){
            titleNames.push(titles[i])
        }
        else{
            showTitle = false
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
            <h1 className='title-info-main-head'>Titles of the news published on {inputDate}</h1>
            {
                showTitle ?
                titleNames.map(title=>{
                    return(
                        <li className='titles' key={title}>{title}<Link to='/titleinfodetails'><button className='title-info-show-details-button' onClick={()=>setTitleInfoName(sessionStorage.setItem('titleInfoName',title))}>Show Details</button></Link></li>
                    )
                }) :
                <h1 className='error-date-message'>No news published on {inputDate}</h1>
            }
            <Link to='/newsinfo'>
                <button className='title-info-go-back-button'>Go Back</button>
            </Link>
        </div>
        )
    }
export default TitleInfo
