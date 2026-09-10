const courses = [
  { name: '高等数学', credit: 4, score: 88 },
  { name: '大学英语', credit: 3, score: 92 },
  { name: '数据结构', credit: 3, score: 55 },
  { name: '操作系统', credit: 2, score: 78 },
  { name: '体育', credit: 1, score: 95 },
  { name: '线性代数', credit: 0, score: 82 },
  { name: '离散数学', credit: 3, score: 120 },
  { name: '概率统计', credit: 2, score: -10 }
];

console.table(courses);

const cleanCourses = (list) => list.filter(c => c.credit > 0 && c.score >= 0 && c.score <= 100);

const toGPA = (score) => {
  if (score >= 90) return 4.0;
  if (score >= 80) return 3.0;
  if (score >= 70) return 2.0;
  if (score >= 60) return 1.0;
  return 0;
};

const withGPA = (list) => list.map(c => ({ ...c, gpa: toGPA(c.score) }));

const totalGPA = (list) => {
  if (list.length === 0) return 0;
  const totalQP = list.reduce((sum, c) => sum + c.gpa * c.credit, 0);
  const totalCr = list.reduce((sum, c) => sum + c.credit, 0);
  return (totalQP / totalCr).toFixed(2);
};

const averageScore = (list) => {
  if (list.length === 0) return 0;
  return (list.reduce((sum, c) => sum + c.score, 0) / list.length).toFixed(2);
};

const failedCourses = (list) => list.filter(c => c.score < 60).map(c => c.name);

console.log('清洗后：', cleanCourses(courses));
console.log('带绩点：', withGPA(cleanCourses(courses)));
console.log('加权绩点：', totalGPA(withGPA(cleanCourses(courses))));
console.log('平均分：', averageScore(cleanCourses(courses)));
console.log('不及格：', failedCourses(cleanCourses(courses)));
