'use client';

import { useRouter } from 'next/navigation';

const TaskCard = ({ task }) => {
  const router = useRouter();

  return (
    <div className='bg-slate-900 p-3'>
      <h2 className='text-3xl font-bold'>{task.title}</h2>
      <p className='text-sm text-slate-500'>{task.description}</p>
      {/* <p className='text-xs text-slate-100'>
        {new Date(task.createdAt).toLocaleDateString()}
      </p> */}
      <button
        className='px-4 py-2 bg-blue-500 text-white rounded mt-2 text-xs'
        onClick={() => {
          router.push(`/task/edit/${task.id}`);
        }}>
        Editar
      </button>
    </div>
  );
};
export default TaskCard;
