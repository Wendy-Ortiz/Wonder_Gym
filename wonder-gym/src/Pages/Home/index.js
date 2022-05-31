import Header from '../../components/Header' 

export default function Home() {
    return (
      <>
        <div className='m-0'>
          <Header/>
        </div>
        <hr className='bg-main-gold h-1'/>
        <div className={`m-0 flex h-screen bg-main-gray w-full sm:px-8 md:px-12 lg:px-24`}>
        </div>
      </>
      
    );
  }