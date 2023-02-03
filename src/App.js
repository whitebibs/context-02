import React from "react"
import { LanguageContext } from "./LanguageContext"
import { DisplayLanguage } from "./DisplayLanguage"
export class App extends React.Component{
  state = {
    language: "en"
  }
  handleLangChange= (event) => {
    this.setState({
      language: event.target.value
    })
  }
render(){
  return(
    <div> 
      <select value={this.state.language} onChange={this.handleLangChange}>
      <option value= "en">ENGLISH</option>
      <option value="it">ITALIANO</option>
      </select>

      <LanguageContext.Provider value={this.state.language}>
        <DisplayLanguage lang= {this.state.language}/>
      </LanguageContext.Provider>
    </div>
  )
}
}
