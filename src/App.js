import React from 'react';
import {Header, FilterNews, NewsFeed} from './components'
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedOption: {
                language: "",
                country: "",
                startDate: "",
                endDate: ""
            }
        }
        this.urlToken =  "iLE8hxgNBYr68Uwtg74wKEMdy7qv0XZ643dwp3uubbrZOxwa";
    }

    getOptions = (language, country, startDate, endDate) => {
        this.setState({
            selectedOption: {
                language: language,
                country: country,
                startDate: startDate,
                endDate: endDate
            }
        })
    }

    componentDidMount() {}

    render() {
        console.log(this.state.selectedOption)
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
                            <NewsFeed/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
