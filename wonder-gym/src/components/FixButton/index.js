import { useNavigate  } from 'react-router-dom'   
import { useSelector } from "react-redux";
export default function FixButton() {
    const navigate = useNavigate ();
    const name = useSelector(
        (state) => state.user.name
    );
    return (    
        <div className="relative">
            <button className="fixed bottom-0 right-0 rounded hover:bg-secundary-blue p-4 m-4" onclick={ () => navigate(`mainTrainer/trainerUsers/${name}/assignExercise`)}>
                <img src = "/icons/plus.svg" alt="News Icon"/>
            </button>
        </div>
        )
    }
