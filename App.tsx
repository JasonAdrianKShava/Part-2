import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuScreen from './screens/AddMenuScreen';
import FilterMenuScreen from './screens/FilterMenuScreen';

export interface MenuItem {
  id: number;
  dishName: string;
  description: string;
  course: string;
  price: number;
  imageUrl: any;
}

const Stack = createNativeStackNavigator();

const App = () => {
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
    },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Home' }}>
          {(props) => <HomeScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
        <Stack.Screen name="AddMenu" options={{ title: 'Add Menu Item' }}>
          {(props) => (
            <AddMenuScreen
              {...props}
              menuItems={menuItems}
              setMenuItems={setMenuItems}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="FilterMenu" options={{ title: 'Filter Menu' }}>
          {(props) => <FilterMenuScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

