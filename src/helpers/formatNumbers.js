export function numberWithCommas(x) {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
