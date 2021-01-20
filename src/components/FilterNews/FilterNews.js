import './FilterNews.css';               // stylesheet for FilterNews
import {useState} from 'react';        // useState hook for maintaining state in functional components

                // component for filtering news     
export default function FilterNews(props) {

    var [language, setLanguage] = useState("");                  // state for language selected
    var [country, setCountry] = useState("");                   // state for country selectd
    var [startDate, setStartDate] = useState("");              // state for startDate selected
    var [endDate, setEndDate] = useState("");                 // state for EndDate  selected
    var [overWrite, setOverWrite] = useState(false);         // this is special state for overwrite
                                                            //  all state value if GetLatest button pressed 
    
    function handleChange(e) {
        // this funtion handles the change happening in filter news forms 
        
        var value = e.target.value;
        if (e.target.name === "language") 
            setLanguage(value)
         else if (e.target.name === "country") 
            setCountry(value)
         else if (e.target.name === "startDate") 
            setStartDate(value)
         else if (e.target.name === "endDate") 
            setEndDate(value)
    }

    function handleClick(e) {
        // this function fires if Show News button is pressed

        // check if reset button is pressed
        if(e.target.getAttribute("name") === "reset")  
        {
            setLanguage("")
            setCountry("")
            setStartDate("")
            setEndDate("")
        }
         // check if show latest button is pressed then refresh news feed 
        else              
        {
                setOverWrite(true);                    
                e.preventDefault();   // stop the form submission 
                props.setAppState(language, country, startDate, endDate) // it sets the state of App component
                props.reRender(country, language, startDate, endDate);   // it instruct the App component to 
        }                                                                //render newsfeed according to options selected
    }

    // setting the values of all state variable to "" 'if Get Latest News' button is pressed

    if (props.buttonStatus && overWrite) {   
        setOverWrite(false);                //making overWrite to false to insure 
        setLanguage("")                     //that this it will only run once on one click
        setCountry("")
        setStartDate("")
        setEndDate("")

    }


    return (
    <div className="news-div mt-4 ml-0">            {/* filter news card component*/}
        <div className="card">
            <div className="content">
                <div className="head">              {/* top component showing filter news and reset button*/}
                    <h5>Filter News</h5>
                    <p onClick={handleClick} className="reset" name="reset">Reset</p>
                </div>
                <div className="form">
                    <form>
                        <div className="form-group">
                        {/* select box for set language  */}
                            <label className="col-form-label text-secondary">Language</label>
                            <select value={language}
                                className="form-select form-select-lg text-secondry"
                                onChange={handleChange}
                                name="language">
                                <option select="true" value="">&nbsp; Select</option>
                                <option value="en">English</option>
                                <option value="zh">Chinese</option>
                                <option value="ar">Arabic</option>
                                <option value="nl">Dutch</option>
                                <option value="fi">Finnish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="it">Italian</option>
                                <option value="ja">Japanese</option>
                                <option value="ko">Korean</option>
                                <option value="msa">Malay</option>
                                <option value="pt">Portuguese</option>
                                <option value="ru">Russian</option>
                                <option value="es">Spanish</option>
                                <option value="vi">Vietnamise</option>
                            </select>
                        </div>
                        <div className="form-group mt-0">
                        {/* select box for select country */}
                            <label className="col-form-label text-secondary">Country</label>
                            <select value={country}
                                className="form-select form-select-lg text-secondry"
                                name="country"
                                onChange={handleChange}>
                                <option select="true" value="">&nbsp; Select</option>
                                <option value="ASIA">Asia</option>
                                <option value="EU">Europe</option>
                                <option value="INT">International</option>
                                <option value="US">United State</option>
                                <option value="TW">Taiwan</option>
                                <option value="DE">German</option>
                                <option value="GB">United Kingdom</option>
                                <option value="IN">India</option>
                                <option value="CN">China</option>
                                <option value="ES">Spain</option>
                                <option value="IT">Italy</option>
                                <option value="PL">Poland</option>
                                <option value="AU">Australia</option>
                                <option value="MY">Malaysia</option>
                                <option value="SG">Singapore</option>
                                <option value="CA">Canada</option>
                                <option value="KR">South Korea</option>
                                <option value="DK">Denmark</option>
                                <option value="FR">France</option>
                                <option value="BE">Belgium</option>
                                <option value="JP">Japan</option>
                                <option value="AT">Austria</option>
                                <option value="PT">Portugal</option>
                                <option value="PH">Philippines</option>
                                <option value="HK">Hong Kong</option>
                                <option value="AR">Argentina</option>
                                <option value="VE">Venezuela</option>
                                <option value="BR">Brazil</option>
                                <option value="FI">Finland</option>
                                <option value="ID">Indonedia</option>
                                <option value="VN">Vietnam</option>
                                <option value="MX">Mexico</option>
                                <option value="GR">Greece</option>
                                <option value="NL">Netherlands</option>
                                <option value="NO">Norway</option>
                                <option value="NZ">New Zealand</option>
                                <option value="RU">Russia</option>
                                <option value="SA">Saudi-Arabia</option>
                                <option value="CH">Switzerland</option>
                                <option value="TH">Thailand</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="IE">Ireland</option>
                                <option value="IR">Iran</option>
                                <option value="IQ">Iraq</option>
                                <option value="RO">Romania</option>
                                <option value="AF">Afghanistan</option>
                                <option value="ZW">Zimbabwe</option>
                                <option value="MM">Myanmar</option>
                                <option value="SE">Sweden</option>
                                <option value="PE">Peru</option>
                                <option value="PA">Panama</option>
                                <option value="EG">Egypt</option>
                                <option value="TR">Turkey</option>
                                <option value="IL">Israel</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="BD">Bangladesh</option>
                                <option value="NG">Nigeria</option>
                                <option value="KE">Kenya</option>
                                <option value="CL">Chile</option>
                                <option value="UY">Uruguay</option>
                                <option value="EC">Ecuador</option>
                                <option value="RS">Serbia</option>
                                <option value="HU">Hungary</option>
                                <option value="SI">Slovenia</option>
                                <option value="GH">Gahana</option>
                                <option value="BO">Bolivia</option>
                                <option value="PK">Pakistan</option>
                                <option value="CO">Colombia</option>
                                <option value="NK">North Korea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PS">Palestine</option>
                                <option value="EE">Estonia</option>
                                <option value="LB">Lebanon</option>
                                <option value="QA">Qatar</option>
                                <option value="KW">Kuwait</option>
                                <option value="KH">Cambodia</option>
                                <option value="NP">Nepal</option>
                                <option value="LU">Luxembourg</option>
                                <option value="BA">Bosnia</option>
                                <option value="PY">Paraguay</option>
                            </select>
                        </div>
                        <div className="form-group ">
                        {/* field to select optional startdate field */}
                            <label htmlFor="" className="col-form-label text-secondary" name="startDate">Start Date</label>
                            <input type="date" value={startDate} className="custom-select-sm" name="startDate"
                                onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                        {/* field to select optional endDate field  */}
                            <label htmlFor="" className="col-form-label text-secondary">End Date</label><br/>
                            <input type="date" value={endDate} className="custom-select-sm" name="endDate"
                                onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                        {/* show lastest button  */}
                            <button type="submit" className="btn-submit"
                                onClick={handleClick}>Show News</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}
