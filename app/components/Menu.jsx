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
    {
      id: 1,
      category: "Cafetería",
      name: "Piccolo",
      price: "$ 3.700,00",
      desc: "Espresso más leche. Taza pequeña.",
      image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Cafetería",
      name: "Cappuccino moderno",
      price: "$ 3.800,00",
      desc: "Espresso más leche. Taza mediana.",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Cafetería",
      name: "Latte de especialidad",
      price: "$ 4.000,00",
      desc: "Espresso más leche. Taza grande.",
      image:
        "https://images.unsplash.com/photo-1551030173-122fba6e00ca?q=80&w=300&auto=format&fit=crop",
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

        {/* Categorías en Carrusel (Mobile) */}
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
                className={`text-[11px] uppercase tracking-widest font-bold ${activeCategory === cat.id ? "text-stone-900" : "text-stone-400"}`}
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

        {/* Lista de Productos Refinada */}
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
