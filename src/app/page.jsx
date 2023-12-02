import TaskCard from '@/components/TaskCard';

async function loadTask() {
  return fetch('http://localhost:3000/api/tasks').then(
    async (res) => await res.json()
  );
}

const HomePage = async () => {
  const tasks = await loadTask();

  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};
export default HomePage;
