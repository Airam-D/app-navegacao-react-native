import { useRouter } from "expo-router";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export default function Detalhes() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Tela de Detalhes
            </Text>
            <Image style={styles.image} 
            source={require('../assets/images/foto-joao.png')} />

            <Text style={styles.discription}>
                Aqui você pode adicionar mais informações    
            </Text> 

            <TouchableOpacity style={styles.button} onPress={ () => router.back()}>
                <Text style={styles.buttonText}>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f4ff22',
    },
    title: {
        fontSize: 28,
        fontWeight: 700,
        color: '#333',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 500,
        color: '#555',
        marginBottom: 28,
    },
    button: {
        backgroundColor: '#EC7000',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
    discription: {
        fontSize: 14,
        color: '#333',
        textAlign:  'center',
        marginBottom: 28,
    }
});