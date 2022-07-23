import axios from 'axios';
import endPoints from '@services/api';

const addProducts = async (body) => {
  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json;charset=utf-8',
    },
  };

  const response = await axios.post(endPoints.products.addProducts, body, options);

  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};

const editProducts = async (id, body) => {
  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json;charset=utf-8',
    },
  };

  const response = await axios.put(endPoints.products.updateProducts(id), body, options);

  return response.data;
};

export { addProducts, deleteProduct, editProducts };
