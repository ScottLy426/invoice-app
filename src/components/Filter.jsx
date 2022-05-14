import FilterDropDown from "./FilterDropDown";

import styled from "styled-components";

const Section = styled.section`
  display: flex;

  align-items: center;
  width: 100%;

  padding: var(--spacing-10) var(--spacing-10);
  .push-left {
    margin-left: auto;
  }
`;

const InvoiceHeading = ({ children }) => {
  return <div>{children}</div>;
};

export default function Filter() {
  return (
    <Section>
      <InvoiceHeading>
        <h1>Invoice</h1>
        <div>7 invoices</div>
      </InvoiceHeading>
      <div className="push-left"></div>
      <FilterDropDown />
      <div>add new invoice</div>
    </Section>
  );
}
