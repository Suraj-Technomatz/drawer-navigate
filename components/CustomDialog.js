import * as React from "react";
import { View } from "react-native";
import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Text,
} from "react-native-paper";

const CustomDialog = ({ visible, toggle, title, handleSubmit }) => {
  console.log("=========== CustomDialog =====", visible);
  return (
    <PaperProvider>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Portal>
          <Dialog visible={true} onDismiss={toggle}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">{title} sdrfsdfsdf</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={toggle}>Cancel</Button>
              <Button onPress={handleSubmit}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

export default CustomDialog;
