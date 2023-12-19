import products from "./ProductList/products.json"
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./globalStyles";
import { Header } from "./Components/Header/header";
import { Home } from "./Components/Home/Home";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import { Footer } from "./Components/Footer/footer";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  color: white;
  background-image: url(${`https://img.freepik.com/premium-photo/flying-dust-particles-snow-black-background_488220-33427.jpg`});
`;

function App() {

    const [input, setInput] = useState({
      minFilter: "",
      maxFilter: "",
      searchFilter: ""
    })

    const handleInput = (event) => {
      const { name, value } = event.target;
  
      setInput({
        ...input,
        [name]: value
      });
    };

    const [carrinho, setCarrinho] = useState([])

    useEffect(() => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCarrinho(JSON.parse(storedCart));
      }
    }, []);

    const addToCart = (itemToAdd) => {
      const i = carrinho.findIndex((item) => item.id === itemToAdd.id);
    
      if (i !== -1) {
        setCarrinho((prevCarrinho) => {
          const updatedCarrinho = [...prevCarrinho];
          updatedCarrinho[i] = { ...updatedCarrinho[i], amount: updatedCarrinho[i].amount + 1 };
          const arrayString = JSON.stringify(updatedCarrinho);
          localStorage.setItem("cart", arrayString);
          return updatedCarrinho;
        });
      } else {
        setCarrinho((prevCarrinho) => {
          const newCarrinho = [...prevCarrinho, { ...itemToAdd, amount: 1 }];
          const arrayString = JSON.stringify(newCarrinho);
          localStorage.setItem("cart", arrayString);
          return newCarrinho;
        });
      }
    };

  return (
      <>
      <Header />
      <Main>
      <GlobalStyles />

      <Home
          produtos={products} 
          onChange={handleInput}
          addToCart={addToCart}
          carrinho={carrinho} setCarrinho={setCarrinho}
          searchFilter={input.searchFilter}
          minFilter={input.minFilter} 
          maxFilter={input.maxFilter} 
      />
    <Cart  carrinho={carrinho} setCarrinho={setCarrinho} />
    </Main>
    <Footer />
    </>
  );
}

export default App;
