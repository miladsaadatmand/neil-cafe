// فرمت‌دهی قیمت به تومان با ارقام فارسی
export function formatPrice(amount) {
  return amount.toLocaleString("fa-IR") + " ت";
}
