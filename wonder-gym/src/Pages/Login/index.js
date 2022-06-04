import Header from '../../components/Header'
//import Button from '../../components/Button'

export default function Login() {

  const MenuValues = [
    {
      id: 5,
      tag: 'Menu Principal',
      route: '/'
    },
    {
      id: 6,
      tag: 'Registrarme',
      route: '/register'
    },
  ]

    return (
      <>
        <div className='m-0'>
          <Header bg_gray={false} logo_src='/logo84-64_v2.png' values={MenuValues}/>
        </div>
      </>
    )
  }