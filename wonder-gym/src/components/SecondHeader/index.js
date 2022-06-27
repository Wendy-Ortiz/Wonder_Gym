
export default function SecoundHeader(props){
    return (
        <>
            {props.options.map((input)=>{  
                return <div className="bg-white w-full sm:px-8 md:px-12 lg:px-24">
                    <br></br>
                    <div  className="pl-8 flex items-center w-10/12">
                        <button>
                            <svg class="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
                        </button>
                        <h1 className="flex items-center font-bold text-3xl text-main-blue" id="tittle"> {input.tittle} </h1>
                        <div className="pl-36">{input.icon}</div>
                    </div>
                    <h2 className= "flex items-center w-10/12 pl-8 font-bold text-main-blue" id="trainerSubTittle">{input.subTittle}</h2>
                    <br></br>
                    <form className="pl-16">   
                        <div>
                            <label for="default-search" class="text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                            <div className="relative">
                                <input type="text" id="default-search" className="p-1 pl-2 w-64 text-sm text-white bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-main-gray dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required/>
                                <button type="submit">
                                    <svg className="pl-2 w-8 h-8 text-gray-500 dark:text-main-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                            </div>   
                        </div>
                    </form>
                    <br></br>
                </div>
            })}
        </>
    );
}
/* */