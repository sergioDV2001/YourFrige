// services/weekMenuService.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Asegúrate de que esta URL es correcta para tu configuración
});

export const getWeekMenu = async () => {
  try {
    const response = await api.get('/weekmenu');
    return response.data;
  } catch (error) {
    console.error('Error fetching week menu:', error);
    throw error;
  }
};

export const createWeekMenu = async (weekMenu: any) => {
  try {
    const response = await api.post('/weekmenu', weekMenu);
    return response.data;
  } catch (error) {
    console.error('Error creating week menu:', error);
    throw error;
  }
};
