import styled from "styled-components";

const Btn = styled.button.attrs({ type: "button" })`
  background-color: var(--color-purple-700);
  color: var(--color-white);
  border: none;
  border-radius: var(--border-radius-large);
  font-size: var(--text-medium-font-size);
  font-weight: var(--font-weight-bold);
  padding-inline: var(--spacing-20);
  padding-block: var(--spacing-10);
`;

export default function Button(props) {
  return <Btn>{props.children}</Btn>;
}
