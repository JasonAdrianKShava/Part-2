import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MenuItem = {
  id: number;
  dishName: string;
  description: string;
  course: string;
  price: number;
  imageUrl: any;
};

export type RootStackParamList = {
  Home: { menuItems: MenuItem[] };
  AddMenu: { menuItems: MenuItem[] };
  FilterMenu: undefined;
};

export type AddMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'AddMenu'>;

  