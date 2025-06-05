
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Coxinha de Frango',
    description: 'Clássica, crocante por fora e cremosa por dentro.',
    price: 1.5,
    image: '/coxinha.jpg',
  },
  {
    id: 2,
    name: 'Brigadeiro',
    description: 'Doce tradicional brasileiro coberto com granulado.',
    price: 1.0,
    image: '/brigadeiro.jpg',
  },
  {
    id: 3,
    name: 'Mini Quiche de Queijo',
    description: 'Delicado e saboroso, ideal para festas.',
    price: 2.0,
    image: '/quiche.jpg',
  },
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const sendToWhatsApp = () => {
    const message = cart
      .map((item, index) => `${index + 1}. ${item.name} - €${item.price.toFixed(2)}`)
      .join('\n');

    const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    const finalMessage = `Olá, gostaria de fazer um pedido no Bistrô dos Salgados:\n${message}\nTotal: €${total}`;
    const url = `https://wa.me/351910000000?text=${encodeURIComponent(finalMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '100px', marginBottom: '10px' }} />
        <h1>Bistrô dos Salgados</h1>
      </div>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', width: '30%' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>€{product.price.toFixed(2)}</strong></p>
            <button onClick={() => addToCart(product)}>Adicionar</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <h2>Seu Pedido</h2>
          <ul>
            {cart.map((item, i) => (
              <li key={i}>{item.name} - €{item.price.toFixed(2)}</li>
            ))}
          </ul>
          <p><strong>Total: €{cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</strong></p>
          <button onClick={sendToWhatsApp}>Finalizar Pedido pelo WhatsApp</button>
        </div>
      )}
    </div>
  );
}
