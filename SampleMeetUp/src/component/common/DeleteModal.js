import React from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";

const DeleteModal = ({ visible, onClose, onDeletePress, onCancelPress }) => (
    <Modal
        isVisible={visible}
        style={{ flex: 1, justifyContent: 'center' }}
    >
        <View style={styles.containerStyle}>
            <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", backgroundColor: '#5F9EA0', height: 50 }} >
                    <MaterialIcons name="delete" size={30} color='red' />
                    <Text style={styles.headerText}>Delete Event</Text>
                </View>
                <Text style={[styles.headerText, { color: 'black', paddingTop: 30 }]}>Are you sure you want to delete this event</Text>
            </ScrollView>
            <View style={styles.viewStyle} >
                <TouchableOpacity style={{ backgroundColor: '#5F9EA0', flex: 1, marginRight: 10 }} onPress={onDeletePress}>
                    <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold', alignSelf: 'center', color: 'white'  }}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'grey', flex: 1, marginLeft: 10 }} onPress={onCancelPress}>
                    <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold', alignSelf: 'center', color: 'white'  }}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
);

const styles = {
    containerStyle: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        minHeight: 300
    },
    gridContainer: {
        borderRadius: 25,
        alignSelf: 'center',
        backgroundColor: '#4155C5',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        marginVertical: 20
    },
    crossContainer: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 10,
        paddingTop: 10
    },
    headerText: {
        alignSelf: 'center', paddingLeft: 10, fontSize: 20, fontFamily: 'ptSans', fontWeight: 'bold', color: 'white', textAlign: 'center'
    },
    viewStyle: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        flexDirection: 'row',    
        borderTopWidth: 1,
        borderColor: '#C9C9C9',
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 0,
        padding: 20
    }
};

export default DeleteModal;
