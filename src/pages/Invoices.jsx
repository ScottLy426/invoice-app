import { Link } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
const Section = styled.section`
  z-index: 10;
`;

export default function Invoices() {
  return (
    <Section>
      <Navbar />
      <Filter />
      <section>table</section>
    </Section>
  );
}
