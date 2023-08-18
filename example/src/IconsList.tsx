import * as React from 'react';
import {
  Gap,
  Text,
  Input,
  Button,
  Wrapper,
  useTheme,
  Container,
  useStyle,
} from '@fast-base/native';
import {
  ScrollView,
  StyleSheet,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  Linking,
  Platform,
} from 'react-native';
import {ICONS} from './Icons';
import {useRM} from 'react-native-full-responsive';
import ContentModal, {type IconContentType} from './ContentModal';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const ICON_SIZE = 22.5;
const URL = 'https://mhpdev.com/en';
const REPO_URL = 'https://github.com/Mhp23/fast-base-icons';
const REPO_NATIVE_URL = 'https://github.com/Mhp23/react-native-fast-base';

const IconsList: React.FC = () => {
  const {colors, mode} = useTheme();

  const {rs} = useRM();

  const sectionStyle = useStyle(() => {
    return {
      ...Platform.select({
        web: {
          rowGap: rs(50),
          columnGap: rs(40),
        },
        default: {
          rowGap: rs(30),
          columnGap: rs(20),
        },
      }),
      justifyContent: 'center',
    };
  }, [rs]);

  const [collection, setCollection] = React.useState<typeof ICONS>(ICONS);

  const [content, setContent] = React.useState<IconContentType>();

  const iconsCount = React.useMemo(() => {
    let count = 0;
    ICONS.forEach(({icons}) => {
      icons.forEach(({modes}) => {
        if (modes) {
          count += modes.length;
        } else {
          count += 1;
        }
      });
    });
    return count;
  }, []);

  const onChange = React.useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const searchText = e.nativeEvent.text.toLowerCase();
      if (searchText.length === 0) {
        setCollection(ICONS);
      } else {
        const filteredData = ICONS.map(({pack}, index) => {
          const filteredIcons = (ICONS[index]?.icons as any).filter(
            ({name, alternatives}: any) => {
              let isExist = name.includes(searchText);
              if (!isExist && !!alternatives) {
                for (let i = 0; i < alternatives.length; ++i) {
                  isExist = alternatives[i].includes(searchText);
                  if (isExist) {
                    break;
                  }
                }
              }
              return isExist;
            },
          );
          return {
            pack,
            icons: filteredIcons,
          };
        });
        setCollection(filteredData);
      }
    },
    [],
  );

  const onIconPress = React.useCallback(
    ({IconComponent, ...c}: any) => {
      const Component = (
        <IconComponent color={colors?.text} mode={c.mode} size={25} />
      );
      setContent({IconComponent: Component, ...c});
    },
    [colors?.text],
  );

  const onLinkPress = React.useCallback(async link => {
    try {
      const isOpenable = await Linking.canOpenURL(link);

      if (isOpenable) {
        await Linking.openURL(link);
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);

  return (
    <Container pt={20}>
      <ExpoStatusBar
        backgroundColor={colors?.background}
        style={mode !== 'dark' ? 'dark' : 'light'}
      />
      <ContentModal content={content} setContent={setContent} />
      <Gap behavior="style" space="xs">
        <Text size="2xl" ax="center" weight="bold">
          Fast Base Icons{' '}
          <Text size="sm" color={colors?.secondText}>
            ({iconsCount})
          </Text>
        </Text>
        <Text color={colors?.secondText} size="sm" ax="center">
          @fast-base/icons
        </Text>
        <Wrapper ay="center" mode="row">
          <Button
            size="sm"
            title="Repository"
            mode="transparent"
            onPress={() => onLinkPress(REPO_URL)}
          />
          <Button
            size="sm"
            mode="transparent"
            title="Fast Base UI Kit"
            color={colors?.secondary}
            onPress={() => onLinkPress(REPO_NATIVE_URL)}
          />
        </Wrapper>
      </Gap>
      <Wrapper px={10} mb={20}>
        <Input.Underline
          size="lg"
          onChange={onChange}
          placeholder="Write icon name..."
        />
      </Wrapper>
      <ScrollView>
        {collection.map(({pack, icons}) => {
          return (
            <React.Fragment key={pack}>
              <Wrapper background={colors?.flat} p={15} mb={15}>
                <Text weight="800" size="xl" height={30}>
                  {pack}
                </Text>
              </Wrapper>
              <Wrapper mt={10} mb={20} style={sectionStyle} mode="row">
                {icons.map(({name, modes, Component}, index) => {
                  const key = `${pack}-${name}-${index}`;

                  return !Array.isArray(modes) ? (
                    <Button
                      key={key}
                      opacity
                      pressable
                      onPress={() => {
                        onIconPress({
                          type: pack,
                          IconComponent: Component,
                          displayName: Component.displayName,
                        });
                      }}
                      style={style.iconButton}>
                      <Component size={ICON_SIZE} color={colors?.secondText} />
                    </Button>
                  ) : (
                    modes.map((iconMode, i) => {
                      return (
                        <Button
                          opacity
                          pressable
                          onPress={() =>
                            onIconPress({
                              type: pack,
                              mode: iconMode,
                              IconComponent: Component,
                              displayName: Component.displayName,
                            })
                          }
                          key={`${key}-${i}`}
                          style={style.iconButton}>
                          <Component
                            size={ICON_SIZE}
                            mode={iconMode as any}
                            color={colors?.secondText}
                          />
                        </Button>
                      );
                    })
                  );
                })}
              </Wrapper>
            </React.Fragment>
          );
        })}
      </ScrollView>
      <Wrapper py={15} ax="center" background={colors?.surface}>
        <Text size="sm">
          Made with ❤️ by{' '}
          <Text
            size="sm"
            weight="bold"
            color={colors?.success}
            onPress={() => onLinkPress(URL)}>
            MHPDEV
          </Text>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default IconsList;

const style = StyleSheet.create({
  iconButton: {
    flex: 1,
  },
});
