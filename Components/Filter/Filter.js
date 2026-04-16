import styled from "styled-components";
import FilterModal from "@/Components/Filter/FilterModal";
import { useState } from "react";
import FilterForm from "@/Components/Filter/FilterForm";

export default function Filter({ selectedFilter, setSelectedFilter }) {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const options = ["Full Sun", "Partial Shade", "Full Shade"];

  function handleSelect(option) {
    setSelectedFilter(option);
  }

  function clearFilter() {
    setSelectedFilter(null);
  }

  return (
    <>
      <Button onClick={() => setShowFilterModal(true)} />;
      {showFilterModal && (
        <FilterModal onClose={() => setShowFilterModal(false)}>
          <FilterForm onCancel={() => setShowFilterModal(false)} />
        </FilterModal>
      )}
    </>
  );
}

/*   return (
    <div>
      <h3>Filter by Light Needs</h3>

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

      {selectedFilter && <p>Active Filter: {selectedFilter}</p>}
    </div>
  );
  */

const Button = styled.button`
  flex: 1;
  height: 30px;
`;
