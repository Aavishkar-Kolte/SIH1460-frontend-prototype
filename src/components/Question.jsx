import React, { useState, useEffect, useRef } from "react";
import { useQuestionData } from "../contexts/QuestionData";

export const Question = (props) => {
    const { questionData, setQuestionData } = useQuestionData();
    const selected = useRef({
        answer_a_correct: "false",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
    })


    const handleRadioChange = (event) => {
        const selectedOption = event.target.value;

        const updatedSelected = {
            ...selected.current,
            [selectedOption]: "true"
        };

        // Uncheck other options
        for (const option in updatedSelected) {
            if (option !== selectedOption) {
                updatedSelected[option] = "false";
            }
        }

        // Update the selected answer options in the state
        const temp = { ...questionData };
        temp[props.qno]["selected"] = updatedSelected;
        setQuestionData(temp);
        console.log(questionData)
    };



    return (
        <div className="question-div">
            <h3 className="question-text">  {questionData[props.qno].question}</h3>
            <div className="options">
                {Object.keys(questionData[props.qno].answers).map((option) => (
                    questionData[props.qno].answers[option] !== null && (
                        <div className="option" key={option}>
                            <input
                                type="radio"
                                name="radioGroup"
                                value={option + "_correct"}
                                checked={questionData[props.qno].selected && questionData[props.qno].selected[option + "_correct"] === "true"}
                                onChange={handleRadioChange}
                                className="radio"
                            />
                            <label htmlFor="radioGroup">
                                {questionData[props.qno].answers[option]}
                            </label>
                        </div>
                    )
                ))}
            </div>

        </div>
    );
}


