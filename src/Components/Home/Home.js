import { useState } from "react";
import { ProductCard } from "./ProductCard/ProductCard";
import { ContentContainer, PresentationContainer, SelectContainter } from "./style";
import { Filters } from "./Filters/Filters";
import bg from "../../assets/space5.png"

export function Home({ produtos, addToCart, searchFilter, minFilter, maxFilter, onChange}) {
  const [ordination, setOrdination] = useState('');
  
  return (
      <ContentContainer>
        
        <PresentationContainer>
        <img src={bg} />
        <h1>Procurando sua nova nave espacial?</h1>
        <h2>Tenha o melhor equipamento em sua jornada ao infinito.</h2>

        </PresentationContainer>
        
        <SelectContainter>
        <label htmlFor='select'>
        <select id='select'name='select' value={ordination} onChange={(e) => setOrdination(e.target.value)}>Ordenação
          <option value='Crescente'>Crescente</option>
          <option value='Decrescente'>Decrescente</option>
        </select>
        </label>

        <Filters 
          searchFilter={searchFilter} 
          minFilter={minFilter} 
          maxFilter={maxFilter}
          onChange={onChange}
        />
        </SelectContainter>
      
        <ProductCard products={produtos} 
          addToCart={addToCart} 
          ordination={ordination}
          searchFilter={searchFilter} 
          minFilter={minFilter} 
          maxFilter={maxFilter} />
      </ContentContainer>
  );
}
