export async function getClientIP(): Promise<string> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    // Fallback to a placeholder IP if the service is unavailable
    console.warn('Could not fetch IP address:', error);
    return '0.0.0.0';
  }
}