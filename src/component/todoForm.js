import React from "react";

class ToDoForm extends React.Component {
    state = {

    }

   handleOnClickSubmit = (event) => {
        event.preventDefault();
        alert(' lõi')

   };

   handleOnChangeJob = (event) => {
        this.setState({
            title:event.target.value,
        })

        }

        render() { 

            return(


                <>
                    <div className="row">
                        <div className="col-7 d-flex">
                            <input type="text" 
                                    class="form-control border btn btn-primary" 
                                    placeholder="công việc" 
                                    aria-label="Username" 
                                    aria-describedby="basic-addon1"
                                    onChange={(event) => this.handleOnChangeJob(event)}
                                    style={{width:'200px', height:'40px'
                                    }}
                                    />
                            <button type="button"
                                    class="btn btn-light border"
                                    onClick={(event) => this.handleOnClickSubmit(event)}
                                    style={{height:'40px'}}
                            >submit</button>
                        </div>
                    </div>
                    {/* <div className="row p-2">
                        <div className="col-7 d-flex">
                            <input type="text" class="form-control" placeholder="thời gian thực hiện" aria-label="Username" aria-describedby="basic-addon1"/>
                            <button type="button" class="btn btn-light">t</button>
                        </div>
                    </div> */}
                </>
            )
        }
    }    




export default ToDoForm;