"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState("Cafetería");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "Cafetería", icon: "☕" },
    { id: "Sin cafeína", icon: "🍵" },
    { id: "Jugos", icon: "🥤" },
    { id: "Pastelería", icon: "🥐" },
  ];

  const items = [
    // --- CAFETERÍA ---
    {
      id: 1,
      category: "Cafetería",
      name: "Piccolo",
      price: "$ 3.700,00",
      desc: "Ristretto corto cortado con leche sedosa en vaso de 4oz.",
      image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Cafetería",
      name: "Cappuccino moderno",
      price: "$ 3.800,00",
      desc: "Equilibrio perfecto de espresso, leche al vapor y microespuma densa.",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Cafetería",
      name: "Latte de especialidad",
      price: "$ 4.000,00",
      desc: "Doble shot de espresso con una capa generosa de leche cremosa.",
      image:
        "https://images.unsplash.com/photo-1599398054066-846f28917f38?q=80&w=400&auto=format&fit=crop",
    },

    // --- SIN CAFEÍNA ---
    {
      id: 4,
      category: "Sin cafeína",
      name: "Chai Latte",
      price: "$ 3.900,00",
      desc: "Infusión de té negro con cardamomo, canela y jengibre emulsionado.",
      image:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "Sin cafeína",
      name: "Matcha Ceremonial",
      price: "$ 4.500,00",
      desc: "Té verde origen Japón batido a mano, con notas dulces y vegetales.",
      image:
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 6,
      category: "Sin cafeína",
      name: "Infusión del Bosque",
      price: "$ 3.200,00",
      desc: "Mix de arándanos, hibisco y escaramujo para un sabor frutal intenso.",
      image:
        "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=400&auto=format&fit=crop",
    },

    // --- JUGOS ---
    {
      id: 7,
      category: "Jugos",
      name: "Naranja Natural",
      price: "$ 3.000,00",
      desc: "Zumo recién exprimido de naranjas seleccionadas de estación.",
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 8,
      category: "Jugos",
      name: "Limonada con Menta",
      price: "$ 3.200,00",
      desc: "Limones frescos, menta del huerto y un toque de azúcar orgánica.",
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 9,
      category: "Jugos",
      name: "Detox Green",
      price: "$ 3.500,00",
      desc: "Poderosa mezcla de espinaca, manzana verde, pepino y limón.",
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=400&auto=format&fit=crop",
    },

    // --- PASTELERÍA ---
    {
      id: 10,
      category: "Pastelería",
      name: "Croissant Francés",
      price: "$ 2.500,00",
      desc: "Hojaldre laminado a mano con 24 horas de fermentación lenta.",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 11,
      category: "Pastelería",
      name: "Roll de Canela",
      price: "$ 2.800,00",
      desc: "Masa brioche suave rellena de canela de Ceylán y frosting de vainilla.",
      image:
        "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 12,
      category: "Pastelería",
      name: "Cookie de Chocolate",
      price: "$ 2.200,00",
      desc: "Galleta melosa con trozos de chocolate amargo y escamas de sal.",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.category === activeCategory &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section id="menu" className="py-20 bg-[#F9F5F0] px-6 min-h-screen">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Buscador Estilo Glassmorphism */}
        <div className="relative group">
          <input
            type="text"
            placeholder="Buscar por productos..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/60 backdrop-blur-md border border-stone-200 py-4 px-12 rounded-2xl outline-none focus:ring-2 focus:ring-amber-900/20 transition-all font-light text-stone-600"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30">
            🔍
          </span>
        </div>

        {/* Categorías en Carrusel */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-2 min-w-[100px] p-4 rounded-3xl transition-all ${
                activeCategory === cat.id
                  ? "bg-white shadow-xl shadow-stone-200/50 border border-amber-100"
                  : "opacity-50"
              }`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span
                className={`text-[11px] uppercase tracking-widest font-bold ${
                  activeCategory === cat.id
                    ? "text-stone-900"
                    : "text-stone-400"
                }`}
              >
                {cat.id}
              </span>
            </button>
          ))}
        </div>

        {/* Título de Sección */}
        <div className="pt-4">
          <h2 className="text-3xl font-serif text-stone-900">
            {activeCategory}
          </h2>
          <div className="w-10 h-[2px] bg-amber-900 mt-2 opacity-30"></div>
        </div>

        {/* Lista de Productos */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid gap-6"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white p-5 rounded-[2.5rem] flex justify-between items-center gap-4 shadow-sm border border-stone-100 group"
                >
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-serif font-bold text-stone-900 leading-none">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-400 font-light leading-relaxed pr-4">
                      {item.desc}
                    </p>
                    <div className="pt-2">
                      <span className="text-amber-900 font-bold font-serif text-lg">
                        {item.price}
                      </span>
                      <p className="text-[9px] text-stone-300 uppercase tracking-tighter">
                        Sin impuestos nacionales
                      </p>
                    </div>
                    {/* Botón Añadir */}
                    <button
                      onClick={() => onAddToCart(item)}
                      className="mt-4 px-5 py-2 bg-stone-900 text-white text-[10px] uppercase font-bold rounded-full hover:bg-amber-900 transition-colors"
                    >
                      Añadir al pedido
                    </button>
                  </div>

                  <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-[2rem] overflow-hidden shadow-inner flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Menu;
