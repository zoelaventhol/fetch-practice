import { useState } from "react";
import "./Dog_app.css";
// import Form from "./Form";

function Dog_app() {
  // ************** STATE & VARIABLES **********************
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const loadingImg = "https://media1.giphy.com/media/wvtt4mtViPOSrLYNFh/giphy.webp?cid=790b76119z0zofokqi3p7jekw6mjlrxf5b1jtt86601rmbow&ep=v1_gifs_search&rid=giphy.webp&ct=g"
  const api_url = `https://dog.ceo/api/breeds/image/random`;
    
  // ***********************FUNCTIONS*********************
  const handleSubmit = (e) => {
    // prevent page reload
    e.preventDefault();
    // update dog pic
    getDogAsync();
  };  

  // async / await version
  async function getDogAsync() {
    // load
    setLoading(true);
    // setTimeout(async() => {
      try {
        // fetch
        let response = await fetch(api_url);
        // if it didn't work, tell me
        if (!response.ok) {
          throw new Error("Something went wrong")
        } else {
          // otherwise, do something with my data
          let data = await response.json();
          setDog(data.message);
          setError(null);
        }
      } catch (error) {
        console.log("Server error: ", error);
        setError(error.stack.slice(0,26));
        setDog(null);
      } finally {
        // reset loading
        setLoading(false); 
      }
    // }, 1000)
    
  };
  
  // .then / catch version
  const getDogThen = () => {
    // load
    setLoading(true);
  
    fetch(api_url)
    // wait for it to finish
    .then(response => {
      // tell me if something went wrong
      if(!response.ok) throw new Error("Something went wrong")
      // if no errors, we get here
      // return data - json fixes format
      return response.json();
    })
    // if that worked, save my data locally (aka in this file)
    .then(response => {
        // store the data in a state variable
        setDog(response.message);
        // reset errors
        setError(null)
    })
    // we get here if the fetch didn't work
    .catch(error => {
      // store the error info in a state variable
      setError(error.stack.slice(0,26))
      setDog(null)
      console.log("Server error: ", error);
    }) 
    .finally (()=>{
      // reset loading
      setLoading(false); 
    })
  };



  // ************* WHAT WE SEE*********************

  return (
    <>
      <h1>Fetch a Dog</h1>
      <form onSubmit={handleSubmit}>
            Click the button to see a random dog.
            <br />
            🦴 🐕
            <button type="submit">Fetch me a dog!</button>
        </form>

      
      {/* conditional renders: if there is an error or a dog, display it */}
      {error && 
        <div className="error">  
          {error}
        </div>
      }

      {dog && 
        <>
        <div className="img-container">
        {/* show loading image while loading */}
        <img src={loading ? loadingImg : dog} />
        </div>
        </>
      }

    </>
  )
}

export default Dog_app;
