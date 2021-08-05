// 체육복

function solution(n, lost, reserve) {
  let tmpArr = [...reserve];

  for (let i in tmpArr) {
    let key = lost.indexOf(tmpArr[i]);

    if (key !== -1) {
      lost.splice(key, 1);
      reserve.splice(reserve.indexOf(tmpArr[i]), 1);
    }
  }

  for (let i of reserve) {
    let key = lost.includes(i-1) ? lost.indexOf(i-1) : lost.indexOf(i+1);

    if (key !== -1) {
      lost.splice(key, 1);
    }
  }

  return n - lost.length;
}
