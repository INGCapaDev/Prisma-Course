async function loasTask() {
  return fetch('http://localhost:3000/api/tasks').then(
    async (res) => await res.json()
  );
}

const HomePage = async () => {
  const tasks = await loasTask();

  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>
        {tasks.map((task) => (
          <div key={task.id} className='bg-slate-900 p-3'>
            <h2 className='text-3xl font-bold'>{task.title}</h2>
            <p className='text-sm text-slate-500'>{task.description}</p>
            <p className='text-xs text-slate-100'>
              {new Date(task.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HomePage;
