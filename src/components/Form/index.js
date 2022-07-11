import { Link } from "react-router-dom";

export default function Lists(props){

    return (
    <>
      <div className='divide-y-2 divide-main-gray'>
        <div className='m-0'>
          <Header bg_gray={false} logo_src='/logo84-64_v2.png' values={MenuValues}/>
        </div>
      <div className={`m-0 flex h-screen bg-white w-full sm:px-8 md:px-12 lg:px-24`}>
        <form className='px-8'>
          <h1 className={`font-bebasNeue pt-16 pb-10 text-5xl lg:text-6xl`}> Tu perfil </h1>
         
          <div className='m-8 flex items-center justify-center'>
          <button className="text-white font-bold bg-main-blue m-6 rounded-lg h-12 w-48 lg:w-56" onClick={handleSubmit}> Actualizar </button>
          </div>
        </form>
      </div>
    </div>
    </>
    
  );
}