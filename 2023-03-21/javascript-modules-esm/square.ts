
export type Rect = {
  h: number;
  w: number;
}

export const area = (rect: Rect) => rect.h * rect.w;
