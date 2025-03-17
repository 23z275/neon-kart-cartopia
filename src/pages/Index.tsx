
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="min-h-[80vh] flex flex-col items-center justify-center gap-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-sm text-kartify-neon-blue font-medium">Premium Gaming Experience</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Welcome to <span className="text-kartify-neon-blue">Kartify</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Explore premium gaming gear with sleek designs and cutting-edge technology.
              Your gaming experience deserves the best equipment.
            </p>
            <Link 
              to="/cart" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-kartify-neon-blue text-black font-medium transition-all duration-300 hover:bg-kartify-neon-green group"
            >
              View Your Cart
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="glass-panel mt-16 p-8 rounded-lg max-w-3xl w-full">
            <h2 className="text-xl font-semibold mb-4 text-kartify-neon-pink">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Wireless Headphones',
                  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
                },
                {
                  name: 'Gaming Monitor',
                  image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179',
                },
                {
                  name: 'RGB Keyboard',
                  image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae',
                }
              ].map((product, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-white font-medium">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
