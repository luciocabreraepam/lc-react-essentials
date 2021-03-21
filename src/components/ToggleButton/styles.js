import styled from 'styled-components';

export const Wrapper = styled.div`
  touch-action: pan-x;
  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;

  ${({ disabled }) =>
    disabled &&
    `
      cursor: not-allowed;
      opacity: 0.5;
      -webkit-transition: opacity 0.25s;
      transition: opacity 0.25s;
  `}
`;

export const Container = styled.div`
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  transition: all 0.2s ease;
  backdrop-filter: brightness(0.5);
  -webkit-backdrop-filter: brightness(0.5);
  border: 1px solid white;
`;

export const Input = styled.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const Checked = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  opacity: 0;
  transition: opacity 0.25s ease;
  left: 8px;
  ${({ toggle }) =>
    toggle &&
    `
      opacity: 1;
  `}
`;

export const UnChecked = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  opacity: 0;
  transition: opacity 0.25s ease;
  opacity: 1;
  right: 10px;
  ${({ toggle }) =>
    toggle &&
    `
      opacity: 0;
   `}
`;

export const IconWrapper = styled.span`
  align-items: center;
  display: flex;
  height: 10px;
  justify-content: center;
  position: relative;
  width: 10px;
`;

export const Circle = styled.div`
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 6px;
  width: 12px;
  height: 12px;
  border: 1px solid #4d4d4d;
  border-radius: 50%;
  background-color: #fafafa;
  box-sizing: border-box;
  transition: all 0.25s ease;

  ${({ toggle }) =>
    toggle &&
    `
      left: 32px;
    `}
  ${({ toggle }) =>
    !toggle &&
    `
      right: 32px;
    `}
`;
