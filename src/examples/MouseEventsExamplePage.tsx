'use strict';
import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '@react-navigation/native';

export const MouseEventsExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  // Replace with string version of JSX snippet used to render component for example1
  const example1jsx =
    'const [pointerOverElement, setPointerOverElement] = React.useState(false); \nconst onPointerEnter = (event: PointerEvent) => {setPointerOverElement(true);};\nconst onPointerLeave = (event: PointerEvent) => {setPointerOverElement(false);};\n<View style={pointerOverElement? styles.hoverOn: styles.hoverOff} onMouseEnter={onPointerEnter} onMouseLeave={onPointerLeave}/>';
  // Replace with string version of JSX snippet used to render component for example2
  const example2jsx = '<Text>Add Example 2 instance of component here.</Text>';

  const [pointerOverElement, setPointerOverElement] = React.useState(false);

  const onPointerEnter = (event: PointerEvent) => {
    setPointerOverElement(true);
  };

  const onPointerLeave = (event: PointerEvent) => {
    setPointerOverElement(false);
  };

  return (
    <Page
      title="Mouse Events"
      description="Mouse Events avaliable through RNW"
      componentType="Core" // Remove if component is not a core component
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TemplateExamplePage.tsx"
      documentation={[
        {
          label: 'Work in Progress',
          url: 'https://github.com/microsoft/react-native-windows/issues/2099',
        },
      ]}>
      {/*If component is a wrapped XAML control, set wrappedNativeControl to the name of the XAML control and a url to its API documentation. Otherwise, remove this prop specification.*/}
      {/*pageCodeUrl link should be link to source code for the page in react-native-gallery repo*/}
      {/*entries in the documentation prop should be labels and urls that point to the Github repo for the component
        and any other applicable documentation for the component such as information on facebook's react native website.*/}
      <Example title="Mouse Hover" code={example1jsx}>
        <View
          style={pointerOverElement ? styles.hoverOn : styles.hoverOff}
          onMouseEnter={onPointerEnter}
          onMouseLeave={onPointerLeave}
        />
      </Example>
      <Example title="Example 2" code={example2jsx}>
        <Text style={{color: colors.text}}>
          Add Example 2 instance of component here.
        </Text>
      </Example>
    </Page>
  );
};

const styles = StyleSheet.create({
  hoverOff: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
  },
  hoverOn: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
  },
});
