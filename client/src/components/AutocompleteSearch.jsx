import React, { useEffect, useState } from 'react';

const AutocompleteSearch = ({ options, placeholder }) => {
    const [inputVal, setInputVal] = useState('');
    const [suggestions, setSuggestions] = useState([])

    const onChange = (e) => {
        const val = e.target.value
        setInputVal(val)
        setSuggestions(options.filter((option) => option.toLowerCase().startsWith(val.toLowerCase())));
    }
    useEffect(() => {
        if (inputVal.length == 0) {
            console.log('here')
            setSuggestions([])
        }
    },[inputVal])
    console.log(inputVal.length)
    const ready = placeholder.length > 0 && options.length > 0

    return (
        <>
            {ready &&
                <div>
                    <input placeholder={placeholder} type="text" value={inputVal} onChange={onChange} />
                    {suggestions.length > 0 && (
                        <ul>

                            {suggestions.map((suggestion, index) => (
                                <li key={index}>{suggestion}</li>
                            ))}
                        </ul>
                    )}

                </div>
            }
        </>

    )
}

export default AutocompleteSearch;