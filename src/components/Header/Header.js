// It shows the heading of news-app i.e. "Show Latest News" button 

import {Button} from 'reactstrap';  // button component 
import './Header.css';
export default function Header(props)  /// exporting Header component 
{
    function onClickHandler()
    {
        props.latestNews();
    }
return (
    <div className="button">    {/* bootstrap classes , bootstrap is included in index.js*/}    
    <Button id="refresh-button" className="btn-primary" onClick={onClickHandler}>Show Latest News</Button>
    </div>
)
}


