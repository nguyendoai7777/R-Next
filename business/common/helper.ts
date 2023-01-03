export const cap = (t: string) => {
  return t.charAt(0).toUpperCase() + t.slice(1);
};

export function debounce(func: (() => void ), delay = 500) {
  let timer: number;
  return function (event: any) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, delay, event);
  };
}
