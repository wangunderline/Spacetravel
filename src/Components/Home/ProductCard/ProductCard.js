import { Button, Card, Container, Down, TitleContainer, Up } from "./style";

export function ProductCard ({products, addToCart, ordination, searchFilter, minFilter, maxFilter}) {

    return (
        <Container>
        {products
        .filter((item) => {
          return item.nome.toLowerCase().includes(searchFilter.toLowerCase())
        })
        .filter((item) => {
          if (minFilter > 0 & maxFilter > 0) {
            return item.valor >= minFilter && item.valor <= maxFilter
          } else if (minFilter > 0) {
            return item.valor >= minFilter
          } else if (maxFilter > 0) {
            return item.valor <= maxFilter
          } else {
            return item
          }
        })
        .sort((a, b) => {
          if (ordination === 'Crescente') {
            return a.valor > b.valor ? 1 : -1;
          } else if (ordination === "Decrescente") {
            return a.valor > b.valor ? -1 : 1
          }
        })
        .map((item) => {
          return (
            <Card key={item.id}>
            <Up>
            <img src={item.imagem} />
            </Up>
            <Down>
            <TitleContainer>
            <h1>{item.nome}</h1>
            </TitleContainer>
            <p>R${item.valor.toLocaleString()}</p>
            <Button onClick={() => addToCart(item)}>Adicionar ao Carrinho</Button>
            </Down>
            </Card>
          );
        })}
        </Container>
    )
}