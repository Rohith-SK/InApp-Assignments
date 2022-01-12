import React from 'react'
import { useState, useEffect } from 'react'
import './NewsInfo.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";


function NewsInfo() {
    const [articles,setArticles] = useState([])
    const [title, setTitle] = useState()
    const [searchDate,setSearchDate] = useState(new Date)
    const navigate = useNavigate()
    useEffect(() =>{
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-12-12&sortBy=publishedAt&apiKey=31e92b13ac7b4a93a3891f0daa8df7be')
        .then(res =>{
            console.log(res)
            setArticles(res.data.articles)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])
    const dateHandler = (event) =>{
        setSearchDate(searchDate)
        sessionStorage.setItem('inputDate',event.target.value)
    }
  
    const searchHandler = () =>{
        navigate('/titleinfo')
    }

    const startDateHandler = (event) =>{
        sessionStorage.setItem('startDate',event.target.value)
    }

    const endDateHandler = (event) =>{
        sessionStorage.setItem('endDate',event.target.value)
    }

    return (
        <div>
            <h1 className='news-info-head'>Titles of News</h1>
            <h1 className='start-date'>Start Date<input type='date' className='range-date-search' onChange={startDateHandler}></input></h1>
            <h1 className='end-date'>End Date<input type='date' className='range-date-search' onChange={endDateHandler}></input></h1>
            <Link to='/rangetitle'>
                <button className='range-date-search-button'>Search</button>
            </Link>
            <input type='date' className='date-search' placeholder='Select the Date' onChange={dateHandler}></input><button className='search-button' onClick={searchHandler}>Search</button>
            <ul>
                {
                    articles.map(article =><li className='title-list' key={article.title} >{article.title}<Link to='/newsdetails'><button className='show-details-button' onClick={()=>setTitle(sessionStorage.setItem("title", article.title))}>Show Details</button></Link></li>)
                   
                }
            </ul>
            <Link to='/'>
                <button className='news-info-go-back-button'>Go Back</button>
            </Link>         
        </div>

    )
}

export default NewsInfo

