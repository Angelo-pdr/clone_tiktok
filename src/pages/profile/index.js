import { View, StyleSheet, Text } from "react-native";

function Profile(){
    return(
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Profile