import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../mainstyle.css';
import './Simpleloginforminreact.css';

function Simpleloginforminreact() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [displayMessage, setDisplayMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleSubmit = () => {
        if (hasNonEmptyFields() && hasPasswordCharacters() && hasSamePassword()) {
            setDisplayMessage("Welcome " + username);
            setIsError(false);
        }
    };

    const hasNonEmptyFields = () => {
        if (username == "" || password == "" || confirmPassword == "") {
            setDisplayMessage("Has empty fields");
            setIsError(true);
            return false;
        }
        return true;
    }

    const hasPasswordCharacters = () => {
        const alphabetRegex = /(?=.*?[a-zA-Z])/;
        const digitsRegex = /(?=.*?[0-9])/;
        const specialCharRegex = /(?=.*?[#?!@$%^&*-])/;
        const minPasswordLength = 8;

        const alphabetCheck = alphabetRegex.test(password);
        const digitsCheck = digitsRegex.test(password);
        const specialCharCheck = specialCharRegex.test(password);
        const passwordLengthCheck = password.length >= minPasswordLength;

        if (passwordLengthCheck && alphabetCheck && digitsCheck && specialCharCheck) {
            return true;
        }

        setDisplayMessage("Invalid password")
        setIsError(true);
        return false;
    }

    const hasSamePassword = () => {
        if (password != confirmPassword) {
            setDisplayMessage("Has different passwords");
            setIsError(true);
            return false;
        }
        return true;
    }

    return (
        <div className='container'>
            <h1>Simple Login Form In React</h1>
            <Link to='/home' className="App-link">Home</Link>
            <br />

            <div className='input-container'>
                <input type={"text"} className='input' placeholder="Username" value={username} onChange={(res) => setUsername(res.target.value)}/>
                <input type={"password"} className='input' placeholder="Password" value={password} onChange={(res) => setPassword(res.target.value)}/>
                <input type={"password"} className='input' placeholder="Confirm your Password" value={confirmPassword} onChange={(res) => setConfirmPassword(res.target.value)}/>
            </div>

            <button onClick={handleSubmit}>Submit</button>

            <div style={{textAlign: 'center'}}>
                <p>Password must have a minimum of 8 characters and contain at least one alphabet character, one numeric character and one special character.</p>
                {isError ? <p style={{color: 'red'}}>{displayMessage}</p>
                         : <p style={{color: 'green'}}>{displayMessage}</p>}
            </div>
        </div>
    );
}

export default Simpleloginforminreact;