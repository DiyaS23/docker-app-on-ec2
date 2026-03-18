import './App.css'

function App() {

  return (
    <>
      <h1>Welcome to my React App!</h1>
      <form className='form'>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' name='name' />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
