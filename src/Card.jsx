import profile from './assets/profile.png'

function Card(){
    return(
        <div className="card">
            <img src={profile} alt="profile picture" />
            <h2>Pranita</h2>
            <p>I am a student and I make youtube videos.</p>
        </div>
    );
}
export default Card 