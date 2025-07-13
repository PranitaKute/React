/* React hook - Special function that allows functional components 
        to use React features without writing class components (React v16.8) 
        (useState, useEffect, useContext, useReducer, useCallback, and more..)
        
        useState() - A React hook that allows the creation of a stateful variable 
        AND a setter function to update its value in the Virtual DOM.
        [name, setName]   setName = setter function
*/

/* onChange - event handler used primarily with form elements 
    ex. <input>, <textarea>, <select>, <radio> 
    Triggers a function every time the value of the input changes
*/

import React, {useState} from "react";

function MyComponent(){
    // useState
    // const [name, setName] = useState("Guest");
    // const [age, setAge] = useState(0);
    // const [isEmployed, setIsEmployed] = useState(true);

    // const updateName = () => {
    //     // name = "Petter";
    //     // console.log(name);
    //     setName("Petter");
    // }

    // const IncrementAge = () => {
    //     setAge(age + 1);
    // }

    // const toggleEmployedStatus = () => {
    //     setIsEmployed(!isEmployed);
    // }

    // return (
    // <div>
    //     <p>Name: {name}</p>
    //     <button onClick={updateName}>Set Name</button>

    //     <p>Age: {age}</p>
    //     <button onClick={IncrementAge}>Increment Age</button>

    //     <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
    //     <button onClick={toggleEmployedStatus}>Is Employed</button>
    // </div>);



    // onChange
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment,setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(<div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name : {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity : {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} 
            placeholder="Enter delivery instructions"/>
            <p>Comment : {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment : {payment}</p>

            <label>
                <input type="radio" value="Pick Up" 
                checked={shipping === "Pick Up"} 
                onChange={handleShippingChange}/>
                Pick Up
            </label>    <br/>
            <label>
                <input type="radio" value="Delivery" 
                checked={shipping === "Delivery"} 
                onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping : {shipping}</p>
        </div>
    )
}

export default MyComponent