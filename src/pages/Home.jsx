import React, { useState } from "react";
import { Header } from "../components/Header";
import { Test } from "../components/Test";
import { Footer } from "../components/Footer";
import { useQuestionData } from "../contexts/QuestionData";

export const Home = () => {
    const { flag, setFlag } = useQuestionData();

    const handleClick = () => {
        setFlag(true);
    }

    return (
        <div style={{ }} className='page-margin'>
            <Header />
            {!flag
                ? <div id="take-test-div">
                    <div class="select">
                        <select id="standard-select" placeholder="Select Stream">
                            <option value="">Select stream</option>
                            <option value="Option 1">COMPUTER SCIENCE AND ENGINEERING</option>
                            <option value="Option 2">ELECTRICAL ENGINEERING</option>
                            <option value="Option 3">ELECTRONICS AND COMMUNICATION ENGINEERING</option>
                            <option value="Option 4">CIVIL ENGINEERING</option>
                            <option value="Option 5">MECHANICAL ENGINEERING</option>
                        </select>
                        <span class="focus"></span>
                    </div>
                    <button className="btn" onClick={handleClick}>Take Test</button>
                </div>
                : <Test />
            }
            <Footer />
        </div>

    );
}