import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Define the MenuItem interface
interface MenuItem {
  id: number;
  dishName: string;
  description: string;
  course: string;
  price: number;
  imageUrl: any; 
}

const App = () => {
  const [dishName, setDishName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [course, setCourse] = useState<string>('Starters');
  const [price, setPrice] = useState<string>(''); 
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      dishName: 'Grilled Salmon',
      description: 'Succulent salmon with lemon butter sauce',
      course: 'Mains',
      price: 18.99,
      imageUrl: require('./assets/images/grilled_salmon.avif'), 
    },
    {
      id: 2,
      dishName: 'Caesar Salad',
      description: 'Classic Caesar with homemade dressing',
      course: 'Starters',
      price: 9.50,
      imageUrl: require('./assets/images/caesar_salad.avif'), 
    },
    {
      id: 3,
      dishName: 'Tomato Soup',
      description: 'Rich and creamy soup with basil',
      course: 'Starters',
      price: 7.25,
      imageUrl: require('./assets/images/tomato_soup.avif'), 
    },
    {
      id: 4,
      dishName: 'Beef Tacos',
      description: 'Spicy beef with fresh toppings',
      course: 'Mains',
      price: 12.00,
      imageUrl: require('./assets/images/beef_tacos.avif'), 
    },
    {
      id: 5,
      dishName: 'Chocolate Cake',
      description: 'Decadent cake with rich chocolate frosting',
      course: 'Desserts',
      price: 6.75,
      imageUrl: require('./assets/images/chocolate_cake.avif'),
    }
  ]);  

  
  const addMenuItem = () => {
    const newItem: MenuItem = {
      id: Date.now(),  
      dishName,
      description,
      course,
      price: parseFloat(price),  
      imageUrl: require('./assets/images/food.avif'), 
    };

    setMenuItems([...menuItems, newItem]);  
    setDishName('');  
    setDescription('');
    setPrice('');
  };

  const totalMenuItems = menuItems.length;  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chef's Menu Management</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      {/* Course Picker */}
      <Picker
        selectedValue={course}
        onValueChange={(itemValue: string) => setCourse(itemValue)} 
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      {/* Add Menu Item Button */}
      <Button title="Add Menu Item" onPress={addMenuItem} />

      {/* Display Total Menu Items */}
      <Text style={styles.totalText}>Total Menu Items: {totalMenuItems}</Text>

      {/* List of Menu Items */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}  // Use id as the unique key
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Image source={item.imageUrl} style={styles.image} />
            <Text style={styles.itemText}>{item.dishName}</Text>
            <Text style={styles.itemText}>{item.description}</Text>
            <Text style={styles.itemText}>{item.course}</Text>
            <Text style={styles.itemText}>${item.price.toFixed(2)}</Text>  
          </View>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  totalText: {
    marginVertical: 20,
    fontSize: 18,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default App;












