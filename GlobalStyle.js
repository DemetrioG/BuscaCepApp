import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 25 : 0
    },

    view: {
        alignItems: 'center'
    },

    txt: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3e3e3e'
    },

    input: {
        fontSize: 18,
        marginTop: 30,
        width: 280,
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCCC',
        borderRadius: 10
    },

    viewBtn: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    btn: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 50,
        borderRadius: 10
    },

    btnBuscar: {
        backgroundColor: '#E5CA3D'
    },

    btnLimpar: {
        marginLeft: 30,
        backgroundColor: '#FADF8C'
    },

    txtBtn: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3e3e3e'
    },

    viewResult: {
        padding: 20,
        marginTop: 40,
        display: 'flex',
        alignItems: 'center'
    },

    item: {
        fontSize: 18,
        lineHeight: 30,
        textAlign: 'center'
    }
})

export default styles