import * as React from 'react';
import { Button, View, Text } from 'react-native';
import {StyledText, StyledView, StyledButton} from './styles';

export default function HomeScreen({ navigation }) {
    return (
      <StyledView>
        <StyledText>Home Screen</StyledText>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </StyledView>
    );
  }