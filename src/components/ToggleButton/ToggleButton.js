import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Checked,
  Circle,
  Container,
  IconWrapper,
  UnChecked,
  Wrapper,
  Input,
} from './styles';

const CheckedIcon = () => <>🌜</>;
const UncheckedIcon = () => <>🌞</>;

const ToggleButton = (props) => {
  const [toggle, setToggle] = useState(false);
  const { defaultChecked, onChange, disabled } = props;

  useEffect(() => {
    if (defaultChecked) setToggle(defaultChecked);
  }, [defaultChecked]);

  const triggerToggle = () => {
    if (disabled) return;

    setToggle(!toggle);

    if (typeof onChange === 'function') onChange(!toggle);
  };

  const getIcon = (type) => {
    const { icons } = props;
    if (!icons) return null;

    return icons[type] === undefined
      ? ToggleButton.defaultProps.icons[type]
      : icons[type];
  };

  return (
    <Wrapper
      onClick={triggerToggle}
      toggle={toggle}
      className={props.className}
    >
      <Container>
        <Checked toggle={toggle}>
          <IconWrapper>{getIcon('checked')}</IconWrapper>
        </Checked>
        <UnChecked toggle={toggle}>
          <IconWrapper>{getIcon('unchecked')}</IconWrapper>
        </UnChecked>
      </Container>
      <Circle toggle={toggle}></Circle>
      <Input type='checkbox' aria-label='Toggle Button' />
    </Wrapper>
  );
};

ToggleButton.defaultProps = {
  icons: {
    checked: <CheckedIcon />,
    unchecked: <UncheckedIcon />,
  },
};

ToggleButton.propTypes = {
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  icons: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      checked: PropTypes.node,
      unchecked: PropTypes.node,
    }),
  ]),
};

export default ToggleButton;
