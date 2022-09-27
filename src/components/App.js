// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [randomImg, setRandomImg] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res => res.json))
            .then((data) => {
                setIsLoaded(true)
                //setRandomImg(data);
            })
    
    },[])

    if (!isLoaded) return <p>Loading...</p>    
    return <div><img src = "https://images.dog.ceo/breeds/bulldog-english/mami.jpg" alt="A Random Dog"/></div>
    
}

export default App;