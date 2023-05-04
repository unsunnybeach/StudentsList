import { Student } from "./student";

export const StudentsBase = ({ studentsList }) => {
  return (
    <div>

        {studentsList.map((student, index) => (
            <Student key={index} name={student.name} surname={student.surname} grades={student.grades}/>
        ))}

    </div>
  );
};