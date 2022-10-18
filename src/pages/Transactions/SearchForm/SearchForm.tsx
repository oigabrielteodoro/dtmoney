import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./SearchForm.styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input placeholder="Busque por transações" />
      <button type="submit">
        <MagnifyingGlass />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
