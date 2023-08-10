import * as React from 'react';
import {
  Gap,
  Input,
  Text,
  Wrapper,
  useTheme,
  Container,
  Button,
} from '@fast-base/native';
import {
  ScrollView,
  StyleSheet,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
} from 'react-native';
import {ICONS} from './Icons';

const IconsList: React.FC = () => {
  const {colors} = useTheme();

  const [icons, setIcons] = React.useState<typeof ICONS>(ICONS);

  const onChange = React.useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const searchText = e.nativeEvent.text.toLowerCase();

      if (searchText.length === 0) {
        setIcons(ICONS);
      } else {
        const filteredData = ICONS.filter(({name}) => {
          return name.includes(searchText);
        });

        setIcons(filteredData);
      }
    },
    [],
  );

  return (
    <Container py={10} px={10}>
      <Text size="2xl" ax="center" weight="bold">
        Fast Base Icons
      </Text>
      <Text color={colors?.secondText} size="sm" ax="center">
        @fast-base/icons
      </Text>
      <Wrapper pb={15}>
        <Input.Underline onChange={onChange} placeholder="Write icon name..." />
      </Wrapper>
      <ScrollView>
        <Wrapper mode="row">
          <Gap space="xl" mode="H">
            {icons.map(({name, modes, Component}, index) => {
              const key = `${name}-${index}`;

              const onPress = () => {
                //To Do: implementing show & copy code of Icon
              };
              return (
                <React.Fragment key={key}>
                  <Gap behavior="style" space="xl" mode="H">
                    {!Array.isArray(modes) ? (
                      <Button
                        key={key}
                        pressable
                        onPress={onPress}
                        style={style.iconButton}>
                        <Component color={colors?.text} />
                      </Button>
                    ) : (
                      modes.map((mode, i) => {
                        return (
                          <Button
                            pressable
                            onPress={onPress}
                            key={`${key}-${i}`}
                            style={style.iconButton}>
                            <Component
                              mode={mode as any}
                              color={colors?.text}
                            />
                          </Button>
                        );
                      })
                    )}
                  </Gap>
                </React.Fragment>
              );
            })}
          </Gap>
        </Wrapper>
      </ScrollView>
    </Container>
  );
};

export default IconsList;

const style = StyleSheet.create({
  iconButton: {
    marginBottom: 25,
  },
});
