import { useState } from "react";
import SearchTask from "./card/SearchTask";
import TaskActions from "./card/TaskActions";
import TaskList from "./card/TaskList";
import AddTaskModal from "./card/AddTaskModal";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "i want to learn React",
    tags: ["react", "python", "web"],
    priority: "high",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowAddModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  const handleDelete = (id) => {
    const afterDelete = tasks.filter((task) => task.id !== id);
    setTasks(afterDelete);
  };

  const handleDeleteAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFavIcon = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  };

  const handleSearch = (searchTerm) => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTasks([...filtered])
  };

  return (
    <div>
      {showAddModal && (
        <AddTaskModal
          onCloseClick={handleCloseClick}
          onSave={handleAddTask}
          taskToUpdate={taskToUpdate}
        ></AddTaskModal>
      )}
      <section className="mb-20 lg:px-20" id="tasks">
        <div className="container">
          {/* Search Box */}
          <SearchTask onSearch={handleSearch}></SearchTask>
          {/* Search Box Ends */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            {/* task action start */}
            <TaskActions
              onAddClick={() => setShowAddModal(true)}
              onDeleteAllClick={handleDeleteAll}
            ></TaskActions>
            {/* task action end */}

            {/* task list start */}
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDelete}
              onFav={handleFavIcon}
            ></TaskList>
            {/* task list end */}
          </div>
        </div>
      </section>
    </div>
  );
}
