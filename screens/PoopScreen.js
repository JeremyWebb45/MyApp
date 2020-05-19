import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function PoopScreen() {
    return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text>PoopScreen</Text>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    contentContainer: {
      paddingTop: 15,
    }
})