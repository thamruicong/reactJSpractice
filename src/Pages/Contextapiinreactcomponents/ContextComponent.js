import { useContext } from "react";
import { ThemeContext, UpdateThemeContext } from "./ThemeContextClass";

function ContextComponent() {
    const darkMode = useContext(ThemeContext)
    const setDarkMode = useContext(UpdateThemeContext)

    const boxStyle = {
        backgroundColor: darkMode ? 'grey' : 'lightgrey',
        color: darkMode ? 'lightgrey' : 'black',
        padding: '20px',
        margin: '20px'
    }

    return (
        <>
            <button onClick={setDarkMode}>Toggle Theme</button>
            <div style={boxStyle}>Button-Enabled Context Component</div>
        </>
    )
}

export default ContextComponent;