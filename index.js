var students = [
  { name: 'raja', age: 39, id: 1 },
  { name: 'gurumeet', age: 49, id: 2 },
  { name: 'abhishek', age: 69, id: 3 },
  { name: 'viru', age: 49, id: 2 },
  { name: 'vivek', age: 69, id: 3 },
];
const filteredOutput = students.filter((student) => student.age > 39);
filteredOutput.map((item) => console.log(item.name));
