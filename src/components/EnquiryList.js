import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import apiCall from '../store/actions/EnquiriesActionCreator';
import Item from './Item';
import { Card } from 'react-native-elements';

function EnquiryList({ navigation }) {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.enquiriesReducer.data);
  const loading = useSelector((state) => state.enquiriesReducer.loading);

  useEffect(() => {
    dispatch(apiCall('http://www.mocky.io/v2/5c41920e0f0000543fe7b889'));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
          <FlatList
            data={data.dataList}
            renderItem={({ item, index }) =>
              <TouchableOpacity onPress={() => navigation.push('EnquiryDetail', { itemId: item.enqId })}>
                <Card >
                  <Item doc={item} index={index} />
                </Card>
              </TouchableOpacity>}

            keyExtractor={(item, index) => index.toString()}
          />
        )}
    </View>
  );
}

export default EnquiryList;