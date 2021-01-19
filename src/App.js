import React from 'react';
import {Header, FilterNews, NewsFeed} from './components'
import './App.css';
import axios from 'axios';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
                language: "",
                country: "",
                startDate: "",
                endDate: "",
                fetchNews : []
        }
        this.loading = true;
        this.urlToken =  "WY4oDcSkQmhB583VJkchnKszhoWUL3bzi9mHRcBkPssA0yGQ";
        this.url = ``
    }

    getLatest = ()=>{
        console.log("in get latest");
        this.url = `https://api.currentsapi.services/v1/latest-news?apiKey=${this.urlToken}`;
        axios.get(this.url).then(response => {
            this.setState(prevState => {
                
                return {
                    language: "",
                    country: "",
                    startDate : "",
                    endDate : "",
                    fetchedNews : response.data.news
                }
            })
        })
    }

    getOptions = (language, country, startDate, endDate) => {
        this.setState({
                language: language,
                country: country,
                startDate: startDate,
                endDate: endDate,
                fetchNews : []
        })
    }

    
    
    getNews = (country , language)=>{
        // https://api.currentsapi.services/v1/latest-news?apiKey=${this.urlToken}`
        this.url = `https://api.currentsapi.services/v1/search?country=${country}&language=${language}&apiKey=${this.urlToken}`;
        console.log(this.url)
        axios.get(this.url).then(response => {
            this.setState(prevState => {
                return {
                    language: prevState.language,
                    country: prevState.country,
                    startDate : prevState.startDate,
                    endDate : prevState.endDate,
                    fetchedNews : response.data.news
                }
            })
        })
    }

    componentDidMount() {
        this.getLatest();
        this.loading = false;
    }
    
    render() {
        // this.getLatest();
        // console.log(this.state)
        // console.log(this.url)
        return (
            <div className="container-fluid app">
                {/*  creating a layout of ui */}
                <div className="row header">
                    <div className="offset-md-2">
                        <Header latestNews={this.getLatest}/> {/* aligning show latest news button*/} </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="filterNews offset-md-2">
                            <FilterNews getOptions={
                                this.getOptions
                            } reRender = {this.getNews}/> {/* aligning filter news and Newsfeed component side by side */} </div>
                        <div className="newsCard ml-sm-5 ">
                            {
                                this.loading ? <div> <img src={require("./components/loading.svg").default} alt=""/>  </div> : <NewsFeed newsData={this.state.fetchedNews ? this.state.fetchedNews : ""}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
