import styled, { css } from "styled-components";

export default function Filter({ selectedFilter, setSelectedFilter }) {
  const options = ["Full Sun", "Partial Shade", "Full Shade"];

  function handleSelect(option) {
    setSelectedFilter(option);
  }

  function clearFilter() {
    setSelectedFilter(null);
  }

  return (
    <div>
      <FilterTitle>Filter by Light Needs</FilterTitle>

      {options.map((option) => (
        <StyledFilterButtons
          key={option}
          onClick={() => handleSelect(option)}
          $selectedFilter={selectedFilter}
          $option={option}
        >
          {option}
        </StyledFilterButtons>
      ))}

      <ClearFilterButton onClick={clearFilter}>Clear Filter</ClearFilterButton>
    </div>
  );
}

const FilterTitle = styled.h2`
  color: var(--text-color);
`;

const ClearFilterButton = styled.button`
  background-color: #f44336;
  color: white;
  margin: 4px;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 2px 2px 2px var(--box-shadow);

  .dark-mode & {
    box-shadow: 2px 2px 2px var(--box-shadow);
  }
`;

const StyledFilterButtons = styled.button`
  margin: 4px;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #eee;
  color: black;
  box-shadow: 2px 2px 2px var(--box-shadow);

  .dark-mode & {
    box-shadow: 2px 2px 2px var(--box-shadow);
  }

  ${({ $selectedFilter, $option }) =>
    $selectedFilter === $option &&
    css`
      background-color: #4caf50;
      color: var(--text-color):
      `}
`;
