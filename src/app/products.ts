export interface Producto {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const productos = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Un teléfono grande con una de las mejores pantallas'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Un gran teléfono con una de las mejores cámaras'
  },
  {
    id: 3,
    name: 'Pixel 4a',
    price: 500,
    description: ''
  },
  {
    id: 4,
    name: 'Pixel 5',
    price: 700,
    description: 'Flafship de Google a un precio asequible'
  },
  {
    id: 5,
    name: 'Pixel 5 XL',
    price: 800,
    description: 'Flafship de Google a un precio asequible' 
  },
  {
    id : 6,
    name: 'Pixel 6',
    price: 900,
    description: 'La mejor expereincia de Android'
  },
  {
    id: 7,
    name: 'Pixel 6 XL',
    price: 1000,
    description: 'La mejor expereincia de Android en un teléfono grande'
  }
  
];


