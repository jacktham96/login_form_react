import { useState } from 'react'
import './index.css'
import clsx from 'clsx';
import { ReactComponent as ErrorIcon } from './images/warning.svg'

function Card({children , className}) {
  return(
    <div className={clsx(
      'rounded-lg p-4 w-full text-center shadow', 
      className
    )}
    >
      {children}
    </div>
  )
}

function Button({className , children}) {
  return(
    <button className={clsx(
      'rounded-lg bg-green p-4 w-full text-center shadow',
      className
    )}>
      {children}
    </button>
  )
}



function TextField({id , label , error}) {

  const [value , setValue] = useState('')

  return (
    <div>
    <div className='relative flex items-center'>
      <label 
        htmlFor={id}
        className={clsx('absolute px-3' , value !=='' && 'opacity-0')}
      >
        {label}
      </label>

      <input 
        type="text" 
        name={id}
        id={id}
        onChange={(event) => setValue(event.target.value)}
        className={clsx(
          'outline-none',
          'border w-full p-3 rounded',
          error ? 'border-red' : 'border-black focus:border-blue',
          )}
          
      />
      {error && (
        <ErrorIcon className='absolute right-0 mr-3 '/>
      )}

    </div>


    {error && (
      <div className='flex justify-end'>
        <span className='text-xs text-red mt-1'>{error}</span>
      </div>
    )}

  </div>
  )
}

function App() {

  const [formstate, setFormstate] = useState([
    {id: 'first-name' , error: false , label:'First Name' , errorMsg:'First Name cannot be empty'},
    {id: 'last-name' , error: false , label:'Last Name' , errorMsg:'Last Name cannot be empty'},
    {id: 'email' , error: false, label:'Email' , errorMsg:'This is not a valid email'},
    {id: 'password' , error: false, label:'Password' , errorMsg:'Password invalid'},
  ])

  function onSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target)
    const data = Object.fromEntries(form.entries())
    

    //這我不懂
    setFormstate((formstate)=>
      formstate.map((state)=>({
        ...state,
        error: !Boolean(data[state.id])
      }))
    )

    for (const [key,value] of form.entries()){
      const isFilled = Boolean(value)
      console.log(key,isFilled);
    }
  }

  return (
    <div className={clsx('h-full text-white px-6 gap-8 flex flex-col ', 
                         'md:flex md:flex-row md:items-center',
                         'mx-auto  max-w-7xl')
                    }>
      

      {/* Article */} 
      <article className={clsx('pt-24  text-center space-y-6 flex-1 ',
                               'md:pt-0 md:text-left ')
                               }>
                                 
        <h1 className='text-3xl font-bold'> 
          Learn to Code by watching others
        </h1>

        <p>
          See how experienced developers solve problems in real-time. 
          Watching scripted tutorials is great, 
          but understanding how developers think is invaluable.
        </p>
      </article>

      <section className='grid gap-6 flex-1'>
        {/* Form Title */} 
        <Card className='bg-blue'>
          <p className='px-8'>
            <b>Try it free 7 days</b> then $20/mo.  thereafter
          </p>
        </Card>
        {/* Form */} 
        
        <Card className='bg-white text-black mb-20'>
          <form className='space-y-4' onSubmit={onSubmit}>
            
            {formstate.map(({id,label, error, errorMsg})=>(
              <TextField 
              id={id}
              label={label}
              error={error && errorMsg}      
              />
            ))}
            
            <Button className='text-white' >
              CLAIM YOUR FREE TRIAL
            </Button>

            <div>
              <p className='text-gray text-xs px-4'>
                By Clicking the button, you are agreeing to our 
                <a href="#" className='text-red font-bold'> Term and Condition</a>
              </p>
            </div>
          </form>
        </Card>

      </section>
    </div>
  )
}

export default App
