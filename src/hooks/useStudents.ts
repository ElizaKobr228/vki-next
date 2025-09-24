import { useQuery } from '@tanstack/react-query';
import StudentsInterface from '@/types/StudentsInterface';
import { getStudentsApi } from '@/api/studentsApi';

interface StudentsHookInterface {
  students: StudentsInterface[];
}

const useStudents = (): StudentsHookInterface => {
  // const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['students'],
    queryFn: () => getStudentsApi(),
    enabled: false,
  });

  return {
    students: data ?? [],
  };
};

export default useStudents;
