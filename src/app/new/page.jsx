'use client';

import { revalidatePath } from 'next/cache';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const NewPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`/api/tasks/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [id]);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!id) {
      await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      return router.push('/');
    }

    await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

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
          value={title}
          onChange={(event) => setTitle(event.target.value)}
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
          placeholder='Describe tu tarea'
          value={description}
          onChange={(event) => setDescription(event.target.value)}></textarea>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Crear
        </button>
      </form>
    </div>
  );
};
export default NewPage;
