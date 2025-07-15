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



    /* update OBJECTS in state */
    const [car, setCar] = useState( {year: 2025, 
                                    make: "Ford", 
                                    model: "Mustang"});
    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }



    // update ARRAYS in state
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => [...f, newFood]);
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i != index ));
    }


    // update ARRAY of OBJECTS in state 
    // Car.jsx


    return(<>
        <div>
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



        {/* update OBJECTS in state */}
        <div>
            <p>Your favorite car is : {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>  <br/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>



        {/* update ARRAYS in state  */}
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} 
                    onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>

    </>
    )
}

export default MyComponent