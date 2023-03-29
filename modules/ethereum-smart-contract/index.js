import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const DefaultScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  scrollView: {
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    flex: 1
  }
});
export default DefaultScreen;