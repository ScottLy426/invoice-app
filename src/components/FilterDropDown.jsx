import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import ArrowDown from "../assets/icon-arrow-down.svg";

const FilterContainer = styled.div`
  position: relative;
`;

const FilterBtn = styled.button`
  background-color: unset;
  border: none;
  display: flex;

  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-10);
  padding: unset;
`;

const Modal = styled.div`
  background-color: green;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 100%);
`;

function DropDownOptions() {
  return <Modal>modal</Modal>;
}

export default function FilterDropDown() {
  const [open, setOpen] = useState(false);
  const [reversed, setReversed] = useState(false);

  const ref = useRef(null);
  const q = gsap.utils.selector(ref);
  const tl = useRef();

  const handleToggle = (e) => {
    if (open) {
      tl.current.reversed(reversed);
    }
    if (!open) {
      tl.current = gsap.timeline().to(q(".arrow"), {
        duration: 0.2,
        ease: "none",
        rotate: 180,
      });
    }
    setOpen(!open);
    setReversed(!reversed);
  };

  return (
    <FilterContainer ref={ref}>
      <FilterBtn
        onClick={(e) => {
          handleToggle(e);
        }}
      >
        Filter <img className="arrow" src={ArrowDown} />
      </FilterBtn>
      {open ? <DropDownOptions /> : null}
    </FilterContainer>
  );
}
