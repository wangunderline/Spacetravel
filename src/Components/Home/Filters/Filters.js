import { Input } from "./style";

export function Filters ({minFilter, maxFilter, searchFilter, onChange}) {

    return (
        <>
        <label>
            <Input type="number" name="minFilter" value={minFilter} onChange={onChange} min={0} placeholder="Valor mínimo:"/>
        </label>

        <label>
            <Input type="number" name="maxFilter" value={maxFilter} onChange={onChange} placeholder="Valor máximo:"/>
        </label>
        <label>
            <Input name="searchFilter" value={searchFilter} onChange={onChange} placeholder="Busca por nome:"/>
        </label>
        </>
    )
}