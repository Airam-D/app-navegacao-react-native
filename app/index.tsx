import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Home() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao React Native!</Text>
            <Text style={styles.subtitle}>Esta é a tela inicial do nosso app</Text>
            <Image style={styles.image}
            source={require('../assets/images/foto-gato.png')} />
            <TouchableOpacity style={styles.button}
                onPress={() => router.push('/detalhes')}>
                <Text style={styles.buttonText}>Ir para detalhes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginTop: 16 }]}
                onPress={() => router.push('/sobre')}>
                <Text style={styles.buttonText}>Ir para sobre</Text>
            </TouchableOpacity>
        </View>
    );
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
});