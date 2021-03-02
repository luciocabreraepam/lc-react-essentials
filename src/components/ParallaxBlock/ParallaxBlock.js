import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxBlockBody } from './styles';

const ParallaxBlock = props => (
  <>
    <ParallaxBlockBody
      id={props.idBlock}
      opacityBlock={props.opacityBlock}
      heightBlock={props.heightBlock}
      bgImgBlock={props.bgImgBlock}
      bgRepeatBlock={props.bgRepeatBlock}
      showAnimation={props.showAnimation}
      showAnimationInBack={props.showAnimationInBack}
    >
      {props.children}
    </ParallaxBlockBody>
    {props.footer}
  </>
);

ParallaxBlock.propTypes = {
  /** Block's Id Block.
   * It is the HTML attribute id  that
   * specifies a unique id for Parallax Block element.
   * It can be used for the NavBar to navigate to this Block in the page
   */
  idBlock: PropTypes.string,
  /** Block's Body Opacity.
   * It is the CSS opacity property
   * that sets the opacity level for the Parallax Block body.
   */
  opacityBlock: PropTypes.number,
  /** Block's Body height.
   * It is the CSS min-height property
   * that sets the minimum height of the Parallax Block body.
   */
  heightBlock: PropTypes.string,
  /** Block's Body background image.
   * It is the CSS background-image property
   * that sets one or more background images for the Parallax Block body.
   */
  bgImgBlock: PropTypes.string.isRequired,
  /** Block's Body background image repeat.
   * It is the CSS background-repeat property
   * that sets if/how a background image will be repeated in the Parallax Block body.
   */
  bgRepeatBlock: PropTypes.oneOf([
    'repeat',
    'repeat-x',
    'repeat-y',
    'no-repeat',
    'space',
    'round',
    'initial',
    'inherit'
  ]),
  /** Block's Body children.
   * It is anything that can be rendered as children
   * of the Paralax Block body and is shown inside the Block body.
   */
  children: PropTypes.node.isRequired,
  /** Block's footer
   * It is anything that can be rendered in React
   * and is shown bellow the Block body (outside).
   */
  footer: PropTypes.node,
  /** Block's show animation.
   * Indicates wheter to show or not an animation in the block.
   */
  showAnimation: PropTypes.bool,
  /** Block's show animation in the back.
   * When show animation  is true, it
   * indicates wheter to show or not an animation in the back of
   *  the block.
   */
  showAnimationInBack: PropTypes.bool
};

ParallaxBlock.defaultProps = {
  opacityBlock: 1,
  heightBlock: `100vh`,
  bgRepeatBlock: `no-repeat`,
  showAnimation: false,
  showAnimationInBack: false
};

export default ParallaxBlock;
