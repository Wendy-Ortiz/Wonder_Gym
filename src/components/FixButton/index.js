import { useNavigate  } from 'react-router-dom'   
export default function FixButton() {
    const navigate = useNavigate ();
    return (    
        <div className="relative z-40">
            <button onClick={ () => navigate(`assignExercise`)} className="fixed bottom-0 right-0 rounded hover:bg-secundary-blue p-4 m-4">
                <img src = "/icons/plus.svg" alt="News Icon"/>
            </button>
        </div>
        )
    }
