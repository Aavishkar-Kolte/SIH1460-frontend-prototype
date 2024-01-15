import React, { useContext, useEffect, useState } from "react";

const QuestionDataContext = React.createContext(null);

export const useQuestionData = () => { return useContext(QuestionDataContext) }

export const QuestionDataProvider = (props) => {
    const [questionData, setQuestionData] = useState({ temp1: {}, temp2: {} });
    const [flag, setFlag] = useState(false);
    const [flag2, setFlag2] = useState(false);

    useEffect(() => {
        if (flag) {
            const apiKey = 'dSE85pDYma39dk8vWwrlOU3mfHej1cQcF9KSaiEv';

            const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=code&difficulty=Medium&limit=10`;

            fetch(apiUrl)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Failed to fetch data');
                    }
                })
                .then(data => {
                    setQuestionData(data)
                    for (let i = 0; i < questionData.length; i++) {
                        questionData[i].selected = {};
                    }
                    console.log(questionData);
                    setFlag2(true);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }, [flag])

    return (
        <QuestionDataContext.Provider value={{ questionData, setQuestionData, flag, setFlag, flag2, setFlag2 }}>
            {props.children}
        </QuestionDataContext.Provider>
    )
}