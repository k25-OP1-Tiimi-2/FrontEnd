import { useEffect, useState } from "react";
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/rest/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Virhe haettaessa dataa:", error));
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Tervetuloa eläinkaupan sivuille!
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Tuotteet
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tuote</TableCell>
            <TableCell>Valmistaja</TableCell>
            <TableCell>Hinta</TableCell>
            <TableCell>Tyyppi</TableCell>
            <TableCell>Väri</TableCell>
            <TableCell>Koko</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.manufacturer.name}</TableCell>
              <TableCell>{product.price} €</TableCell>
              <TableCell>{product.productType.name}</TableCell>
              <TableCell>{product.color}</TableCell>
              <TableCell>{product.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Index;
