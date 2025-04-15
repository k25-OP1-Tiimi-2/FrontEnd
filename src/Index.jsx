import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

function Index() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/rest/message")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Virhe haettaessa dataa:", error));
  }, []);

  return (
    <div>
      
      <p>{message}</p>
      
    </div>
  );
}

export default Index;
