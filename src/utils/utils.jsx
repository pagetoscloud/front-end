export function toCurrency(num, locale = "id-ID", currency = "IDR") {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(num);
}