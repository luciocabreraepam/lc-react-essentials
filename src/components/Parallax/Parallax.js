import PropTypes from 'prop-types';
import { ParallaxBlock } from '../ParallaxBlock';
import { ParallaxStyled } from './styles';

const Parallax = props => (
  <ParallaxStyled>
    {props.parallaxBlocks.map((block, i) => (
      <ParallaxBlock
        key={`parallax-block--${i}`}
        opacityBlock={block.opacityBlock}
        heightBlock={block.heightBlock}
        bgImgBlock={block.bgImgBlock}
        bgRepeatBlock={block.bgRepeatBlock}
        footer={block.footer}
        children={block.children}
      />
    ))}
  </ParallaxStyled>
);

Parallax.propTypes = {
  /** Array of Parallax Blocks to be displayed */
  parallaxBlocks: PropTypes.arrayOf(ParallaxBlock).isRequired
};

export default Parallax;
