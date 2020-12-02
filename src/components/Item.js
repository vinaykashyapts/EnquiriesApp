import * as React from 'react'
import { View, Text, Linking } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

let colors = ['#E76F6F', '#6DA2E0', '#3B9E10'];

const Item = ({ doc, index }) => (

    <View style={[{ flex: 1 }, styles.elementsContainer]}>
        <View style={{ flex: 1, alignItems: 'center' }} >
            <Avatar
                rounded
                size="small"
                source={{ uri: "" }}
                title={doc.name.charAt(0)}
                placeholderStyle={{ backgroundColor: colors[index % colors.length], opacity: 1 }}
                titleStyle={{ color: '#fff' }}
            />
        </View>
        <View style={{ flex: 4 }} >
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{doc.name}</Text>
                <Text style={{ fontSize: 12 }}>{doc.categoryName}</Text>
                <Text style={{ fontSize: 12 }}>{doc.location}</Text>
                <Text style={{ fontSize: 12, fontStyle: 'italic' }}>Posted On: {doc.postedOn}</Text>
            </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Icon name="mobile" size={30} color={colors[index % colors.length]} onPress={() => openDialScreen(doc.phoneNumber)}></Icon>
        </View>
    </View>

);

function openDialScreen(phoneNumber) {
    let number = phoneNumber;

    if (Platform.OS === 'ios') {
        number = 'telprompt:'.concat(phoneNumber);
    }
    else {
        number = 'tel:'.concat(phoneNumber);
    }

    const supported = Linking.canOpenURL(number);

    if (supported) {
        Linking.openURL(number);
    } else {
        Alert.alert(`Don't know how to open this URL: ${number}`);
    }

};

export default Item;

const styles = {
    elementsContainer: {
        flexDirection: 'row'
    }
}