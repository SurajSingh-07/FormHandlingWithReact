# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




  --- (useREF METHOD) ---
  <!-- const name = useRef(null);
  const email = useRef(null);

  const handleSubmit = (elem) => {
    elem.preventDefault();
    console.log("name= ",name.current.value);
    console.log("email= ",email.current.value);
  }


  return (
    <>
      <form className='p-10' action="" onSubmit={handleSubmit}>
        <input ref={name} className='border-2 border-black m-2 px-1 rounded' type="text" placeholder='email' />
        <input ref={email} className='border-2 border-black m-2 px-1 rounded' type="text" placeholder='name' />
        <input className='border-2 border-black m-2 px-2 rounded bg-slate-600 text-white font-semibold' type="submit" />
      </form>
    </>
  ) -->





--- (useSTATE METHOD - controlled components) ---
<!-- function App() {

  const [count, setCount] = useState({name: "", email: ""})

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(count);
  }


  return (
    <>
      <form className='p-10' action="" onSubmit={handleSubmit}>
        <input onChange={(e) => setCount({...count, name: e.target.value}) } className='border-2 border-black m-2 px-1 rounded' type="text" placeholder='name' />
        <input onChange={(e) => setCount({...count, email: e.target.value}) } className='border-2 border-black m-2 px-1 rounded' type="text" placeholder='email' />
        <input className='border-2 border-black m-2 px-2 rounded bg-slate-600 text-white font-semibold' type="submit" />
      </form>
    </>
  ) -->


--- (react hook form METHOD) ---
<!-- import { useState } from 'react'
import { useForm } from 'react-hook-form'


function App() {
  const {register, handleSubmit} = useForm();

  return (
    <>
      <form className='p-10' action="" onSubmit={handleSubmit(data => console.log(data))}>
        <input {...register('name')} className='border-2 border-black m-2 px-1 rounded' type="text" placeholder='name' />
        <input {...register('email')} className='border-2 border-black m-2 px-1 rounded' type="text" placeholder='email' />
        <input className='border-2 border-black m-2 px-2 rounded bg-slate-600 text-white font-semibold' type="submit" />
      </form>
    </>
  )
}

export default App -->
