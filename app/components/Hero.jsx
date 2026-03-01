"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center bg-[#F9F5F0] px-6 py-12 lg:px-20 overflow-hidden">
      {/* Luces de fondo animadas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute top-[-10%] right-[-10%] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-amber-100 rounded-full blur-[80px] lg:blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Imagen con entrada de escala */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-[340px] lg:max-w-none mx-auto order-1 lg:order-2"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000"
              alt="Café de especialidad"
              className="object-cover w-full h-full"
            />
          </div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -bottom-6 -right-2 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-stone-100"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                Abierto ahora
              </span>
            </div>
            <p className="text-sm font-serif text-amber-900 font-bold">
              Tu pausa consciente
            </p>
          </motion.div>
        </motion.div>

        {/* Textos con entrada secuencial */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1.5 bg-stone-900 text-stone-50 rounded-full text-[10px] uppercase tracking-[0.3em] font-semibold">
              Cafetería de Especialidad
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif text-stone-900 leading-[1.05]">
              El arte de la <br />
              <span className="italic text-stone-400">pausa perfecta.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base lg:text-xl text-stone-600 max-w-[340px] lg:max-w-md font-light"
          >
            Granos seleccionados y un ambiente diseñado para que el tiempo se
            detenga.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col w-full sm:flex-row gap-4 pt-4 lg:w-auto"
          >
            <button className="px-12 py-4 bg-stone-900 text-stone-50 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-stone-800 transition-all shadow-xl">
              Explorar Menú
            </button>
            <button className="px-12 py-4 border border-stone-300 text-stone-900 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-stone-50 transition-colors">
              Ubicación
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
