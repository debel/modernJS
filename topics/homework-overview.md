# Homework 1 Overview
---

### Common errors

- Inefficient searching of arrays
- Not storing intermediate results in variables
- No error handling
---

### Inefficient searching of arrays
```javascript
  for (student of students) {
    for (studentCourse) {
      for (course of courses) {
        if (studentCourse === course.section) {
          // ...
        }
      }
    }
  }
```
---

### Not storing intermediate results in variables
All of these create new arrays. This has both performance and memory impact. 
```javascript
  Object.keys(obj).forEach(doStuff);
  // ...
  Object.keys(obj)[0]
  // ...
  for (let key of Object.keys(obj)) { /* ... */ }
  
```
---

### No error handling

```javascript
  for (let student of students) {
    // what if student.standing is not defined?
    studentsPerStanding[student.standing] += 1;
  }
```
---

#### How many students are there per standing (freshman, sophomore, etc)?

```javascript
  function studentsPerStanding() {
    return students.reduce((result, student) => {
      if (!student.standing || !result[student.standing]) {
        console.error(student, 'has no or invalid standing`);
      }

      result[student.standing] += 1;
      return result;
    }, { freshman: 0, sophomore: 0, junior: 0, senior: 0 });
  }
```

---

#### How many courses are there per department?
```javascript
  function coursesPerDepartment() {
    return courses.reduce((result, course) => {
      if (!course.department) {
        console.error(course, 'has no department');
      }
      if (!result[course.department]) {
        result[course.department] = 0;
      }

      result[course.department] += 1;
      return result;
    }, {});
  }
```
---

#### Which student has the biggest sum of credits for their enrolled classes?

```javascript


```
---

#### How many students are in each department?
```javascript
  function studentsPerDepartment() {
    const courseDepartments = courses.reduce((result, course) => {
      result[course.section] = course.department;
      return result;
    }, {});

    return students.reduce((result, student) => {
      const studentDepartments = new Set(
        student.courses.map(section => courseDepartments[section])
      );
      
      studentDepartments.keys().forEach((department) => {
        if (!result[department]) { result[department] = 0; }

        result[department] += 1;
      });
      
      return result;
    }, {});
  }
```
---

#### How many students does each professor teach to?
```javascript
  function studentsPerProfessor() {
    const courseProfessors = courses.reduce((result, course) => {
      result[course.section] = course.instructor;
      return result;
    }, {});

    return students.reduce((result, student) => {
      const studentProfessors = new Set(
        student.courses.map(section => courseProfessors[section])
      );

      studentProfessors.forEach(professor => {
        if (!result[professor]) { result[professor] = 0; }

        result[professor] += 1;
      });

      return result;
    }, {});
  }
```
---

#### Which course has the most students enrolled in it?
```javascript
  function courseWithMostStudents() {
    // we've already written a function to calculate students per course
    const studsPerCourse = Object.entries(studentsPerCourse());

    // studsPerCourse is now in the format [["COS310", 12], ["INF240", 15]]
    return studsPerCourse.reduce((mostPopular, contender) => {
      const [mostPopularSection, mostNumerOfStudents] = mostPopular;
      const [contenderSection, contenderNumberOfStudents] = contender;

      return (contenderNumberOfStudents > mostNumberOfStudents)
        ? contender
        : mostPopular;
    }, studsPerCourse[0]);
  }
```
---

#### These are just examples

These are *NOT* the only possible solutions!!


Often using `reduce` is not the best way to express code in a readable manner.


I used it to demonstrate a functional approach.
