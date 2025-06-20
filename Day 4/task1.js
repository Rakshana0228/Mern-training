const students = [
  { name: 'RAKSHANA', marks: [98, 95, 90] },
  { name: 'SRI HARIPRIYAA', marks: [85, 80, 80] },
  { name: 'RITHANYA SUSI', marks: [88, 92, 95] },
]
const studentsWithTotal = students.map(student => ({
  name: student.name,
  total: student.marks.reduce((sum, mark) => sum + mark, 0)
}));
console.log('Total marks for each student:', studentsWithTotal);

const highScorers = studentsWithTotal.filter(student => student.total > 200);
console.log('Students with more than 200 marks:', highScorers);

const topperTotal = studentsWithTotal.reduce((max, student) => student.total > max ? student.total : max, 0);
console.log('Class topper\'s total marks:', topperTotal);