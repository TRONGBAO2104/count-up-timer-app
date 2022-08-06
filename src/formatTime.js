export const formatTime = (time) => {
  const seconds = time % 60;
  const getSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const minutes = Math.floor((time % 3600) / 60);
  const getMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const hours = Math.floor(time / 3600);
  const getHours = hours < 10 ? `0${hours}` : hours;

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
