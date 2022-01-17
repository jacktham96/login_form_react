import { useState } from 'react'
import React from 'react'
import './index.css'
import clsx from 'clsx';


function Card({children, className}) {
  return(
    <div className={clsx('p-4 rounded-lg w-full text-center shadow',className)}>
      {children}
    </div>
  )
}


function Button({children, className}){
  return(
    <button className={clsx('bg-green text-center w-full rounded-lg shadow-solid p-5',className)}>
      {children}
    </button>
  )
}




function TextField({id,label}) {
  
  const [value, setValue] = useState('')

  return(
    <div className='relative flex item-center'>
      
      <label 
        htmlFor={id}
        className={clsx('absolute p-3', value !== "" && 'opacity-0' )}
      >
        {label}
      </label>


      <input 
        type="text" 
        name={id} 
        id={id}
        className='border-2 w-full rounded p-3'
        onChange={(event) => setValue(event.target.value)}
      />
  </div>
  ) 

}

function App() {
  return (
    <div className='text-white px-8'>
      <article className='pt-24 space-y-4 text-center'>
        <h1 className='font-bold text-3xl'>
          Learn to code by watching others
        </h1>

        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </article>

      <section className='py-12 grid gap-6 '>
        {/* Form Title */}
        <Card className='bg-blue'>
          <p className='px-8'>     
            <b>Try it free 7 days </b>     
            then $20/mo. thereafter
          </p>
        </Card>

        {/* Form Menu */}
        <Card className='bg-white text-blue-dark'>
          <form className='space-y-4'>
            <TextField id={'firstName'} label={'First Name'}/>
            <TextField id={'lastName'} label={'Last Name'}/>
            <TextField id={'Email'} label={'Email'}/>
            <TextField id={'Password'} label={'Password'}/>

            {/* Submit Button */}
            <Button className={'text-white'}>
              Claim your free trial
            </Button>

            {/* Term and Condition */}
            <div>
              <p className='text-blue-dark text-sm p-2'>
                By clicking the button you are agreeing to our{" "}
                <a href="#" className='text-red font-bold'>
                   Term and Services
                </a>
              </p>
            </div>

          </form>
        </Card>




      </section>

    </div>
  )

}

export default App
