import './NewsFeed.css';  //style sheet for NewsFeed
export default function NewsFeed() {
    return (
        <div>
        <div className="news-card-main mt-5">  {/* news card component  */}
            <div className="news-title">    {/* news card title*/}
                <p>Bogus Title</p>                      
                <p>&times;</p>                      {/* cross symbol*/}
            </div>
            <div className="text-muted">                    {/* author name && date */}
            <span className="author-name">Author Name</span>
             <span> | </span>
            <span className="publish-date">26-02-19</span> 
            </div>
            <div className="image">                             {/* image for news*/}
            <a href="#">
                image link
            </a>
            </div>
            <div className="news-description">                       {/* news decription */}
            helljfdsjkl;fds fdsklj;fdsajkl;fdasjka;fds
            </div>
            <div className="reference">Reference</div>          
            <div className="url">                                           {/* reference for total news*/}
            <a href="#">
                image url
            </a>
            </div>
        </div>
        </div>
    )
}
