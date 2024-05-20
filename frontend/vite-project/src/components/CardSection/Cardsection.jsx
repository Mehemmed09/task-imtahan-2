import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../Cards/Card';
function Products() { 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('urun gelmir', error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Boş bağımlılık dizisi, sadece ilk render'da çalışması için

  return (
   <> 
   <div > 
   {loading ? (
     <p>MALLAR YUKLENIR</p>
   ) : (
     <div className='cards'>
      {products && products.map((item) => (
                         <Cards key={item._id} id={item._id} image={item.image} text={item.text} title={item.title} product={item} />
                     ))}
     </div>
   )}
 </div>
 
   </>
  );
}

export default Products;
