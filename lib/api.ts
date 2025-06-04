/* export async function fetchStudios() {
  // esim. fetch tai Supabase-kutsu
  const response = await fetch('https://api.yoursite.com/studios');
  const data = await response.json();
  return data;
}
 */

// lib/api.ts

type BookingPayload = {
  studioId: string;
  time: string;
};

/**
 * Simuloi varauksen tekemistä (mock backend).
 * Voit myöhemmin korvata tämän oikealla fetch/post-kutsulla.
 */
export const bookStudio = async ({ studioId, time }: BookingPayload): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simuloidaan satunnaista virhettä (esim. 10 % epäonnistumismahdollisuus)
      const errorChance = Math.random();
      if (errorChance < 0.1) {
        reject(new Error('Mock backend error: Studio is already booked'));
      } else {
        console.log(`Studio ${studioId} booked for ${time}`);
        resolve();
      }
    }, 1000); // Simuloi verkkoviivettä
  });
};

/**
 * Simuloi käyttäjän varausten hakua mock backendistä.
 * Palauttaa kovakoodatun listan varauksia pienen viiveen jälkeen.
 */

type Booking = {
  id: string;
  studioName: string;
  time: string;
};
export const getUserBookings = async (): Promise<Booking[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', studioName: 'Studio A', time: '2025-06-04 10:00' },
        { id: '2', studioName: 'Studio B', time: '2025-06-05 14:30' },
        { id: '3', studioName: 'Studio C', time: '2025-06-06 09:00' },
      ]);
    }, 1000); // Simuloi 1 sekunnin verkkoviive
  });
};
