
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"



const News = (props) =>   {
 const [articles, setArticles] = useState([]);
 const [loading, setLoading] = useState(true);
 const [page, setPage] = useState(1);
 const [totalResults, setTotalResults] = useState(0);
  
  const update = async  () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&apiKey=81690fb9f08c46fa95a3c7e62d6d8c16&pageSize=${props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
   
    setArticles(parsedData.articles) 
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    }
   
  
  useEffect(()=> {
    update();
    document.title = `NewsDaily - ${props.category}`
  } ,[])
  
  
  const fetchMoreData = async () => {
    setPage(page +1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&apiKey=81690fb9f08c46fa95a3c7e62d6d8c16&pageSize=${props.pageSize}`;
  
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
   
  }

    return (
      <>
        <h3 className='text-center' style={{marginTop: '11vh', marginBottom: '3vh', fontSize: '28px', wordSpacing: '5px', color: '#002B5B'}}>News Daily - Top {props.category==="General"?"":props.category} Headlines</h3>
       
            {loading && <div d-flex justify-content-center align-items-center> <Spinner/></div>}
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={ articles.length < totalResults && <Spinner/>}
        >
          <div className='container'>
        <div className='row text-center' >
        { articles.map((e, url) => {
            return <div  className='col-md-4' key={url} >
            <NewsItem  title={e.title?e.title.slice(0,50):""} description={e.description? e.description.slice(0,90):""} urlToImage = {e.urlToImage} url= {e.url}
            author = {e.author?e.author:"Unknown"} source={e.source.name} date={e.publishedAt}/>

            </div>
  
        })
        
        }
          
      </div>
      </div>
      </InfiniteScroll>
        
      </>
    )
    
}
News.dafaultProps ={
  country : 'in',
  pageSize : 9,
  category : 'general'
  

 }
 News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
 }
export default News;