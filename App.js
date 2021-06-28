import React, { useState } from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, Text, View, TextInput,Button,
} from 'react-native';
const todoItems = [
  {key: Math.random().toString(), data: "Shoes"},
  {key: Math.random().toString(), data: "Handbag"},
]

export default function App() {
  const [getInputText, setInputText] = useState('');
  const [getList, setList] = useState(todoItems);

  const addItem = () => {
    console.log(getInputText);
    setList([
      ...getList,
      { key: Math.random().toString(), data: getInputText },
    ]);
    setInputText('');
  };
  const removeItem = (itemKey) => {
    var list = getList.filter((item) => item.key != itemKey);
    setList(list);
  };

  const scrollView = (
    <ScrollView style={styles.scrollview}>
      {getList.map((item, index) => (
        <TouchableOpacity
          key={item.key}
          activeOpacity={0.7}
          onPress={() => removeItem(item.key)}>
          <View style={styles.scrollItem}>
            <Text style={styles.scrollviewText}>
              {index + 1}. {item.data}
            </Text>
            <View
              style={{
                backgroundColor: '#065861',
                borderRadius: 30,
                padding: 4,
              }}>
              <Text style={styles.removeText}> </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const emptyScrollView = (
    <View>
      <Text style={{ color: 'grey', fontSize: 25 }}>Your cart is Empty now</Text>
    </View>
  );

  return (
    <View style={styles.sectionContainer}>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          width: '95%',
          height: '15%',
          backgroundColor: '#72b3ba',
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontSize: 50,
            color: 'white',
            margin: 15,
            fontFamily: 'sans-serif-medium',
          }}>
          Shopping Cart
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Item to add in cart"
          onChangeText={(text) => setInputText(text)}
          value={getInputText}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={addItem}
          disabled={getInputText.length <= 0}>
          <View
            style={{
              backgroundColor: '#065861',
              padding: 10,
              marginLeft: 3,
              borderRadius: 10,
              paddingHorizontal: 5,
            }}>
            <Text style={{ color: 'white', fontSize: 20 }}>   Add   </Text>
          </View>
        </TouchableOpacity>
      </View>
      {getList.length <= 0 ? emptyScrollView : scrollView}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#72b3ba',
    width: '60%',
    fontSize: 40,
    borderBottomWidth: 2,
  },
  scrollItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#72b3ba',
    width: '70%',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },
  scrollviewText: {
    fontSize: 25,
    color: 'white',
  },
  scrollview: {
    width: '120%',
  },
  removeText: {
    fontSize: 20,
    color: 'white',
  },
});
