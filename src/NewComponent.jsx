import React, {useState, useEffect, useRef} from 'react';

function NewComponent(){
    
    // let [number, setNumber] = useState(0);

    const inputRef = useRef(null);
    // console.log(ref);

    const inputRef2 = useRef(null);

    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
        // console.log(inputRef);
    });

    function handleClick(){
        // ref.current++;
        // console.log(ref.current);
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "skyblue";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "skyblue";
        inputRef.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "skyblue";
        inputRef.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }

    return (
        <>
            <button onClick={handleClick}>Click Me 1</button>
            <input ref={inputRef} />

            <button onClick={handleClick2}>Click Me 2</button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>Click Me 3</button>
            <input ref={inputRef3} />
        </>
    )
}
export default NewComponent