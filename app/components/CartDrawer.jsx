"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CartDrawer = ({
  cart,
  isOpen,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  // Función robusta para limpiar el precio y convertirlo a número real
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    // Quitamos "$", espacios y puntos de miles, luego cambiamos la coma decimal por punto
    const cleanPrice = priceStr.replace(/[$. ]/g, "").replace(",", ".");
    return parseFloat(cleanPrice) || 0;
  };

  const total = cart.reduce((acc, item) => {
    return acc + parsePrice(item.price) * item.quantity;
  }, 0);

  const handleCheckout = () => {
    const phoneNumber = "14155238886";
    let message = "¡Hola! Mi pedido desde la Web:\n\n";
    cart.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} (${item.price})\n`;
    });
    message += `\n*Total a pagar: $ ${total.toLocaleString("es-AR", { minimumFractionDigits: 2 })}*`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
          />

          {/* Panel - Ahora con w-[85%] en móvil */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-[85%] sm:w-full sm:max-w-md bg-[#F9F5F0] h-full shadow-2xl p-6 flex flex-col border-l border-stone-200"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Tu Carrito
              </h2>
              <button
                onClick={onClose}
                className="text-3xl text-stone-400 hover:text-stone-900"
              >
                &times;
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
              {cart.length === 0 ? (
                <p className="text-center text-stone-400 italic mt-20 font-light">
                  Tu pedido está vacío...
                </p>
              ) : (
                cart.map((item, idx) => (
                  <motion.div
                    key={idx}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white/50 p-4 rounded-3xl border border-stone-200/50 space-y-3"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-stone-900 uppercase tracking-tight w-2/3">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => onRemove(item.name)}
                        className="text-stone-300 hover:text-red-500 transition-colors"
                      >
                        <TrashIcon />
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      {/* Controles de Cantidad */}
                      <div className="flex items-center gap-4 bg-white rounded-full px-3 py-1 border border-stone-100 shadow-sm">
                        <button
                          onClick={() => onDecrease(item.name)}
                          className="text-lg font-bold text-stone-400 hover:text-stone-900"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onIncrease(item.name)}
                          className="text-lg font-bold text-stone-400 hover:text-stone-900"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-serif font-bold text-stone-900">
                        ${" "}
                        {(
                          parsePrice(item.price) * item.quantity
                        ).toLocaleString("es-AR", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-6 mt-6 border-t border-stone-200 space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] uppercase font-bold text-stone-400 tracking-[0.2em]">
                    Total Final
                  </span>
                  <span className="text-3xl font-serif font-bold text-stone-900">
                    ${" "}
                    {total.toLocaleString("es-AR", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#075e54] text-white py-5 rounded-full font-bold uppercase tracking-widest text-[11px] shadow-xl shadow-green-100 flex items-center justify-center gap-3 active:scale-95 transition-all"
                >
                  Finalizar Pedido
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6" />
  </svg>
);

export default CartDrawer;
