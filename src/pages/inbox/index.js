import { View, StyleSheet, Text } from "react-native";

function Inbox(){
    return(
        <View style={styles.container}>
            <Text>Inbox</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Inbox