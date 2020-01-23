import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function Main({ navigation }) {
    const [note, setNote] = useState({
        title: '',
        detail: '',
    });
    const [title, setTitle] = useState(undefined)
    const [detail, setDetail] = useState(undefined)

    function saveNote() {
        let noteComplete;

        (title === undefined && detail === undefined) ?
            Alert.alert('Erro' ,'Preencha todos os campos')
        :
            noteComplete = {
                title,
                detail,
            };
            
            setNote(noteComplete);

            console.log(note);

            setTitle(undefined);
            setDetail(undefined);
        
    }

    return(
        <KeyboardAwareScrollView
        style={styles.main}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{flex: 1}}
        scrollEnabled={false}>
            <ScrollView style={styles.container}>
                <TextInput 
                    style={styles.titleInput}
                    placeholder="Titulo da nota"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput 
                    multiline
                    style={styles.detailInput}
                    placeholder="Conteúdo da nota"
                    value={detail}
                    autoCapitalize='sentences'
                    onChangeText={setDetail}
                    numberOfLines={10}
                />
                <TouchableOpacity onPress={saveNote} style={styles.btnSave}>
                    <Text style={styles.textBtnSave}>Salvar</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    main: { 
        flex: 1, 
        backgroundColor: '#FFF',
    },
    container: {
        margin: 10,
    }, 
    titleInput: {
        marginBottom: 7,
        padding: 5,
        height: 45,
        borderRadius: 4,
        borderColor: '#DDD',
        borderWidth: 1,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2,
    },
    detailInput: {
        marginBottom: 7,
        padding: 5,
        height: 70,
        borderRadius: 4,
        borderColor: '#DDD',
        borderWidth: 1,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2,
    },
    btnSave: {
        marginTop: 12,
        height: 45,
        backgroundColor: '#A24AC1',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtnSave: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    }, 
});

export default Main;