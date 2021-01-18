// It shows the heading of new-app i.e. Create Latest News button 

import {Button} from 'reactstrap';  // button component 
import './Header.css';
export default function Header(props)  /// exporting Header component 
{
return (
    <div className="button">    {/* bootstrap classes , bootstrap is included in index.js*/}    
    <Button id="refresh-button" className="btn-primary">Show Latest News</Button>
    </div>
)
}


