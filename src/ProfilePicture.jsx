// Click Event - An interaction when a user clicks on a specific element.
// We can respond to clicks by passing a callback to the onClick event handler.

function ProfilePicture(){
    const imgUrl = '.src/assets/profile.png';

    const handleclick = (e) => e.target.style.Display = "none";

    return(
        <>
            <img onClick={(e) => handleclick(e)} src={imgUrl}></img>
        </>
    )
}

export default ProfilePicture