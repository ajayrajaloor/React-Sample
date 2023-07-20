import './App.css'
import Header from './components/Header'

function App() {
  const data = 'Project'
  return (
    <div>
      <Header data= {data} />

      <Hello />
      <Hello />
      <Hello />
      <p>This is Sample  {data} </p>
    </div>
  );
}

export default App;



function Hello() {
  return (<h1 className='hello' style={{ color: 'blue' }}>HELLO WORLD !!!</h1>)
}