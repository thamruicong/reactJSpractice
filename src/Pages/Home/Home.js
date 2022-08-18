import './Home.css';
import { Link } from "react-router-dom";
import exercises from "../../data.json";

function Home() {
    return (
        <div className="Home">
            <div className="Home-header">
                <p>Self-initiated practice for ReactJS started by Rui Cong</p>
                <a 
                  href="https://contactmentor.com/react-js-practice-exercises-solution/" 
                  target="_blank" 
                  rel="noopener noreferrer">
                    10 React JS Practice Exercises with solution
                </a>
            </div>

            <div className="Home-body">
                <ol>
                    {exercises.map((exercise, key) => {
                        return (<li key={key}>
                            <Link to={exercise.url}>{exercise.title}</Link>
                            <br />
                            {exercise.completed 
                            ? <p style={{color: "green"}}>Completed: {exercise.completed}</p>
                            : <p style={{color: "red"}}>Completed: Not Done</p>
                            }
                        </li>)
                    })}
                </ol>
            </div>
        </div>
    );
}

export default Home;