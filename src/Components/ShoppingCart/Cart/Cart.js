import { useState } from "react";
import { ContainerCart, CartBox, CloseButton, ProductInfo, Total, Card, CleanButton, ButtonsContainer, CartDetail, OrderButton, CheckIcon, OrderContainer } from "./style";
import check from "../../../assets/output-onlinegiftools.gif"

export function Cart ({carrinho, setCarrinho}) {
    const [expand, setExpand] = useState(false)
    const [checkImg, setCheckImg] = useState(false)
    const updateLocalStorage = (cartData) => {
        const arrayString = JSON.stringify(cartData);
        localStorage.setItem("cart", arrayString);
      };
    let preçoTotal = 0;
    let length = 0;
    
    carrinho.forEach((item) => {
      preçoTotal += item.valor * item.amount;
      length += item.amount;
    });

    const removeItem = (id) => {
        const produto = carrinho && carrinho.find((item) => item.id === id);

        if (produto.amount > 1) {
          const newCart = carrinho.map((item) => {
            if (produto.id === item.id && item.amount >= 1) {
              return { ...item, amount: item.amount - 1 };
            } else {
              return item;
            }
          });
          setCarrinho(newCart);
          updateLocalStorage(newCart);
        } else {
          const novoCarrinho = carrinho.filter((item) => item.id !== id);
          setCarrinho(novoCarrinho);
          updateLocalStorage(novoCarrinho);
        }
      };
      

    const cleanCart = () => {
        setCarrinho([])
        updateLocalStorage([])
        setCheckImg(false)
    }


    return (
        <ContainerCart>
            
            {!expand ? (
                <CartDetail onClick={() => setExpand(true)}>
                    <h1>Carrinho {length}</h1>
                </CartDetail>
            ) : (
            <CartBox>
            <Card>
            {length === 0 ? (
                <p>Vazio </p>
                    ) : (
                    carrinho.map((item) => {
                        let valorInd = item.valor * item.amount
                        return (
                            <ProductInfo key={item.id}>
                            <img src={item.imagem}/>
                            <p>Quantidade: {item.amount}</p> 
                            <p>R${valorInd.toLocaleString()}</p>
                            <button onClick={() => removeItem(item.id)}>Remover</button>  
                            </ProductInfo>
                        )
                    })
                )}
                </Card>
                <Total>Valor total: R${preçoTotal.toLocaleString()}</Total>
            <ButtonsContainer>
                {checkImg && length > 0 ? (
                    <OrderContainer>
                    <h1> Pedido feito! <CheckIcon src={check}/></h1>
                    </OrderContainer>
                ) : (
                    <OrderButton onClick={() => setCheckImg(true)}>Concluir pedido</OrderButton>
                )}
                
                <CleanButton onClick={() => cleanCart()}>Limpar</CleanButton>
                <CloseButton onClick={() => setExpand(false)}>Fechar</CloseButton>
            </ButtonsContainer>
            </CartBox>

            )}
            
        </ContainerCart>

    )
}