import './NewsFeed.css'; // style sheet for NewsFeed

function NewsFeed(props) {              // function to render the newsfeed 

    function onClickHandler(index) {    // it handles the click on cross button 
        props.removeNews(index);        // fire remove news 
    }

    if (props.newsData.length) {        // if fetched news array contains news  

        var newsData = props.newsData;
        var newsCard = newsData.map((newsCard , index) => {
            return (
                <div key={newsCard.id} className="news-card-element mt-4">         {/* news card component  */}
                    <div className="news-title">                                     
                        <p> {newsCard.title} </p>                                   {/* news card title*/}
                        <p className="cross" onClick={()=>onClickHandler(index)}>&times;</p>        {/* cross symbol*/} 
                    </div>

                    <div className="text-muted mb-2">           {/* author name && date */}
                        <span className="author-name"> {newsCard.author} </span>
                        <span>&nbsp;|&nbsp;</span>
                        <span className="publish-date">{newsCard.published.slice(0 , 19)}</span>
                    </div>

                    <div className="image">                             {/* image for news*/}
                    {
                        
                        newsCard.image ?                         <div className="left-image">
                            <img src={newsCard.image}  alt="news-logo"></img>
                        </div> : <div className="d-none"> </div>
                    }
                        <div className="pl-3 right">
                            <p className="news-description">{newsCard.description} </p>     {/* news  description*/}
                            <p className="links">
                                <span className="reference">Referrence</span>
                                <br/>
                                <a href={newsCard.url}>{newsCard.url} </a>
                            </p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    else       // if api call fetch no news then display only one div 
    {
        newsCard = <div key={"no-news"}
            var className="news-card-element mt-4">              {/* news card component when there is no news   */}
            <div className="news-title">
                <p>
                    no news found for this selected combination  , Try other combination or press Get Latest Button for Latest News
                </p>
            </div>
        </div>
    }
    return (
        <div className="news-card-all">
            {newsCard}
         </div>
    )
}
export default NewsFeed;
