import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const BHome = React.forwardRef<
  any,
  SvgIconProps<
    | 'normal'
    | 'fill'
    | 'alt'
    | 'alt2'
    | 'alt2-fill'
    | 'circle'
    | 'circle-fill'
    | 'heart'
    | 'heart-fill'
    | 'smile'
    | 'smile-fill'
  >
>(({mode = 'normal', color = DEFAULT_COLOR, ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'fill' ? (
      <Path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z" />
    ) : mode === 'alt' ? (
      <Path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z" />
    ) : mode === 'alt2' ? (
      <Path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z" />
    ) : mode === 'alt2-fill' ? (
      <Path d="M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z" />
    ) : mode === 'circle' ? (
      <React.Fragment>
        <Path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586 6 6V15l.001 5H6v-9.585l6-6.001z" />
        <Path d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
      </React.Fragment>
    ) : mode === 'circle-fill' ? (
      <Path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669zM12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    ) : mode === 'heart' ? (
      <React.Fragment>
        <Path d="m12.223 11.641-.223.22-.224-.22a2.224 2.224 0 0 0-3.125 0 2.13 2.13 0 0 0 0 3.07L12 18l3.349-3.289a2.13 2.13 0 0 0 0-3.07 2.225 2.225 0 0 0-3.126 0z" />
        <Path d="m21.707 11.293-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707zM18.001 20H6v-9.585l6-6 6 6V15l.001 5z" />
      </React.Fragment>
    ) : mode === 'heart-fill' ? (
      <Path d="M3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .913-.593.998.998 0 0 0-.17-1.076l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14zm5.653-2.359a2.224 2.224 0 0 1 3.125 0l.224.22.223-.22a2.225 2.225 0 0 1 3.126 0 2.13 2.13 0 0 1 0 3.07L12.002 18l-3.349-3.289a2.13 2.13 0 0 1 0-3.07z" />
    ) : mode === 'smile' ? (
      <React.Fragment>
        <Path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586 6 6V15l.001 5H6v-9.586l6-6z" />
        <Path d="M12 18c3.703 0 4.901-3.539 4.95-3.689l-1.9-.621c-.008.023-.781 2.31-3.05 2.31-2.238 0-3.02-2.221-3.051-2.316l-1.899.627C7.099 14.461 8.297 18 12 18z" />
      </React.Fragment>
    ) : mode === 'smile-fill' ? (
      <Path d="M3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .913-.593.998.998 0 0 0-.17-1.076l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14zm5.949-.316C8.98 13.779 9.762 16 12 16c2.269 0 3.042-2.287 3.05-2.311l1.9.621C16.901 14.461 15.703 18 12 18s-4.901-3.539-4.95-3.689l1.899-.627z" />
    ) : mode === 'normal' ? (
      <Path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
    ) : null;
  }, [mode]);

  return (
    <SvgWrap ref={ref} fill={color} {...rest}>
      {PathComponent}
    </SvgWrap>
  );
});

export default BHome;
