import React from 'react'

const NewsItem = (props) => {
  
    let {title, description, urlToImage, url, author, date, source} = props;
    return (
      <div>
        <div className="card" style={{padding: '2vh', margin: '1.5vh 2vh'}}>
  <img src={urlToImage?urlToImage:"https://i.guim.co.uk/img/media/3f8875e1b5642abc6b470f95184c692e8da23787/0_0_4331_2598/master/4331.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5c1f2fcb6957c9db3a9a446aadaf4438"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h6 className="card-title">{title}...</h6>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small classname="text-muted">By <i>{author}</i> of <b>{source}</b> on <i>{new Date(date).toUTCString()} </i></small></p>
    <a href={url} target ="_blank" rel="noopener noreferrer" className="btn btn-primary">Tap to read</a>
  </div>
</div>
      </div>
    )
  
}
export default NewsItem
