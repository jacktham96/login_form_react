import { useState } from 'react'
import './index.css'
import clsx from 'clsx';

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



function TextField({id , label}) {

  const [value , setValue] = useState('')

  return (
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
        className='border w-full p-3 rounded' 
      />
    </div>
  )
}

function App() {

  return (
    <div className='text-white px-4 space-y-16'>
      
      {/* Article */} 
      <article className='pt-24 text-center space-y-6'>
        <h1 className='text-3xl font-bold'> 
          Learn to Code by watching others
        </h1>

        <p>
          See how experienced developers solve problems in real-time. 
          Watching scripted tutorials is great, 
          but understanding how developers think is invaluable.
        </p>
      </article>

      <section className='pt-6 grid gap-6'>
        {/* Form Title */} 
        <Card className='bg-blue'>
          <p className='px-8'>
            <b>Try it free 7 days</b> then $20/mo.  thereafter
          </p>
        </Card>
        {/* Form */} 
        
        <Card className='bg-white text-black mb-20'>
          <form className='space-y-4'>
            <TextField id='first-name' label='First Name' />
            <TextField id='last-name' label='Last Name' />
            <TextField id='email' label='Email' />
            <TextField id='password' label='Password' />

            <Button className='text-white'>
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
