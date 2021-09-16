// 베스트앨범

function solution(genres, plays) {
	const ordered = [];
	const album = {};

	// 장르별 높은순 두개씩
	for (let i = 0; i < genres.length; i++) {
		if (!album[genres[i]]) {
			album[genres[i]] = {
				priority: plays[i],
				songs: [],
			};
			album[genres[i]]["songs"].push([plays[i], i]);
		} else {
			album[genres[i]]["priority"] += plays[i];
			album[genres[i]]["songs"].push([plays[i], i]);
		}
	}

	Object.entries(album).forEach((e) => {
		const [gen, each] = e;
		each["songs"].sort((a, b) => b[0] - a[0]);
		while (each["songs"].length > 2) {
			each["songs"].pop();
		}
		// console.log(each);
		ordered.push([each["priority"], each["songs"]]);
	});

	// console.log(album);
	// console.log(priority);

	const answer = [];
	ordered
		.sort((a, b) => b[0] - a[0])
		.forEach((gen) => {
			const [non, songs] = gen;
			songs.map((e) => {
				answer.push(e[1]);
			});
		});
	return answer;
}

console.log(
	solution(
		["classic", "pop", "classic", "classic", "pop"],
		[500, 600, 150, 800, 2500]
	)
);

console.log(
	solution(
		[
			"classic",
			"pop",
			"classic",
			"classic",
			"pop",
			"test",
			"test",
			"test",
			"test",
			"test",
		],
		[500, 600, 150, 800, 2500, 9999, 999, 999, 999, 999]
	)
);

console.log(
	solution(
		["classic", "pop", "classic", "classic", "classic"],
		[500, 1000, 400, 300, 200, 100]
	)
);

/* 괜찮은 풀이 남김 */

// function solution(genres, plays) {
//   var dic = {};
//   genres.forEach((t,i)=> {
//       dic[t] = dic[t] ?  dic[t] + plays[i] :plays[i];
//   });

//   var dupDic = {};
//   return genres
//         .map((t,i)=> ({genre : t, count:plays[i] , index:i}))
//         .sort((a,b)=>{
//              if(a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
//              if(a.count !== b.count) return b.count - a.count;
//              return a.index - b.index;
//          })
//          .filter(t=>  {
//              if(dupDic[t.genre] >= 2) return false;
//              dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre]+ 1 : 1;
//              return true;
//           })
//          .map(t=> t.index);
// }
