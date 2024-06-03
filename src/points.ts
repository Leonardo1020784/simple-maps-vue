export interface Point {
  id: number;
  name: string;
  code: string;
  coordinates: [number, number];
}

export const generatePoints = (count: number): Point[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Point ${i}`,
    code: `P${i}`,
    coordinates: [Math.random() * 180 - 90, Math.random() * 360 - 180],
  }));
};
