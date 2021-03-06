import { useNavigate} from "react-router-dom";

export default function SecondHeader(props){
    let navigate = useNavigate();
    return (
        <>
            {props.options.map((input)=>{  
                return <div key={input.id} className="bg-white h-36">
                    <br></br>
                    <div  className="flex w-full px-8 md:px-12 lg:px-24">
                        <div className="flex items-center w-10/12">
                            <button onClick={() => navigate(-1)} className = "pr-5">
                                <img src = "/icons/vector.svg" alt="News Icon"/>
                            </button>
                            <h1 className="flex items-center font-bold text-3xl md:text-4x1 lg:text-5xl text-secundary-blue" id="tittle"> {input.title} </h1>
                        </div>
                        <div className="flex items-center justify-end w-2/12">
                            {input.icon}
                        </div>
                    </div>
                    {(() => {
                        /*If or state?*/
                        if (input.searchFlag) {  
                            return (
                                <>
                                    <br></br>
                                    <form className="flex w-full px-8 md:px-12 lg:px-24 items-center justify-end">     
                                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Buscar</label>
                                        <div className="relative">
                                            <input type="search -webkit-search-decoration" id="default-search" className="p-1.5 z-20 text-sm text-black bg-white rounded-lg border border-main-gray dark:bg-white dark:border-main-gray dark:placeholder-main-gray" placeholder="Buscar" required/>
                                            <button type="submit" className="focus:ring-4 focus:ring-secundary-blue font-medium rounded-lg text-sm px-2 py-1"> 
                                                <svg className="w-5 h-5 text-gray-500 dark:text-secundary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            </button>
                                        </div>      
                                    </form>

                                </>
                            )
                        } else {
                            return (
                                <>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </>
                            )
                        }
                    })()}
                </div>
            })}
        </>
    );
}
