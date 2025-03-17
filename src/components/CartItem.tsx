
import React from 'react';
import { Trash, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  image,
  quantity,
  onRemove,
  onUpdateQuantity
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const handleIncrement = () => {
    onUpdateQuantity(id, quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    } else {
      onRemove(id);
    }
  };

  return (
    <div 
      className={cn(
        "flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg transition-all duration-300 animate-fade-in glass-panel",
        isHovered && "bg-white/10"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0 bg-kartify-black-light">
        <div className="absolute inset-0 bg-gradient-to-br from-kartify-neon-blue/20 to-kartify-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3 sm:gap-4">
        <div className="text-left">
          <h3 className="font-medium text-white truncate">{name}</h3>
          <p className="text-sm text-white/60 mt-1">${price.toFixed(2)}</p>
        </div>
        
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
          <div className="flex items-center">
            <button
              onClick={handleDecrement}
              className="w-8 h-8 flex items-center justify-center rounded-l-md bg-kartify-black-muted hover:bg-kartify-neon-pink hover:text-black transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <div className="w-10 h-8 flex items-center justify-center bg-kartify-black-light text-white">
              {quantity}
            </div>
            <button
              onClick={handleIncrement}
              className="w-8 h-8 flex items-center justify-center rounded-r-md bg-kartify-black-muted hover:bg-kartify-neon-green hover:text-black transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <button
            onClick={() => onRemove(id)}
            className="p-2 text-white/60 hover:text-kartify-neon-pink transition-colors"
            aria-label="Remove item"
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
