import { FormEvent, useState } from "react";

function TextInput() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: FormEvent) => {
        const currentValue = event.currentTarget.nodeValue;
        setInputValue(currentValue ? currentValue : '');
    }

    return (
        <input type="text" value={inputValue} onChange={handleChange}/>
    );
}

export default TextInput;