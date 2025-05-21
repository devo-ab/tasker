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

  const handleAddTask = (newTask) => {
    setTasks([ ...tasks, newTask ]);
    setShowAddModal(false);
  };

  return (
    <div>
      {showAddModal && <AddTaskModal onSave={handleAddTask}></AddTaskModal>}
      <section className="mb-20 lg:px-20" id="tasks">
        <div className="container">
          {/* Search Box */}
          <SearchTask></SearchTask>
          {/* Search Box Ends */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            {/* task action start */}
            <TaskActions onAddClick={() => setShowAddModal(true)}></TaskActions>
            {/* task action end */}

            {/* task list start */}
            <TaskList tasks={tasks}></TaskList>
            {/* task list end */}
          </div>
        </div>
      </section>
    </div>
  );
}
