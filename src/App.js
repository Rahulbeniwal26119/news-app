import {Header, FilterNews, NewsFeed} from './components'
import './App.css';

function App() {
    return (
        <div className="container-fluid app">   {/*  creating a layout of ui */}
            <div className="row header">
                <div className="offset-md-2">
                    <Header/>                      {/* aligning show latest news button*/}
                </div>
            </div>
            <div className="">
              <div className="row">
              <div className="filterNews offset-md-2">
                    <FilterNews/>                         {/* aligning filter news and Newsfeed component side by side*/}
                </div>
                <div className="newsCard ml-sm-5 ">
                    <NewsFeed/>
                </div>
              </div>
            </div>
        </div>
    );
}

export default App;
