import React from 'react';
import Modal from 'react-native-modal';
import type {SvgIconProps} from '@fast-base/icons';
import {useRM} from 'react-native-full-responsive';
import {
  Button,
  Gap,
  Text,
  Wrapper,
  useStyle,
  useTheme,
} from '@fast-base/native';
import {Clipboard} from 'react-native';

export type IconContentType = Omit<SvgIconProps, 'style' | 'color'> & {
  displayName: React.ComponentType;
};

const ModalContent: React.FC<{
  content?: IconContentType;
  setContent: (c?: IconContentType | undefined) => void;
}> = ({content, setContent}) => {
  const {colors} = useTheme();

  const {rs} = useRM();

  const [isCopied, setCopied] = React.useState<boolean>(false);

  const modalStyle = useStyle(() => {
    return {
      borderRadius: rs(8),
      backgroundColor: colors?.flat,
    };
  }, [rs, colors?.flat]);

  const codeStyle = useStyle(() => {
    return {
      borderRadius: rs(5),
      paddingVertical: rs(10),
      paddingHorizontal: rs(7.5),
      backgroundColor: colors?.surface,
    };
  }, [rs, colors?.surface]);

  const iconText = React.useMemo(() => {
    return `<${content?.displayName} ${
      content?.mode?.length ? `mode="${content.mode}" ` : ''
    }/>`;
  }, [content]);

  const onClose = React.useCallback(() => {
    setContent(undefined);
    setCopied(false);
  }, [setContent]);

  const onCopyPress = React.useCallback(() => {
    Clipboard.setString(iconText);
    setCopied(true);
  }, [iconText]);

  return (
    <Modal
      onDismiss={onClose}
      isVisible={!!content}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <Wrapper style={modalStyle} ax="center" ay="center" flex>
        <Gap behavior="style" space="xl">
          {!isCopied ? null : <Text color="green-500">Copied!</Text>}
          <Text style={codeStyle}>{iconText}</Text>
          <Button title="Copy" onPress={onCopyPress} />
        </Gap>
      </Wrapper>
    </Modal>
  );
};

export default ModalContent;
