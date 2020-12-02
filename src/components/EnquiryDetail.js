import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import Item from './Item';

function EnquiryDetail({ route }) {

    const { itemId } = route.params;
    const item = useSelector((state) => state.enquiriesReducer.data.dataList.find(x => x.enqId === itemId));

    return (
        <View style={{ marginTop: 20 }}>
            <Item doc={item} index={1} />
        </View>
    );
}

export default EnquiryDetail;