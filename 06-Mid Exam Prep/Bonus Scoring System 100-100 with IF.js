function bonusScoringSystem (input) {

    let studentsCount = Number(input.shift())
    let lecturesCount = Number(input.shift())
    let additionalBonus = Number(input.shift())

    input.map(x => Number(x))

    let scoredStudents = [];

    // {total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})

    for (let i = 0; i < input.length; i++) {
        let totalBonus = 0; 
        let studentAttendance = Number(input[i]); 

        totalBonus =  studentAttendance / lecturesCount * (5 + additionalBonus);
        scoredStudents.push(totalBonus);
        //console.log(scoredStudents)
    }

    let topScore = Math.max(...scoredStudents);
    let indexTopStudent = scoredStudents.indexOf(topScore);
    let attended = input[indexTopStudent];
    
    //console.log(indexTopStudent)
    if (topScore > 0) {
    console.log(`Max Bonus: ${Math.ceil(topScore)}.`);
    console.log(`The student has attended ${Math.ceil(attended)} lectures.`)
    } else {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`)
    }
}
bonusScoringSystem([
    '2', '30', '14', '8',
    '23'
  ]
  
);