import './NewsFeed.css'; // style sheet for NewsFeed

function NewsFeed(props) {
    if (props.newsData) {

        var newsData = props.newsData;
        var newsCard = newsData.map(newsCard => {
            return (
                <div key={
                        newsCard.id
                    }
                    className="news-card-element mt-4">
                    {/* news card component  */}
                    <div className="news-title">
                        {/* news card title*/}
                        <p>{
                            newsCard.title
                        }</p>
                        <p>&times;</p>
                        {/* cross symbol*/} </div>
                    <div className="text-muted mb-2">
                        {/* author name && date */}
                        <span className="author-name">
                            {
                            newsCard.author
                        }</span>
                        <span>
                            &nbsp;|&nbsp;
                        </span>
                        <span className="publish-date">
                            {
                            newsCard.published
                        }</span>
                    </div>
                    <div className="image">
                        {/* image for news*/}
                        <div className="left-image">
                        <img src={newsCard.image} alt="news">
                        </img> 
                        </div>
                        <div className="pl-3 right"> 
                        <p className="news-description">
                        {
                            newsCard.description
                        }
                        </p>
                            <p className="links">
                            <span className="reference">Reference</span>
                            <br/> 
                            <a href={newsCard.url}>
                            {newsCard.url}
                            </a>
                            </p>
                            </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="news-card-all"> {newsCard} </div>
    )
}
export default NewsFeed;
