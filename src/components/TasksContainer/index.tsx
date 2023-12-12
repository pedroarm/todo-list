import React from "react";
import clipboard from "../../assets/clipboard.png";
import { TaskProps } from "../../shared/typing/Task";

import styles from "./styles.module.css";
import { Card } from "..";

interface TasksContainerProps {
	tasks: TaskProps[];
	handleUpdateTask: (id: string) => void;
	handleDeleteTask: (id: string) => void;
}

const TasksContainer: React.FC<TasksContainerProps> = ({
	tasks,
	handleUpdateTask,
	handleDeleteTask,
}) => {
	const tasksCount = tasks.length || 0;
	const doneTasksCount = tasks.reduce((total, task) => (task.done ? total + 1 : total), 0);

	const sortedTasks = tasks.sort((a, b) => {
    if (a.done !== b.done) {
        return a.done ? 1 : -1;
    }

    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
});

	return (
		<div className={styles.container}>
			<header>
				<div>
					<p>Tarefas criadas</p>
					<span>{tasksCount}</span>
				</div>

				<div>
					<p>Concluídas</p>
					<span>
						{doneTasksCount} de {tasksCount}
					</span>
				</div>
			</header>

			<div className={styles.content}>
				{sortedTasks.length ? (
					<div className={styles.list}>
						{sortedTasks.map((task) => (
							<Card
								key={task.id}
								task={task}
								handleUpdateTask={handleUpdateTask}
								handleDeleteTask={handleDeleteTask}
							/>
						))}
					</div>
				) : (
					<div className={styles.emptyContainer}>
						<img src={clipboard} />
						<p>
							<b>Você ainda não tem tarefas cadastradas</b>
							Crie tarefas e organize seus itens a fazer
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default TasksContainer;
