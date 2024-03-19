import { useState, useLayoutEffect } from 'react';
import App from './App';
import '../styles/style.css';


const Main = () => {

  const [child, setChild] = useState(<h3>App is loading</h3>)

  useLayoutEffect(() => {
    window.app.initialized().then((client) => {
      window.client = client;
      setChild((<App />))
    })
  }, [])

  return (
    <div>
      {child}
    </div>
  )

}


export default Main;
