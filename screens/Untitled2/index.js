import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable><View style={styles.htTRECYz}></View></Pressable><FlatList style={styles.VzBLpVya} renderItem={({
        item
      }) => <View style={styles.qgIMvwjp}></View>} ItemSeparatorComponent={() => <View style={styles.aZQIuLXn} />} data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  htTRECYz: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  VzBLpVya: {
    position: "absolute",
    width: 100,
    height: 150
  },
  qgIMvwjp: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  aZQIuLXn: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled2;