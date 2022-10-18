import React from "react";
import { SafeAreaView, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles'


export function SearchBar() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Icon style={styles.icon} name="search1" /> */}
            <TextInput
                placeholder="Pesquisar"
                placeholderTextColor="#FFF"
                style={styles.bar}
            />
        </SafeAreaView>
    );
}