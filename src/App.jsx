import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import ButtonInline from "./Button.inline";
import Student from "./Students";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ClickEvent from "./ClickEvent";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./myComponent";
import Counter from "./Counter";
import ColorPicker from "./ColorPicker";
import Car from "./Car";
import ToDoList from "./ToDoList";
import UseEffect from "./UseEffect";
import DigitalClock from "./DigitalClock";
import ComponentA from "./ComponentA";
import NewComponent from "./NewComponent";
import StopWatch from "./StopWatch";

function App() {
  // Rendering List - List.jsx
  const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "pineapple", calories: 37}, 
                    {id: 5, name: "guava", calories: 90}];

  const vegetables = [{id: 6, name: "Potato", calories: 110}, 
                    {id: 7, name: "Brinjal", calories: 50}, 
                    {id: 8, name: "Spinach", calories: 37}, 
                    {id: 9, name: "Tomato", calories: 40}, 
                    {id: 10, name: "Broccoli", calories: 50}];

    return(
      <>
        <Header/>
        <Food/>
        {/* <Food/> */}
        <Card/><br/>
        <Button/><br/>
        <ButtonInline/><br/><br/>
        {/* Props - Read-only properties that are shared between components.
        A parent component can send data to a child component.
        <Component key=value /> */}
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student name="Squidward" age={50} isStudent={false}/>
        <Student name="Sandy" age={27} isStudent={true}/>
        <Student/>
        <br/>
        {/* conditional rendering = allows you to control what gets rendered
        in your application based on certain conditionals
        (show, hide, or change components) */}
        <UserGreeting isLoggedIn={true} username="Spongebob"/>
        <br/>
        
        {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
        {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/> }

        {/* Click Event */}
        <ClickEvent/> <br/>
        <ProfilePicture/>

        
        {/* React hook - Special function that allows functional components 
        to use React features without writing class components (React v16.8) 
        (useState, useEffect, useContext, useReducer, useCallback, and more..)
        
        useState() - A React hook that allows the creation of a stateful variable 
        AND a setter function to update its value in the Virtual DOM.
        [name, setName]   setName = setter function
        */}
        <MyComponent/>
        <Counter/>
        

        {/* onChange - event handler used primarily with form elements 
        ex. <input>, <textarea>, <select>, <radio> 
        Triggers a function every time the value of the input changes*/}
        {/* MyComponent */}


        {/* Color Picker */}
        <ColorPicker/>


        {/* Updater function -  A function passed as an argument to setState() 
        usually.
        ex. - setYear(updater function)
        Allow for safe updates based on the previous state 
        Used with multiple state updates and asynchronous functions 
        Good practice to use updater functions*/}
        {/* Counter.jsx */}

        

        {/* update OBJECTS in state - MyComponent.jsx*/}
        {/* update ARRAYS in state  - MyComponent.jsx*/}
        {/* update ARRAY of OBJECTS in state - Car.jsx */}
        <Car/>


          {/* To Do List */}
          <ToDoList/>


          {/* useEffect */}
          <UseEffect/>
          <DigitalClock/>

          {/* useContext() - React Hook that allows you to share values 
          between multiple levels of components without passing props 
          through each level
          Provider Component
          1. import {createContext} from 'react';
          2. export const MyContext = createContext();
          3. <MyContext.Provider value={value}>
              <child/>
            </MyContext.Provider>

          Consumer Components
          1. import React, { useContext } from 'react';
              import { MyContext } from './ComponentA';
          2. const value = useContext(MyContext);
          */}
          <ComponentA/>


          {/* useRef()
          useState() - Re-renders the component when the state value changes 
          useRef() - "use Reference" Does not cause re-renders when its value 
          changes.
          When you want a component to "remember" some information, but you 
          don't want that information to trigger new renders.

          1. Accessing/Interacting with DOM elements
          2. Handling Focus, Animations, and Transactions
          3. Managing Timers and Intervals.
          */}
          <NewComponent/><br/><br/>
          <StopWatch/>


        <Footer/>
      </>
      // Empty angular brackets because App 
      // can return only single element, so enclose
      // all in one <> </> empty brackets 
      
    );
}

export default App