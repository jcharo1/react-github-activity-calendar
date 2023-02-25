export function getColor(count) {
  if (count <= 0) {
    return "bg-day";
  } else if (count > 0 && count < 9) {
    return "bg-day--L2";
  } else if (count < 14) {
    return "bg-day--L3";
  } else {
    return "bg-day--L4";
  }
}
