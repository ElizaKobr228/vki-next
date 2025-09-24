'use client';

import type StudentInterface from '@/types/StudentsInterface';
import styles from './Groups.module.scss';
import useStudents from '@/hooks/useStudents';

const Student = (): React.ReactElement => {
  const { students } = useStudents();

  return (
    <div className={styles.Student}>
      {students.map((student: StudentInterface) => (
        <h2 key={student.id}>
          {student.first_name}
        </h2>
      ))}
    </div>
  );
};

export default Student;
