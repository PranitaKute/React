/* conditional rendering = allows you to control what gets rendered
        in your application based on certain conditionals
        (show, hide, or change components) */
import PropTypes from 'prop-types'

function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to continue</h2>
    // }
    const welcomeMsg = <h2 className="welcome-msg">
                        Welcome {props.username}
                        </h2>

    const loginPrompt = <h2 className="login-prompt">
                        Please log in to continue
                        </h2>

    return (props.isLoggedIn ? welcomeMsg : loginPrompt);
}

UserGreeting.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting