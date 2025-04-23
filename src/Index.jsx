import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

const Index = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:8080/rest/products")
      .then((response) => response.json()) 
      .then((data) => setProducts(data)) 
      .catch((error) => console.error("Virhe haettaessa dataa:", error));
  }, []);

  return (
    <div>
      <h1>Tervetuloa eläinkaupan sivuille!</h1>
      <h2>Tuotteet</h2>
      <table >
        <thead>
          <tr>
            <th>Tuote</th>
            <th>Valmistaja</th>
            <th>Hinta</th>
            <th>Tyyppi</th>
            <th>Väri</th>
            <th>Koko</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.manufacturer.name}</td>
              <td>{product.price} €</td>
              <td>{product.productType.name}</td>
              <td>{product.color}</td>
              <td>{product.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;