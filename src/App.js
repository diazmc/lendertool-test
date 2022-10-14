import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import './App.css'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm'
import Todo from './Todo';

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
  const [tasks, setTasks] = useState([]);

  const tasksList = tasks.map((task) => {
    return <Todo id={task.id} name={task.name} key={task.id} deleteTask={deleteTask} />
  })

	const handleOnClick = (page) => {
		console.log('open');
		if(!openForm) {  
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};

  function addTask(name) {
    const newTask = {id: `${nanoid()}`, name: name};
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  return (
    <Container maxWidth="sm">
    <AccountMenu onClick={handleOnClick} />
      {openForm && (
        <div>
          <BasicForm addTask={addTask} />
        </div>
        )
      
      }
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Todo List Items
            <ul className='taskList'>
              {tasksList}
            </ul>
          </Typography>
        </Box>
    </Container>
  );
}
