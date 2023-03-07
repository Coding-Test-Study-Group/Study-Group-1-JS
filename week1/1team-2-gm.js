const sol = (input) => {
  const [[N], [M], sources] = input;

  // 투 포인터 알고리즘을 위해 정렬
  sources.sort((a, b) => a - b);

  let cnt = 0;
  let p1 = 0;
  let p2 = N - 1;

  while (p1 < p2) {
    const sum = sources[p1] + sources[p2];

    if (sum === M) {
      cnt++;
      p1++;
      p2--;
      continue;
    }

    if (sum < M) {
      p1++;
      continue;
    }

    p2--;
  }

  return cnt;
};

// 백준 입력을 받는 코드
const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length === 3) {
      console.log(sol(input));
      process.exit();
    }
  });
