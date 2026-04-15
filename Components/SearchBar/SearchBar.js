import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        placeholder="Search plants..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
`;

const Icon = styled(FaSearch)`
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
`;
