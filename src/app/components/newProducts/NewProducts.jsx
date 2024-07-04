"use client"
import { useState } from 'react';

export default function NewProducts() {
   const [form, setForm] = useState({
      category: '',
      descripcion: '',
      nombre: '',
      precio: '',
      precioViejo: '',
      promocion: false,
      stock: '',
      titulo: '',
      url: '',
   });

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setForm({
         ...form,
         [name]: type === 'checkbox' ? checked : value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await fetch('/api/products', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
         });
         if (!res.ok) {
            throw new Error('Error en la creación del producto');
         }
         const data = await res.json();
         console.log('Producto creado:', data);
      } catch (error) {
         console.error('Error:', error);
      }
   };

   return (
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md">
         <h2 className="text-2xl mb-4">Crear Nuevo Producto</h2>
         {Object.keys(form).map((key) => (
            <div key={key} className="mb-4">
               <label className="block text-gray-700 capitalize">{key}</label>
               {key === 'promocion' ? (
                  <input
                     type="checkbox"
                     name={key}
                     checked={form[key]}
                     onChange={handleChange}
                     className="mt-1 block"
                  />
               ) : (
                  <input
                     type={key === 'precio' || key === 'precioViejo' || key === 'stock' ? 'number' : 'text'}
                     name={key}
                     value={form[key]}
                     onChange={handleChange}
                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  />
               )}
            </div>
         ))}
         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Crear Producto
         </button>
      </form>
   );
}
