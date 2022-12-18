import {Circle} from "./styles";
import {BsChevronRight} from "react-icons/bs";

interface CircleStageProps {
    id: string;
    currentId: string;
    text: string
    showChevron?: boolean;
}

const CircleStage = ({id, currentId, text, showChevron = true}: CircleStageProps) => {
    return (
        <>
            <Circle isActive={id === currentId}>
                <span id="num">{id}</span>
            </Circle>
            <p>{text}</p>
            {showChevron && <BsChevronRight style={{marginLeft: '30px', marginRight: '21px'}}/>}
        </>
    )
}

export default CircleStage;