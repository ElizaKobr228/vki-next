'use client';

import type StudentInterface from '@/types/StudentsInterface';
import styles from './Groups.module.scss';
import useStudents from '@/hooks/useStudents';

const Student = (): React.ReactElement => {
  const { students } = useStudents();

  return (
    <div className={styles.Student}>
      {/* {students.map((group: StudentInterface) => (
        <h2 key={students.id}>
          {students.name}
        </h2>
      ))} */}
    </div>
  );
};

export default Student;
