import React, { useState } from 'react';
import { View, Button, FlatList, StyleSheet, Text, Image } from 'react-native';

const FilterMenuScreen = ({ route }: any) => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const { menuItems = [] } = route.params || {};

  // Filter items based on selected course
  const filteredItems = selectedCourse
    ? menuItems.filter((item: any) => item.course === selectedCourse)
    : menuItems; // Show all courses if no filter is applied

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter Menu by Course</Text>

      {/* Buttons for filtering */}
      <View style={styles.filterButtons}>
        <Button title="Show All" onPress={() => setSelectedCourse(null)} />
        <Button title="Starters" onPress={() => setSelectedCourse('Starters')} />
        <Button title="Mains" onPress={() => setSelectedCourse('Mains')} />
        <Button title="Desserts" onPress={() => setSelectedCourse('Desserts')} />
      </View>

      {/* Filtered Menu List */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Image source={item.imageUrl} style={styles.image} />
            <Text style={styles.itemText}>Dish: {item.dishName}</Text>
            <Text style={styles.itemText}>Description: {item.description}</Text>
            <Text style={styles.itemText}>Course: {item.course}</Text>
            <Text style={styles.itemText}>Price: ${item.price.toFixed(2)}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noItemsText}>
            No items found for the selected category.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  filterButtons: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  menuItem: { marginBottom: 20, padding: 10, backgroundColor: '#fff', borderRadius: 8 },
  itemText: { fontSize: 16, marginBottom: 5 },
  image: { width: 100, height: 100, marginBottom: 10, borderRadius: 8 },
  noItemsText: { fontSize: 16, textAlign: 'center', marginTop: 20, color: '#888' },
});

export default FilterMenuScreen;
