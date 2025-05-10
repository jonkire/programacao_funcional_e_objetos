class Exam {
  constructor(answer, weight) {
    this.weight = weight;
    this.answer = answer;
    this.exams = [];
  }

  add(exam) {
    this.exams.push(exam);
  }
  
  avg() {
    let notas = [];
    for (const exam of this.exams) {
      let total = 0;
      for (const i in exam) {
        if (exam[i] === this.answer[i]) total += this.weight[i];
      }
      notas.push(total);
    }
    const media = notas.reduce((a, b) => a + b, 0) / this.exams.length;
    return media;
  }

  min(count) {
    let notas = [];
    for (const exam of this.exams) {
      let total = 0;
      for (const i in exam) {
        if (exam[i] === this.answer[i]) total += this.weight[i];
      }
      notas.push(total);
    }
    notas.sort((a, b) => a - b);
    return notas.slice(0, count);
  }

  max(count) {
    let notas = [];
    for (const exam of this.exams) {
      let total = 0;
      for (const i in exam) {
        if (exam[i] === this.answer[i]) total += this.weight[i];
      }
      notas.push(total)
    }
    notas.sort((a, b) => b - a);
    return notas.slice(0, count);
  }

  lt(limit) {
    let notas = [];
    for (const exam of this.exams) {
      let total = 0;
      for (const i in exam) {
        if (exam[i] === this.answer[i]) total += this.weight[i];
      }
      notas.push(total)
    }
    return notas.filter((x) => x<limit);
  }

  gt(limit) {
    let notas = [];
      for (const exam of this.exams) {
        let total = 0;
        for (const i in exam) {
          if (exam[i] === this.answer[i]) total += this.weight[i];
        }
        notas.push(total)
      }
    return notas.filter((x) => x>limit);
  } 
}

const correctanswers = ['a', 'b', 'a', 'c', 'd'];
const weight = [2, 2, 2, 2, 2];
const studentsanswer = ['a', 'b', 'b', 'b', 'b'];
const studentsanswer2 = ['a', 'b', 'a', 'a', 'a'];
const studentsanswer3 = ['a', 'b', 'a', 'c', 'd']; 

const exam = new Exam(correctanswers, weight);
exam.add(studentsanswer);
exam.add(studentsanswer2);
exam.add(studentsanswer3);

console.log(
  exam.avg()
);

console.log (
  exam.min(2)
);

console.log(
  exam.max(2)
);

console.log(
  exam.lt(5)
);

console.log(
  exam.gt(5)
);