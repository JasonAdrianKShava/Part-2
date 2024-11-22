import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';
import { MenuItem } from '../App';

const HomeScreen = ({ navigation, menuItems }: any) => {
  // Function to calculate the average price of a course
  const getAveragePrice = (course: string) => {
    const filteredItems = menuItems.filter((item: MenuItem) => item.course === course);
    const totalPrice = filteredItems.reduce((sum: number, item: MenuItem) => sum + item.price, 0);
    return filteredItems.length ? (totalPrice / filteredItems.length).toFixed(2) : '0.00';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chef's Menu</Text>

      {/* Navigate to other screens */}
      <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenu')} />
      <Button
  title="Filter Menu"
  onPress={() => navigation.navigate('FilterMenu', { menuItems })}
/>


      {/* Display the average prices for each course */}
      <Text style={styles.averageText}>Starters Avg: ${getAveragePrice('Starters')}</Text>
      <Text style={styles.averageText}>Mains Avg: ${getAveragePrice('Mains')}</Text>
      <Text style={styles.averageText}>Desserts Avg: ${getAveragePrice('Desserts')}</Text>

      {/* Display all menu items */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
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
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  averageText: { fontSize: 18, marginBottom: 5 },
  menuItem: { marginBottom: 10 },
  itemText: { fontSize: 16 },
  image: { width: 100, height: 100 },
});

export default HomeScreen;
