import { useQuery } from '@tanstack/react-query';
import { getGroupsApi } from '@/api/groupsApi';
import StudentsInterface from '@/types/StudentsInterface';
import { getStudentsDb } from '@/db/studentDb';

interface StudentsHookInterface {
  students: StudentsInterface[];
}

const useStudents = (): StudentsHookInterface => {
  // const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['students'],
    queryFn: () => getStudentsDb(),
    enabled: false,
  });

  return {
    students: data ?? [],
  };
};

export default useStudents;
