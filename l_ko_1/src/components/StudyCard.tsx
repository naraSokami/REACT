import { DragEvent, FC, MouseEvent, useState } from "react";

interface StudyCardProps {
    question: string
    answer: string
    isCurrentProp: boolean
    upBiggestZIndex: Function
    biggestZIndex: number
}

const StudyCard: FC<StudyCardProps> = ({ question, answer, isCurrentProp, upBiggestZIndex, biggestZIndex }) => {

    const [isRecto, setIsRecto] = useState(true);
    const [isCurrent, setIsCurrent] = useState(isCurrentProp);
    const [startCoord, setStartCoord] = useState({ x: 0, y: 0 });
    const [coordDelta, setCoordDelta] = useState({ x: 0, y: 0 });
    const [zIndex, setZIndex] = useState(2);


    const onClick = () => {
        if (isCurrent)
            setIsRecto(prev => !prev)
        
    }

    const onMouseDown = (e : MouseEvent) => {
        console.log(e);
        
    }

    const onMouseUp = (e : MouseEvent) => {
        console.log(e);
        
    }

    const onDragOver = (e : DragEvent) => {
        setCoordDelta({
                x: e.screenX - startCoord.x,
                y: e.screenY - startCoord.y
            })
    }

    const onDragStart = (e : DragEvent) => {
        upBiggestZIndex()
        setZIndex(biggestZIndex)
        
        setStartCoord({
            x: e.screenX - coordDelta.x,
            y: e.screenY - coordDelta.y
        })

        console.log(zIndex, biggestZIndex);
    }

    const onDragEnd = (e : DragEvent) => {
        console.log("testing");
        
    }

    return (
        <div style={{ transform: `translate(${coordDelta.x}px, ${coordDelta.y}px)`, zIndex: zIndex }} draggable={true} onDragStart={onDragStart} onDragOver={onDragOver} onDragEnd={onDragEnd} className={ "card " + (isRecto ? "recto" : "verso") } onClick={onClick} >
            <p>{ isRecto ? question : answer }</p>
            <p>{coordDelta.x} --- {coordDelta.y}</p>
        </div>
    );
}

export default StudyCard;