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
              return (
                <Gap behavior="style" space="xl" mode="H" key={key}>
                  {modes.map((mode, i) => {
                    const onPress = () => {
                      //To Do: implementing show & copy code of Icon
                    };
                    return (
                      <Button key={`${key}-${i}`} onPress={onPress} pressable>
                        <Component mode={mode as any} color={colors?.text} />
                      </Button>
                    );
                  })}
                </Gap>
              );
            })}
          </Gap>
        </Wrapper>
      </ScrollView>
    </Container>
  );
};

export default IconsList;
