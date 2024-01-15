import React, { useState, useEffect, useCallback } from "react";
import { useQuestionData } from "../contexts/QuestionData";
import { Question } from "./Question"
import Timer from "./Timer";
import { useResultData } from "../contexts/Result";
import { Results } from "./Results";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Test = () => {

    const [questionNumber, setQuestionNumber] = useState(0);
    const { questionData, flag2, setFlag2 } = useQuestionData();
    const { results, setResults } = useResultData();
    const timeLimit = 600;
    const [testOver, setTestOver] = useState(false)


    const handleTimeUp = () => {
        console.log("handle timer")
    };

    const handleNext = () => {
        if (questionNumber < 9)
            setQuestionNumber(questionNumber + 1);
    }


    const handlePrev = () => {
        if (questionNumber > 0)
            setQuestionNumber(questionNumber - 1);
    }
    const handleSubmit = useCallback(() => {
        const temp = { correct: 0, incorrect: 0, unanswered: 0, total: 10 };

        for (const question in questionData) {

            if (questionData[question].selected) {
                if (JSON.stringify(questionData[question].selected) === JSON.stringify(questionData[question].correct_answers)) {
                    temp.correct++;
                } else {
                    console.log(questionData[question].selected, questionData[question].correct_answers)
                    temp.incorrect++;
                }
            } else {
                temp.unanswered++;
            }
        }

        console.log(temp);
        setResults(temp);
        setFlag2(false);
        setTestOver(true);
    }, [questionData]);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div id="test">
                {flag2
                    ?
                    <div id="test-div">
                        <div id="status">
                            <p style={{ fontSize: "24px", margin: "10px 10px 15px 0px" }}>{questionNumber + 1}/10</p>
                            <Timer timeLimit={timeLimit} onTimeUp={handleTimeUp} />
                        </div>
                        <Question qno={questionNumber} />
                        <div id="test-nav-div">
                            <button className="button-39" onClick={handlePrev}><ArrowBackIcon /> Prev </button>
                            <button className="button-39" onClick={handleNext}>Next <ArrowForwardIcon /></button>
                            <button className="button-39" onClick={handleSubmit}>Submit</button>

                        </div>

                    </div>

                    : null
                }
                {testOver
                    ? <Results />
                    : null


                }
            </div>
        </div>

    )
}