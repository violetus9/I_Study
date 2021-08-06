// 숫자 문자열과 영단어

function solution(s) {
  const nums = ["zero", "one", "two",
                "three", "four", "five",
                "six", "seven", "eight", "nine"];

  for(let i in nums) {
      let arr = s.split(nums[i]);
      s = arr.join(i);
      // console.log(`arr: ${arr} \n s: ${s}`)
  }

  return Number(s);
}


// console.log(solution("one4seveneight"));
// console.log(solution("23four5six7"));
// console.log(solution("2three45sixsevensevenseven"));
// console.log(solution("123"));

