import React from 'react';
import type {IconProps} from '../types';

const defaultProps: Pick<IconProps, 'type'> = {
  type: 'solid',
};

const Icon: React.FC<IconProps> = ({}) => {
  return <></>;
};

Icon.defaultProps = defaultProps;

export default React.memo(Icon);
