{/* How to style react components with CSS
        Not including external frameworks or preprocessors
        1. External - Normal adding style property in css file
        2. Modules - Create dedicated folder for component
        3. Inline  */}

import styles from './Button.module.css'

function Button(){
    return(
        <button className={styles.button}>Click Me</button>
    );
}

export default Button