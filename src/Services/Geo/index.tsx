import axios from 'axios';
export const googleAPIKey = 'AIzaSyBuinFicS4HAGfIKW6rRutGFP9GWcReUn4';
export async function reverseGeo(lat: number, lng: number) {
  const result = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleAPIKey}`
  );
  if (result && result.data) {
    return result.data;
  }
  return null;
} 