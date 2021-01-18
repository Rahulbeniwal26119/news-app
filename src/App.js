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
        this.urlToken =  "iLE8hxgNBYr68Uwtg74wKEMdy7qv0XZ643dwp3uubbrZOxwa";
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

    componentDidMount() {
        console.log("loading")
        axios.get(`https://api.currentsapi.services/v1/latest-news?apiKey=${this.urlToken}`).then(response => {
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

    render() {
        console.log(this.state)
        return (
            <div className="container-fluid app">
                {/*  creating a layout of ui */}
                <div className="row header">
                    <div className="offset-md-2">
                        <Header/> {/* aligning show latest news button*/} </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="filterNews offset-md-2">
                            <FilterNews getOptions={
                                this.getOptions
                            }/> {/* aligning filter news and Newsfeed component side by side */} </div>
                        <div className="newsCard ml-sm-5 ">
                            <NewsFeed newsData={this.state.fetchedNews ? this.state.fetchedNews : ""}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
