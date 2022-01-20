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

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData) //method transforms a list of key-value pairs into an object.
    
    for(let [key , value] of formData.entries()) {
      const isFilled = Boolean(value);
      console.log([key , isFilled]);
    }

  }

  const [formState , setFormState] = useState ([
    {id : 'firstName' ,
     label: 'First Name' , 
     errorMsg:'First Name cannot be empty' , 
     error : 'false'
    } ,

    {id : 'lastName' , 
    label: 'Last Name' , 
    errorMsg:'Last Name cannot be empty' , 
    error : 'false'
    } ,

    {id : 'Email' , 
    label: 'Email' , 
    errorMsg:'This is not an email' ,
    error : 'false'
    } ,

    {id : 'Password' , 
    label: 'Password' , 
    errorMsg:'Password cannot be empty' ,
    error : 'false'
    } ,
  ])




  return (
    <div className={clsx('h-full text-white px-8 space-y-16 gap-16' , 
                        'md:flex md:items-center md: justify-center mx-auto max-w-7xl ')}>

      <article className={clsx('pt-24 space-y-4 text-center flex-1 ', 
                               'md:text-left md:pt-0')}>

        <h1 className='font-bold text-3xl md:text-5xl'>
          Learn to code by watching others
        </h1>

        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </article>

      <section className='grid gap-6 sm:flex-1'>
        {/* Form Title */}
        <Card className='bg-blue'>
          <p className='px-8'>     
            <b>Try it free 7 days </b>     
            then $20/mo. thereafter
          </p>
        </Card>

        {/* Form Menu */}
        <Card className='bg-white text-blue-dark'>
          <form className='space-y-4' onSubmit={onSubmit}>

            {formState.map(({id , label , errorMsg , error})=>(
              <TextField 
                key={id} 
                id={id} 
                label={label}
                errorMsg={error && errorMsg} // 假設發生 error 時把 errorMsg 顯示出來
              />
            ))}


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
