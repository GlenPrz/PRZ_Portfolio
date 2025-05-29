// src/components/Rockets.jsx
import { useEffect } from 'react';

const Rockets = () => {
  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then((response) => response.json())
      .then((data) => {
        console.log('SpaceX Rockets:', data);
      })
      .catch((error) => {
        console.error('Error fetching rockets:', error);
      });
  }, []);

  return null; // No UI needed
};
 
export default Rockets;
