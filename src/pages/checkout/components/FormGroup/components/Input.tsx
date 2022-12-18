import {CustomInput, CustomLabel} from "./styles";
import { MdClose } from 'react-icons/md';

interface InputProps {
    isSmall?: boolean;
}

const Input = ({isSmall=false}: InputProps) => {
    return (
        <CustomInput id="yoo" style={isSmall ? {maxWidth: '300px'} : {}}>
            <input
                style={isSmall ? {maxWidth: '300px'} : {}}
                type="text"
                placeholder="."
                id="target"
            />
            <label htmlFor="target">
                label
            </label>
            <MdClose id="icon" height='18px' width='18px'/>
        </CustomInput>

    )
}

export default Input;