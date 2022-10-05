import React from "react";
import { TextInput, View } from "react-native";
import { styles } from './styles'

export function SearchBar() {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Digite o nome da série"
                placeholderTextColor="#FFF"
                style={styles.bar} />
        </View>
    );
}