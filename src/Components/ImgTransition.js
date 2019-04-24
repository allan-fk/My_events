import React from 'react';
import styled, { keyframes } from 'styled-components';

const ImgTransition = () => {
  return (
    <Wrap>
      <Img
        class="bottom"
        src="https://cdn.evbstatic.com/s3-build/perm_001/1f381d/django/images/homepage/bg-tablet-snowglobe.jpg"
      />
      <Img
        class="top"
        src="https://cdn.evbstatic.com/s3-build/perm_001/6db089/django/images/homepage/bg-tablet-generationdiy.jpg"
      />
      <Img
        class="top"
        src="https://cdn.evbstatic.com/s3-build/perm_001/eae947/django/images/homepage/bg-tablet-wanderlust.jpg"
      />
    </Wrap>
  );
};

export default ImgTransition;

const Wrap = styled.div`
    position: relative;
    height: 281px;
    width: 100%;
    display: block;
  `,
  xfade = keyframes`
  0% {
    opacity:1;
  }
  17% {
    opacity:1;
  }
  25% {
    opacity:0;
  }
  92% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`,
  Img = styled.img`
    position: absolute;
    width: inherit;
    left: 0;
    &:nth-child(4) {
      animation: ${xfade} 6s;
    }
    &:nth-child(3) {
      animation: ${xfade} 4s;
    }
    &:nth-child(2) {
      animation: ${xfade} 2s;
    }
    &:nth-child(1) {
      animation: ${xfade} 0;
    }
  `;
