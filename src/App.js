// main or parent component of all 
import React from 'react';
import {Header, FilterNews, NewsFeed} from './components'; 
import './App.css';
import axios from 'axios';

class App extends React.Component {
    // this constructor contains the state variable and non-state variable
    // declared in constructor are same important as they help 
    // maintain state 

    constructor() {
        super();
        this.state = {
            language: "",
            country: "",
            startDate: "",
            endDate: "",
            fetchNews: []
        }
        this.loading = true             // this controls the loading animation
        this.getLatestPressed = false   // show if GetLatestButton pressed
        this.urlToken = "c8yIkB0OIX63tq8LKVpnmul0QhAKsxkwJLzKOYbe5GukV6W9"  // authentication key
        this.url = ``                   // url to fetch data 
    }

    // this function fetchs the latest news 
    getLatest = () => {
        this.getLatestPressed = true;
        this.url = `https://api.currentsapi.services/v1/latest-news?apiKey=${this.urlToken}`;
        axios.get(this.url).then(response => {
            this.setState(prevState => {
                return {
                    language: "",
                    country: "",
                    startDate: "",
                    endDate: "",
                    fetchedNews: response.data.news         // make other state to ""
                }
            })
        })
    }

    //this function removes the individual news card
    removeNewsFeed = (index) => {
        if (this.state.fetchedNews) { 
            this.setState(prevState => {
                prevState.fetchedNews.splice(index, 1);
                var fetchedNewsUpdated = prevState.fetchedNews;  // remove the news card and change the state
                return {
                    language: prevState.language,
                    country: prevState.country,
                    startDate: prevState.startDate,
                    endDate: prevState.endDate,
                    fetchedNews: fetchedNewsUpdated
                }
            })
        }
    }

    //set the selected options from news feed to the App component state 
    getOptions = (language, country, startDate, endDate) => {
        this.setState({
            language: language,
            country: country,
            startDate: startDate,
            endDate: endDate,
            fetchNews: []
        })
    }

    // get the news based on the selected option on the FilterNews Component 
    getNews = (country, language, startDate, endDate) => {
        if (startDate) 
            startDate = startDate + "T00:00:00+00:00";  // change the date to required format 
        
        if (endDate) 
            endDate = endDate +  "T00:00:00+00:00";

        this.getLatestPressed = false;
        this.url = `https://api.currentsapi.services/v1/search?country=${country}&language=${language}&start_date=${startDate}&end_date=${endDate}&apiKey=${this.urlToken}`;
        axios.get(this.url).then(response => {
            this.setState(prevState => {
                return {
                    language: prevState.language,
                    country: prevState.country,
                    startDate: prevState.startDate,
                    endDate: prevState.endDate,
                    fetchedNews: response.data.news
                }
            })
        })
    }
    
    //show the loading animation and latest news on page load 
    componentDidMount() {
        this.getLatest();
        this.loading = false;
    }

    render() {
        return (
        <div className="container-fluid app">    {/*  creating a layout of ui */}
            <div className="row header">
                <div className="offset-md-2">
                    <Header latestNews={this.getLatest} buttonStatus={this.getLatestPressed}/>
                </div>
            </div>
            <div>                           {/* aligning filter news and Newsfeed component side by side */} 
                <div className="row">
                    <div className="filterNews offset-md-2">
                        <FilterNews 
                            setAppState={this.getOptions}
                            reRender={this.getNews}
                            buttonStatus={this.getLatestPressed}/> 
                    </div>
                    <div className="newsCard ml-sm-5 ">
                     {
                        this.loading
                        ?          // if loading is true then render the loading animation

                         <div height="15" width="20" className="mt-4">
                            <img src={require("./components/loading.svg").default}alt=""/>
                        </div>
                        :         // if loading is false render the news cards
                            <NewsFeed 
                            removeNews={this.removeNewsFeed} 
                            newsData={this.state.fetchedNews ? this.state.fetchedNews : ""}/> 
                            // if api return no news , then no data will send to NewsFeed to display 
                     }
                     </div>
                </div>
            </div>
        </div>
        );
    }
        
}

export default App;
