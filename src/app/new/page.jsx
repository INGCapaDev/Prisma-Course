'use client';

import { useRouter } from 'next/navigation';

const NewPage = () => {
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });
    const data = await response.json();
    console.log(data);
    router.push('/');
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <form className='bg-slate-800 p-10 w-1/4' onSubmit={onSubmit}>
        <label htmlFor='title' className='font-bold text-sm'>
          Titulo de la tarea
        </label>
        <input
          type='text'
          id='title'
          className='border border-gray-400 p-2 mb-4 w-full text-black'
          placeholder='Titulo'
        />
        <label htmlFor='description' className='font-bold text-sm'>
          Descripción de la tarea
        </label>
        <textarea
          name=''
          id='description'
          cols='30'
          rows='3'
          className='border border-gray-400 p-2 mb-4 w-full text-black'
          placeholder='Describe tu tarea'></textarea>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Crear
        </button>
      </form>
    </div>
  );
};
export default NewPage;
