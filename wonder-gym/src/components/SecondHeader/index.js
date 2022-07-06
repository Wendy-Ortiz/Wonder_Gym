import { useNavigate} from "react-router-dom";

export default function SecoundHeader(props){
    let navigate = useNavigate();
    return (
        <>
            {props.options.map((input)=>{  
                return <div className="bg-white h-36">
                    <br></br>
                    <div  className="flex w-full px-8 md:px-12 lg:px-24">
                        <div className="flex items-center w-10/12">
                            <button onClick={() => navigate(-1)}>
                                <svg class="w-10 h-10 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
                            </button>
                            <h1 className="flex items-center font-bold text-3xl md:text-4x1 lg:text-5xl text-main-blue" id="tittle"> {input.tittle} </h1>
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
                                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Buscar</label>
                                        <div className="relative">
                                            <input type="search -webkit-search-decoration" id="default-search" className="p-1.5 z-20 text-sm text-black bg-white rounded-lg border border-main-gray dark:bg-white dark:border-main-gray dark:placeholder-main-gray" placeholder="Buscar" required/>
                                            <button type="submit" className="focus:ring-4 focus:ring-main-blue font-medium rounded-lg text-sm px-2 py-1"> 
                                                <svg class="w-5 h-5 text-gray-500 dark:text-main-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
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
