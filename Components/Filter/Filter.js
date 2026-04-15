import styled from "styled-components";

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
        <button
          key={option}
          onClick={() => handleSelect(option)}
          style={{
            backgroundColor: selectedFilter === option ? "#4caf50" : "#eee",
            color: selectedFilter === option ? "white" : "black",
            margin: "4px",
            padding: "6px 10px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {option}
        </button>
      ))}

      <button
        onClick={clearFilter}
        style={{
          backgroundColor: "#f44336",
          color: "white",
          margin: "4px",
          padding: "6px 10px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Clear Filter
      </button>
    </div>
  );
}

const FilterTitle = styled.h3`
  color: var(--filter-title);
`;
