import React from 'react';
import ReactDOM from 'react-dom';

// class Employee extends React.Component{
//   state={counter:0};
//   addEmployee=()=>{
//     this.setState({counter:this.state.counter+1})
//     // this.counter=this.counter+1;
//     // alert("Adding a new employee!!")
//   }
//   render(){
//     return (
//       <div>
//         <h2>Welcome to Employee component!!</h2>
//         <p>
//           <button onClick={this.addEmployee}>Add Employee</button>
//         </p>
//         <p>Counter : <b>{this.state.counter}</b></p> 
//         {/*BY THIS METHOD THE COUNTER INCREMENT IS NOT GETTING RENDERED INT OTHE UI */}
//       </div>
//     )
//   }
// }

// class CountCharacter extends React.Component{
//   constructor(props)
//   {
//     super(props);
//     this.state={
//       message:''
//     };
//   }
//   onChangeMessage=(message)=>
//   {
//     this.setState({
//       message:'Message has '+message.length+' no of characters!'
//     })
//   }
//   render(){
//     return <div>
//       <h2>Welcome to character counter component</h2>
//       <label>Enter message : <input type='text' onChange={e=>this.onChangeMessage(e.target.value)}/></label>
//       <p>
//         <label>
//           {this.state.message}
//         </label>
//       </p>
//     </div>
    
//   }
// }



//INTERCATION BETWEEN REACT COMPONENTS
// class Employee extends React.Component{
//   constructor(props)
//   {
//     super(props);
//     this.state={
//       updatedSalary:parseInt(props.sal)+parseInt(props.specialAllowance)
//       // updatedSalary:null
//     };
//   }
//   getUpdatedSalary=(salary)=>
//   {
//     this.setState({updatedSalary:salary});
//   }
//   render()
//   {
//     return <div>
//       <h2>Employee Details</h2>
//       <p>
//         <label>
//           Employee name : <b>{this.props.name}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Id : <b>{this.props.Id}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Loc : <b>{this.props.Loc}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Updated total Salary: {this.state.updatedSalary}
//         </label>
//       </p>
//       <Salary  sal={this.props.sal} specialAllowance={this.props.specialAllowance} onSalaryChange={this.getUpdatedSalary}></Salary>
//     </div>
//   }
// }

// class Salary extends React.Component{
//   constructor(props)
//   {
//     super(props);
//     this.state={
//       baseSalary:this.props.sal,
//       SpecialAllowance:this.props.specialAllowance,
//     }
//   }
//   updateSalary=()=>{
//     let salary=parseInt(this.refs.baseSal.value)+parseInt(this.refs.specialAllowance.value);
//     this.props.onSalaryChange(salary);
//   }
//   render(){
//     return <div>
//       <h2>Salary Details</h2>
//       <p>
//         <label>
//           Base Salary : <input type='text' ref="baseSal" defaultValue={this.state.baseSalary}/>
//         </label>
//       </p>
//       <p>
//         <label>
//           Special Allowance : <input type='text' ref={"specialAllowance"} defaultValue={this.state.SpecialAllowance}/>
//         </label>
//       </p>
//       <button onClick={this.updateSalary} >Update</button>
//     </div>
//   }
// }


// // const element=<Employee></Employee>
// // const element=<CountCharacter></CountCharacter>

// const element=<Employee Id="101" name="Subrat" Loc="Banagaore" sal="0" specialAllowance="0"></Employee> //INTERCATION BETWEEN REACT COMPONENTS
// ReactDOM.render(element,document.getElementById("root"))


// //REACT COMPONENT COMMUNICATION USING CONTEXT
// const employeeContext=React.createContext();
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       id:101,
//       salary:'15000',
//       dept:'Dev'
//     };
//   }
//   handleSubmit=()=>{
//     this.setState({id:100});
//   }
//   render()
//   {
//     return <div>
//       <h2>App component</h2>
//       <p>
//         <label>
//           Id: {this.state.id}
//         </label>
//       </p>
//       <employeeContext.Provider value={this.state}>
//         <Employee></Employee>
//       </employeeContext.Provider>
//       <p>
//         <button onClick={this.handleSubmit}>Change</button>
//       </p>
      
//     </div>
//   }
// } 

// class Employee extends React.Component{
//   static contextType=employeeContext;
//   render()
//   {
//     return <div>
//       <h2>Employee component</h2>
//       <p>
//         <label>
//           Id: {this.context.id}
//         </label>
//       </p>
//       <Salary></Salary>
//     </div>
//   }
// }

// class Salary extends React.Component{
//   static contextType=employeeContext;
//   render()
//   {
//     return <div>
//       <h2>Salary component</h2>
//       <p>
//         <label>
//           Id: {this.context.id}
//         </label>
//       </p>
//     </div>
//   }
// }

// const element=<App></App>
// ReactDOM.render(element,document.getElementById("root"))

const employeeContext=React.createContext({
  data:'',
  changeEmployeeInfo:()=>{}
})
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:{
        id:101,
        salary:'15000',
        dept:'Dev'
      },changeEmployeeInfo:this.updateEmployeeDetails
    };
  }
  updateEmployeeDetails=()=>{
    this.setState({data:{id:102}})
  }
  render()
  {
    return <div>
      <h2>App component</h2>
      <p>
        <label>
          Id: {this.state.data.id}
        </label>
      </p>
      <employeeContext.Provider value={this.state}>
        <Employee></Employee>
      </employeeContext.Provider>
    </div>
  }
} 

class Employee extends React.Component{
  static contextType=employeeContext;
  render()
  {
    return <div>
      <h2>Employee component</h2>
      <p>
        <label>
          Id: {this.context.data.id}
        </label>
      </p>
      <p>
        <button onClick={this.context.changeEmployeeInfo}>
          Update
        </button>
      </p>
    </div>
  }
}

const element=<App></App>
ReactDOM.render(element,document.getElementById("root"))