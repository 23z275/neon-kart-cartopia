
import React from 'react';
import { cn } from '@/lib/utils';

interface CartSummaryProps {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  tax,
  shipping,
  total,
  onCheckout
}) => {
  return (
    <div className="glass-panel rounded-lg overflow-hidden animate-fade-in">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6 text-white">Order Summary</h2>
        
        <div className="space-y-4">
          <SummaryItem label="Subtotal" value={subtotal} />
          <SummaryItem label="Tax" value={tax} />
          <SummaryItem label="Shipping" value={shipping} isEstimate />
          
          <div className="h-px bg-white/10 my-4" />
          
          <div className="flex justify-between items-center">
            <span className="font-semibold text-white">Total</span>
            <span className="text-xl font-bold text-kartify-neon-blue">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-6 pt-2">
        <button
          onClick={onCheckout}
          className={cn(
            "w-full py-3 px-4 rounded-md font-medium transition-all duration-300",
            "text-black bg-kartify-neon-blue hover:bg-kartify-neon-green",
            "focus:outline-none focus:ring-2 focus:ring-kartify-neon-blue focus:ring-opacity-50",
            "relative overflow-hidden group"
          )}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-kartify-neon-blue via-kartify-neon-purple to-kartify-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-200 bg-pos-0 group-hover:bg-pos-100"></div>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">Proceed to Checkout</span>
        </button>
        
        <div className="mt-4">
          <a href="/" className="text-sm text-kartify-neon-blue hover:text-kartify-neon-purple transition-colors">
            ← Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

interface SummaryItemProps {
  label: string;
  value: number;
  isEstimate?: boolean;
}

const SummaryItem: React.FC<SummaryItemProps> = ({ label, value, isEstimate }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-white/70">
        {label}
        {isEstimate && <span className="text-xs ml-1">(estimated)</span>}
      </span>
      <span className="text-white">${value.toFixed(2)}</span>
    </div>
  );
};

export default CartSummary;
