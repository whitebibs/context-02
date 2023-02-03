import React from "react";
import {LanguageContext} from "./LanguageContext"

const languageOptions= {
    en: {
        CURRENT_LANG: "The current language is:"
    },
    it : {
        CURRENT_LANG: "La lingua è: "
    }
}
export class DisplayLanguage extends React.Component{
    render(){
        return(
        <LanguageContext.Consumer>
            
            {(language) => {
                return (
                    <h1>{languageOptions[language].currentLang} {this.props.lang}</h1>
                )
            }}
        </LanguageContext.Consumer>
        )
    }
}