"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import CartDrawer from "./components/CartDrawer";

export default function Home() {
  // Estado global del carrito y del panel lateral
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Función para añadir productos (si ya existe, aumenta la cantidad)
  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.name === product.name);
      if (existingItem) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Feedback visual: abre el carrito al agregar
  };

  // Función para aumentar/disminuir cantidades
  const updateQuantity = (name, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.name === name) {
          const newQuantity = item.quantity + delta;
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      }),
    );
  };

  // Función para eliminar un producto por completo
  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  // Cálculo total de unidades para el botón flotante
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className="relative min-h-screen bg-[#F9F5F0]">
      {/* 1. Sección de Bienvenida */}
      <Hero />

      {/* 2. Menú Interactivo con Buscador y Carrusel */}
      <Menu onAddToCart={addToCart} />

      {/* 3. Carrito Lateral (Drawer) - Configurado al 85% de ancho en móvil */}
      <CartDrawer
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onIncrease={(name) => updateQuantity(name, 1)}
        onDecrease={(name) => updateQuantity(name, -1)}
        onRemove={removeFromCart}
      />

      {/* 4. Botón Flotante del Carrito (Solo visible si hay items) */}
      {totalItems > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-6 z-40 bg-stone-900 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 transition-transform active:scale-90 animate-fade-in"
        >
          <div className="relative">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold absolute -top-2 -right-2">
              {totalItems}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold pr-2">
            Ver Pedido
          </span>
        </button>
      )}
    </main>
  );
}
