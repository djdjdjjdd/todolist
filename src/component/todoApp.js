import React from "react";
import ToDoForm from "./todoForm";
import TodoList from "./todoList";
class ToDoApp extends React.Component {
    render() {
        return(
            <>
                <div className="box border rounded justify-content-center mx-auto p-2" style={{width:'1000px', height:'500px'}}>
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <h1>
                                Todolist

                            </h1>
                        </div>
                        <div className="row" style={{marginLeft: '500px'}}>
                            <ToDoForm/>
                        </div>
                        <div className="p-2" style={{marginRight: '5px'}}> 
                            <TodoList/>
                        </div>

                    </div>

                </div>


            </>
        )
    }
}

export default ToDoApp;