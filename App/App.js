import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Route, NativeRouter, Link } from "react-router-native";
import {Number} from "./pages/Number";
import {Emoji} from "./pages/Emoji";


export default function App() {
  return (
    <ScrollView>
      <NativeRouter>
      <View style={styles.container}>
          <Number />
        <Link to="/emoji">
          <Text>Emoji page</Text>
        </Link>
        <Route path="/emoji" component={Emoji} />
      </View>
    </NativeRouter>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
