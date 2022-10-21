import { useContext } from "react";
import { ThemeContext, UpdateThemeContext } from "./ThemeContextClass"

function AnotherContextComponent() {
    const darkMode = useContext(ThemeContext)
    const setDarkMode = useContext(UpdateThemeContext)

    const boxStyle = {
        backgroundColor: darkMode ? 'grey' : 'lightgrey',
        color: darkMode ? 'lightgrey' : 'black',
        padding: '20px',
        margin: '20px',
        borderRadius: '50px',
        fontWeight: 'bold',
        fontSize: 30
    }

    return (
        <>
            <input type='text' onKeyDown={setDarkMode} placeholder="Type here!" />
            <div style={boxStyle}>Keyboard-Enabled Context Component</div>
        </>
    )
}

export default AnotherContextComponent;