import React from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
  postion: fixed;
  z-index: 1000;
  bottom: 40px;
`;

const StyledThumb = styled.div`
  margin-top: -5px;
  height: 35px;
  line-height: 35px;
  width: 35px;
  text-align: center;
  font-size: 20px;
  font-width: 700;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
`;

export const Thumb = (props, state) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${props =>
    props.index === 2 ? "#f00" : props.index === 1 ? "#0f0" : "#f00"};
  border-radius: 999px;
`;

export const Track = (props, state) => <StyledTrack {...props} index={state.index} />;
