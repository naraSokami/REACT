import React, { FC, useState } from "react";
import StudyCard from "./StudyCard";
import './style.css'

interface StudyCardsProps {
    
}

const CARDS = [
    {
        question: "test 1",
        answer: "testing..."
    },
    {
        question: "test 2",
        answer: "testing..."
    },
    {
        question: "test 3",
        answer: "testing..."
    }
]

const StudyCards: FC<StudyCardsProps> = () => {

    const BiggestZIndexContext = React.createContext(2);
    const [biggestZIndex, setBiggestZIndex] = useState(3);
    
    const upBiggestZIndex = () => {
        setBiggestZIndex(prev => prev + 1)
    }

    return (  
        <div className="study-cards">
            <div className="cards">
                {
                    CARDS.reverse().map((card, i) => <StudyCard key={i} question={card.question} answer={card.answer} isCurrentProp={false} upBiggestZIndex={upBiggestZIndex} biggestZIndex={biggestZIndex} />)
                }
            </div>
            <div className="actual-card">
                <StudyCard question={CARDS[0].question} answer={CARDS[0].answer} isCurrentProp={true} upBiggestZIndex={upBiggestZIndex} biggestZIndex={biggestZIndex} />
            </div>
            <div className="green">

            </div>
            <div className="red">

            </div>
        </div>
    );
}

export default StudyCards;