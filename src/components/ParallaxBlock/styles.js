import styled from 'styled-components';

export const ParallaxBlockBody = styled.div`
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  opacity: ${({ opacityBlock }) => opacityBlock};
  min-height: ${({ heightBlock }) => heightBlock};
  background-image: ${({ bgImgBlock }) => bgImgBlock};
  background-repeat: ${({ bgRepeatBlock }) => bgRepeatBlock};
  display: grid;
  place-items: center;
  padding: 2vw;
  width: 100vw;
  left: 0;
  margin: 0px;

  ${({ showAnimation, showAnimationInBack }) =>
    showAnimation === true &&
    `  
      :before,
      :after {
        animation: orbit 12s linear infinite;
        border-radius: 50%;
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
        content: '';
        position: absolute;
        opacity:  0.2;
        z-index: ${showAnimationInBack === true ? -1 : 1};
        @media only screen and (max-width: 600px) {
          height: 15vw;
          width: 15vw;
        }
      
        @media only screen and (min-width: 601px) {
          height: 12vw;
          width: 12vw;
        }

        @media only screen and (min-width: 601px) {
          height: 12vw;
          width: 12vw;
        }

        @media only screen and (min-width: 992px) {          
          height: 8vw;
          width: 8vw;
        }
      }
      :before {
        background: #ffe897;
        background: -moz-radial-gradient(top right, #ffe897, #f98a05);
        background: radial-gradient(to bottom left, #ffe897, #f98a05);
        background: -webkit-radial-gradient(top right, #ffe897, #f98a05);
        left: 8rem;
        bottom: 8rem;
      }
      :after {
        animation-delay: 2.5s;
        background: #e0e793;
        background: -moz-radial-gradient(bottom right, #e0e793, #6dd0f1);
        background: radial-gradient(to top left, #e0e793, #6dd0f1);
        background: -webkit-radial-gradient(bottom right, #e0e793, #6dd0f1);
        right: 8rem;
        top: 8rem;
      }
    `}

  @keyframes orbit {
    from {
      transform: rotate(0deg) translateX(100px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(100px) rotate(-360deg);
    }
  }
`;
