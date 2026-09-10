function wordCount(text) {
  let words = text.toLowerCase().split(' ');
  let result = {};
  for (let i = 0; i < words.length; i++) {
    let w = words[i].replace(/[^a-z]/g, '');
    if (w === '') continue;
    if (result[w] === undefined) {
      result[w] = 1;
    } else {
      result[w] = result[w] + 1;
    }
  }
  return result;
}

let sample = 'To be or not to be that is the question';
console.log(wordCount(sample));

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = nums.filter(function(n) { return n % 2 === 0; })
                 .map(function(n) { return n * n; })
                 .reduce(function(sum, n) { return sum + n; }, 0);
console.log(result);

function add(a, b) {
  a + b;
}
console.log(add(1, 2));

function isZero(n) {
  return n == '0';
}
console.log(isZero(0));
console.log(isZero('0'));
console.log(isZero(false));

let arr = [10, 20, 30];
console.log(arr[3]);
console.log(arr[-1]);

function avg(list) {
  let total = list.reduce(function(s, n) { return s + n; }, 0);
  return total / list.length;
}
console.log(avg([10, NaN, 30]));

function getLen(str) {
  return str.length;
}
console.log(getLen(undefined));

let courses2 = [
  { name: '体育', score: 95, category: 'E' },
  { name: '数据结构', score: 55, category: 'CS' },
  { name: '操作系统', score: 78, category: 'CS' },
  { name: '大学英语', score: 92, category: 'E' },
  { name: '高等数学', score: 88, category: 'M' },
  { name: '线性代数', score: 82, category: 'M' }
];

courses2.sort(function(a, b) {
  if (a.category === b.category) {
    return b.score - a.score;
  }
  return a.category > b.category ? 1 : -1;
});
console.log('排序后：', courses2);

let dirtyNames = ['  高数  ', '数据  结构', '大学   英语', '  体育'];
for (let i = 0; i < dirtyNames.length; i++) {
  dirtyNames[i] = dirtyNames[i].replace(/\s+/g, ' ').trim();
}
console.log('清洗后：', dirtyNames);

let phones = ['13812345678', '12345678901', '138abcdefgh', '15987654321', '1381234567'];
for (let i = 0; i < phones.length; i++) {
  let ok = /^1[3-9]\d{9}$/.test(phones[i]);
  console.log(phones[i], ok ? '合法' : '不合法');
}

let bigArr = [];
for (let i = 0; i < 1000000; i++) {
  bigArr.push(Math.random());
}

console.time('for循环');
let s1 = 0;
for (let i = 0; i < bigArr.length; i++) {
  s1 = s1 + bigArr[i];
}
console.timeEnd('for循环');
console.log('for结果：', s1);

console.time('reduce');
let s2 = bigArr.reduce(function(sum, n) { return sum + n; }, 0);
console.timeEnd('reduce');
console.log('reduce结果：', s2);
