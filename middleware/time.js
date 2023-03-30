function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

function getTime(order) {
  if (order.adminTime - new Date() < 0) {
    return "Ready";
  }
  let time = order.adminTime - new Date();
  time = Math.floor(time / 60000);
  return time;
}

module.exports = { addMinutes, getTime };
