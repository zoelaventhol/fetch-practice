import { useState } from "react";
import "./Dog_app.css";
// import Form from "./Form";

function Dog_app() {
  // ************** STATE & VARIABLES: WHAT WE HAVE **********************
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const loadingImg = "https://media1.giphy.com/media/wvtt4mtViPOSrLYNFh/giphy.webp?cid=790b76119z0zofokqi3p7jekw6mjlrxf5b1jtt86601rmbow&ep=v1_gifs_search&rid=giphy.webp&ct=g"
  const api_url = `https://dog.ceo/api/breeds/image/random`;
    
  
  // ***********************FUNCTIONS: WHAT WE DO*********************
  const handleSubmit = (e) => {
    // prevent page reload
    e.preventDefault();
    
    // update dog pic
    getDog();
  };  

  // ***** TO DO: complete this fetch using the api_url defined above) ***** 
  async function getDog() {
    setLoading(true);
    // this is what we want to do
    try {
      // fetch
      const response = await fetch(api_url)
  
      // when we receive fetch response, we need to use .json() - because we need to convert it to JS
      const data = await response.json()
      setDog(data.message);
      // reset error
      setError(null);
    } catch (err) {
      // this is what we do if it doesn't work
      setError(err.stack.slice(0,40));
      setDog(null);
      console.log(err.stack);
    } finally {
      // whatever happened, do this at the end
      setLoading(false);
    } 
  };


  // *************RETURN: WHAT WE SEE*********************
  return (
    <>
      <h1>Fetch a Dog</h1>
      <form onSubmit={handleSubmit}>
        Click the button to see a random dog.
        <br />
        🦴 🐕
        <button type="submit">Fetch me a dog!</button>
      </form>

      
      {/*****  TO DO: if there is an error or a dog, display it *****/}
      { error &&
        <div className = "error">
          {error}
        </div>
      }
      
      { dog &&
        <div className="img-container">
          {/* if loading, show loading img. else show dog */}
          <img src ={loading ? loadingImg : dog}/>
        </div>
      }
      

    </>
  )
}

export default Dog_app;
