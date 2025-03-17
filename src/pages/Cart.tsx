
import React from 'react';
import { toast } from 'sonner';
import Layout from '@/components/Layout';
import CartItem, { CartItemProps } from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';
import { ShoppingCart } from 'lucide-react';

// Sample product data
const initialItems: Omit<CartItemProps, 'onRemove' | 'onUpdateQuantity'>[] = [
  {
    id: '1',
    name: 'Wireless Gaming Headphones',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Ultra HD Curved Gaming Monitor',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179',
    quantity: 1,
  },
  {
    id: '3',
    name: 'RGB Mechanical Keyboard',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae',
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = React.useState(initialItems);
  const [loading, setLoading] = React.useState(false);

  const handleRemoveItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };
  
  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  const handleCheckout = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success('Order placed successfully');
      setCartItems([]);
    }, 1500);
  };
  
  // Calculate order summary
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 
    0
  );
  const tax = subtotal * 0.08; // 8% tax
  const shipping = cartItems.length > 0 ? 12.99 : 0;
  const total = subtotal + tax + shipping;
  
  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-6 text-left">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="text-kartify-neon-blue">Your Cart</span>
            <ShoppingCart className="ml-2 inline-block text-kartify-neon-blue animate-pulse-glow" />
          </h1>
          <p className="mt-2 text-white/60">
            Review your items and proceed to checkout
          </p>
        </div>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  {...item}
                  onRemove={handleRemoveItem}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              ))}
            </div>
            
            <div className="lg:col-span-1">
              <CartSummary
                subtotal={subtotal}
                tax={tax}
                shipping={shipping}
                total={total}
                onCheckout={handleCheckout}
              />
              
              <div className="mt-6 glass-panel p-4 rounded-lg">
                <h3 className="font-medium text-white mb-2">Accepted Payment Methods</h3>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-white/80 p-2">Visa</div>
                  <div className="text-white/80 p-2">Mastercard</div>
                  <div className="text-white/80 p-2">PayPal</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-12 glass-panel rounded-lg animate-fade-in">
            <div className="text-center max-w-md mx-auto px-4">
              <div className="rounded-full w-20 h-20 bg-white/5 flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="h-10 w-10 text-kartify-neon-pink" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">Your cart is empty</h2>
              <p className="text-white/60 mb-6">
                Looks like you haven't added any products to your cart yet.
              </p>
              <a
                href="/"
                className="inline-block px-6 py-3 bg-kartify-neon-blue text-black font-medium rounded-md hover:bg-kartify-neon-green transition-colors duration-300"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
