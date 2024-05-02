import axios from 'axios';

const baseUrl = 'https://mern-todo-backend-f2iv.onrender.com';

const getTodos = (setToDo) => {
    axios.get(baseUrl).then(({data}) => {
        console.log("data -> ",data);
        setToDo(data);
    })
}

const addToDo = (text,setText,setToDo) => {
    if(text === ''){
        alert('Please enter a ToDo');
        return;
    }else{
        axios.post(`${baseUrl}/save`,{text}).then((data) => {
            console.log(data);
            setText('');
            getTodos(setToDo);
        }).catch((err) => {
            console.log(err);
        })
    }
    
}

const updateToDo = (toDoId,text,setText,setToDo,setIsUpdating) => {
    if(text === ''){
        alert('Please enter a ToDo');
        return;
    }else{
        axios.post(`${baseUrl}/update`,{_id:toDoId,text}).then(() => {
            setText('');
            setIsUpdating(false);
            getTodos(setToDo);
        }).catch((err) => {
            console.log(err);
        })
    }
    
}

const deleteToDo = (toDoId,setToDo)=> {
    axios.post(`${baseUrl}/delete`,{_id:toDoId}).then(() => {
        getTodos(setToDo);
    }).catch((err) => {
        console.log(err);
    })
}

export {getTodos, addToDo,updateToDo,deleteToDo}