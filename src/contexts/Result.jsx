import React, { useState, useContext } from "react";

const ResultContext = React.createContext(null);

export const useResultData = () => { return useContext(ResultContext) }


export const ResultProvider = (props) => {
    const [results, setResults] = useState({ correct: 0, incorrect: 0, unanswered: 0, total: 10 })
    return (
        <ResultContext.Provider value={{ results, setResults }}>
            {props.children}
        </ResultContext.Provider>
    );
}