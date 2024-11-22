import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { MenuItem } from '../App';

const AddMenuScreen = ({ menuItems, setMenuItems }: any) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  const addMenuItem = () => {
    const newItem: MenuItem = {
      id: Date.now(),
      dishName,
      description,
      course,
      price: parseFloat(price),
      imageUrl: require('../assets/images/food.avif'),
    };
    setMenuItems([...menuItems, newItem]);
    setDishName('');
    setDescription('');
    setPrice('');
  };

  const removeMenuItem = (id: number) => {
    setMenuItems(menuItems.filter((item: MenuItem) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Menu Item</Text>
      <TextInput placeholder="Dish Name" value={dishName} onChangeText={setDishName} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput placeholder="Price" value={price} keyboardType="numeric" onChangeText={setPrice} style={styles.input} />
      <Button title="Add Item" onPress={addMenuItem} />

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.dishName}</Text>
            <Button title="Remove" onPress={() => removeMenuItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, marginBottom: 10 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 },
  menuItem: { padding: 10, borderBottomWidth: 1 },
});

export default AddMenuScreen;
