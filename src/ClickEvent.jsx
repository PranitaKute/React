// Click Event - An interaction when a user clicks on a specific element.
// We can respond to clicks by passing a callback to the onClick event handler.

function ClickEvent(){
    // const handleClick = () => {
    //     console.log("OUCH!");
    // };

    let count = 0;
    const handleClick2 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me`);
        }
        // console.log(`${name} stop clicking me`);
    };

    const clickEvent = (e) => e.target.textContent = "OUCH!";


    return(
        <>
            {/* <button onClick={handleClick}>Click Me Once</button>    <br/> */}
            {/* <button onClick={() => handleClick2("Bro")}> Click Me</button> */}
            <button onDoubleClick={(e) => clickEvent(e)}> Click Me</button>

        </>
    )
}
export default ClickEvent