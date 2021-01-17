import './FilterNews.css';    
// component for filtering news 
export default function FilterNews(props)
{
    return (
        <div className="news-div mt-5 ml-0">  {/* filter news card*/}
            <div className="card">
            <div className="content">
                <div className="head">
                    <h5>Filter News</h5>
                    <p>Reset</p>
                </div>
            </div>
            </div>
        </div>
    )
}