// 폰켓몬

function solution(nums) {
  // N / 2를 가져가~
  const bagLimit = parseInt(nums.length / 2);
  
  const species = (new Set(nums)).size;
  
  // 3,1,2,3      2   nums > max
  // 3,3,3,2,2,4  3   nums = max
  // 3,3,3,2,2,2  2   nums < max
  // 1,2,3,4,5,6  3   nums > max
  
  return (species >= bagLimit) ? bagLimit : species;
}