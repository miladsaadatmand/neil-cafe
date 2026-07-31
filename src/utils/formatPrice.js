// فرمت‌دهی قیمت به تومان با ارقام فارسی
export function formatPrice(amount) {
  if (!amount) return "";

  return Number(amount).toLocaleString("fa-IR") + " تومان";
}