import React from 'react';
import Modal from 'react-native-modal';
import {useRM} from 'react-native-full-responsive';
import {Clipboard, LogBox, StyleSheet} from 'react-native';
import type {IconType, SvgIconProps} from '@fast-base/icons';
import {
  Gap,
  Text,
  Button,
  Wrapper,
  useTheme,
  useStyle,
} from '@fast-base/native';

LogBox.ignoreLogs([
  "Clipboard has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-clipboard/clipboard' instead of 'react-native'. See https://github.com/react-native-clipboard/clipboard",
]);

export type CodeSectionType = {
  code: string;
  label: string;
};

export type IconContentType = Omit<SvgIconProps, 'style' | 'color'> & {
  IconComponent: React.ComponentType;
  displayName: React.ComponentType;
  type: IconType;
};

const CodeSection: React.FC<CodeSectionType> = ({label, code}) => {
  const {colors} = useTheme();

  const {rs} = useRM();

  const [isCopied, setCopied] = React.useState<boolean>(false);

  const codeStyle = useStyle(() => {
    return {
      borderWidth: 1,
      overflow: 'hidden',
      borderRadius: rs(5),
      paddingVertical: rs(10),
      paddingHorizontal: rs(7.5),
      backgroundColor: colors?.surface,
      borderColor: isCopied ? colors?.success : colors?.border,
    };
  }, [rs, isCopied, colors?.success, colors?.border, colors?.surface]);

  const onCopyPress = React.useCallback(() => {
    Clipboard.setString(code);
    setCopied(true);
  }, [code]);

  return (
    <Gap space="lg">
      <Text>
        {label}{' '}
        <Button
          opacity
          size="xs"
          title="copy"
          mode="transparent"
          onPress={onCopyPress}
          color={isCopied ? colors?.success : colors?.secondText}
        />
      </Text>
      <Text size="sm" style={codeStyle}>
        {code}
      </Text>
    </Gap>
  );
};

const ContentModal: React.FC<{
  content?: IconContentType;
  setContent: (c?: IconContentType | undefined) => void;
}> = ({content, setContent}) => {
  const {displayName, mode, IconComponent, type} = content || {};

  const {colors} = useTheme();

  const {rs} = useRM();

  const usagCode = React.useMemo(() => {
    const iconMode =
      mode?.length && String(mode) !== 'normal' ? `mode="${mode}"` : '';
    return `<${displayName} ${iconMode}size={24} />`;
  }, [displayName, mode]);

  const importCodes = React.useMemo(() => {
    const iType = type?.toLowerCase();
    return {
      first: `import {${displayName}} from '@fast-base/icons'`,
      second: `import {${displayName}} from '@fast-base/icons/Icons/${iType}'`,
      third: `import ${displayName} from '@fast-base/icons/Icons/${iType}/${displayName}'`,
    };
  }, [displayName, type]);

  const onClose = React.useCallback(() => {
    setContent(undefined);
  }, [setContent]);

  return (
    <Modal
      style={style.modal}
      onDismiss={onClose}
      isVisible={!!content}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <Wrapper
        flex
        px={10}
        ax="center"
        ay="center"
        background={colors?.flat}
        style={{borderRadius: rs(8)}}>
        <Gap space={20}>
          {IconComponent}
          <CodeSection label="1. Import the icon" code={importCodes.first} />
          <CodeSection label="2. Usage" code={usagCode} />
          <Button
            opacity
            pressable
            size="sm"
            mode="outline"
            onPress={onClose}
            color={colors?.text}>
            Close
          </Button>
        </Gap>
      </Wrapper>
    </Modal>
  );
};

export default ContentModal;

const style = StyleSheet.create({
  modal: {
    margin: 0,
  },
});
