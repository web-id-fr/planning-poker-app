import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Route, NativeRouter, Link } from "react-router-native";
import {Number} from "./pages/Number";
import {Emoji} from "./pages/Emoji";


export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
          <Number />
        <Link to="/emoji">
          <Text>Emoji page</Text>
        </Link>
        <Route exact path="/" component={Number} />
        <Route path="/emoji" component={Emoji} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
