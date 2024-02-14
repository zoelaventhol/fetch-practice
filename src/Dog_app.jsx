import { useState } from "react";
import "./Dog_app.css";

function Dog_app() {
  // ************** STATE & VARIABLES: WHAT WE HAVE **********************
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const loadingImg = "https://media1.giphy.com/media/wvtt4mtViPOSrLYNFh/giphy.webp?cid=790b76119z0zofokqi3p7jekw6mjlrxf5b1jtt86601rmbow&ep=v1_gifs_search&rid=giphy.webp&ct=g"
  const api_url = `https://dog.ceo/api/breeds/image/random`;
    
  
  // *********************** FUNCTIONS: WHAT WE DO *********************
  const handleSubmit = (e) => {
    // prevent page reload
    e.preventDefault();
    
    // update dog pic
    getDog();
  };  

  /***** 
  TO DO: complete this fetch using the api_url defined above. 
  You may use try/catch or async/await syntax.
  *****/
  async function getDog() {
  };


  // ************* RETURN: WHAT WE SEE *********************
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
      

    </>
  )
}

export default Dog_app;
