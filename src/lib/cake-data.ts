import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string): ImagePlaceholder | undefined => 
  PlaceHolderImages.find(img => img.id === id);

export type Cake = {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  category: 'Classic' | 'Wedding' | 'Celebration' | 'Cheesecake' | 'Cupcakes';
  image: ImagePlaceholder;
};

export const cakeData: Cake[] = [
  {
    id: 'classic-chocolate-fudge',
    name: 'Classic Chocolate Fudge',
    description: 'A rich and decadent chocolate fudge cake made with dark chocolate and a hint of coffee. Finished with a glossy ganache and chocolate curls. The ultimate treat for any chocolate lover.',
    price: 45.00,
    ingredients: ['Flour', 'Sugar', 'Cocoa Powder', 'Butter', 'Eggs', 'Dark Chocolate', 'Coffee'],
    category: 'Classic',
    image: findImage('cake-chocolate-fudge')!,
  },
  {
    id: 'elegant-red-velvet',
    name: 'Elegant Red Velvet',
    description: 'A southern classic with a moist, velvety crumb and a hint of cocoa. Layered with our signature tangy cream cheese frosting and decorated with delicate cake crumbs.',
    price: 50.00,
    ingredients: ['Flour', 'Sugar', 'Buttermilk', 'Cocoa Powder', 'Cream Cheese', 'Butter', 'Eggs'],
    category: 'Classic',
    image: findImage('cake-red-velvet')!,
  },
  {
    id: 'zesty-lemon-drizzle',
    name: 'Zesty Lemon Drizzle',
    description: 'A bright and refreshing loaf cake bursting with lemon flavor. Soaked in a tangy lemon syrup and topped with a crisp sugar glaze. Perfect for a sunny afternoon.',
    price: 35.00,
    ingredients: ['Flour', 'Sugar', 'Lemons', 'Butter', 'Eggs'],
    category: 'Classic',
    image: findImage('cake-lemon-drizzle')!,
  },
  {
    id: 'summer-strawberry-cheesecake',
    name: 'Summer Strawberry Cheesecake',
    description: 'A creamy, New York-style cheesecake on a crunchy graham cracker crust. Topped with a fresh strawberry compote and whole berries for a taste of summer.',
    price: 55.00,
    ingredients: ['Cream Cheese', 'Graham Crackers', 'Sugar', 'Eggs', 'Strawberries', 'Butter'],
    category: 'Cheesecake',
    image: findImage('cake-strawberry-cheesecake')!,
  },
  {
    id: 'vanilla-dream-wedding',
    name: 'Vanilla Dream Wedding Cake',
    description: 'An elegant multi-tiered vanilla sponge cake, filled with raspberry jam and vanilla bean buttercream. Decorated with fresh flowers for a timeless look. Price upon consultation.',
    price: 350.00,
    ingredients: ['Flour', 'Sugar', 'Vanilla Bean', 'Butter', 'Eggs', 'Raspberry Jam'],
    category: 'Wedding',
    image: findImage('cake-wedding-vanilla')!,
  },
  {
    id: 'funfetti-birthday-blast',
    name: 'Funfetti Birthday Blast',
    description: 'The ultimate party cake! A soft vanilla sponge packed with colorful sprinkles, layered with sweet buttercream and decorated with even more sprinkles. Pure joy in every bite.',
    price: 40.00,
    ingredients: ['Flour', 'Sugar', 'Sprinkles', 'Butter', 'Eggs', 'Vanilla Extract'],
    category: 'Celebration',
    image: findImage('cake-birthday-funfetti')!,
  },
  {
    id: 'assorted-gourmet-cupcakes',
    name: 'Assorted Gourmet Cupcakes',
    description: 'A beautiful selection of our most popular cupcake flavors, including chocolate, vanilla, red velvet, and a seasonal special. Perfect for parties or as a gift.',
    price: 30.00,
    ingredients: ['Varies by flavor'],
    category: 'Cupcakes',
    image: findImage('cupcakes-assorted')!,
  },
  {
    id: 'spiced-carrot-cake',
    name: 'Spiced Carrot Cake',
    description: 'A wonderfully moist and flavorful carrot cake, packed with freshly grated carrots, pecans, and a blend of warm spices. Finished with a generous layer of classic cream cheese frosting.',
    price: 48.00,
    ingredients: ['Flour', 'Carrots', 'Pecans', 'Cinnamon', 'Nutmeg', 'Sugar', 'Cream Cheese'],
    category: 'Classic',
    image: findImage('cake-carrot')!,
  },
];

export const cakeCategories = ['All', ...Array.from(new Set(cakeData.map(c => c.category)))];
