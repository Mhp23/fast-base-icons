import * as React from 'react';
import {
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
  Platform,
} from 'react-native';
import {ICONS} from './Icons';
import {useRM} from 'react-native-full-responsive';

const ICON_SIZE = 22.5;

const IconsList: React.FC = () => {
  const {colors} = useTheme();

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
            ({name}: any) => {
              return name.includes(searchText);
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

  return (
    <Container py={10}>
      <Text size="2xl" ax="center" weight="bold">
        Fast Base Icons{' '}
        <Text size="sm" color={colors?.secondText}>
          ({iconsCount})
        </Text>
      </Text>
      <Text color={colors?.secondText} size="sm" ax="center">
        @fast-base/icons
      </Text>
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
                  const onPress = () => {
                    //To Do: implementing show & copy code of Icon
                  };
                  return !Array.isArray(modes) ? (
                    <Button
                      key={key}
                      opacity
                      pressable
                      onPress={onPress}
                      style={style.iconButton}>
                      <Component size={ICON_SIZE} color={colors?.secondText} />
                    </Button>
                  ) : (
                    modes.map((mode, i) => {
                      return (
                        <Button
                          opacity
                          pressable
                          onPress={onPress}
                          key={`${key}-${i}`}
                          style={style.iconButton}>
                          <Component
                            size={ICON_SIZE}
                            mode={mode as any}
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
    </Container>
  );
};

export default IconsList;

const style = StyleSheet.create({
  iconButton: {
    flex: 1,
  },
});
