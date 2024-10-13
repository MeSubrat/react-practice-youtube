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

//INTERACTION BETWEEN REACT COMPONENTS
// const employeeContext=React.createContext({
//   data:'',
//   changeEmployeeInfo:()=>{}
// })
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       data:{
//         id:101,
//         salary:'15000',
//         dept:'Dev'
//       },changeEmployeeInfo:this.updateEmployeeDetails
//     };
//   }
//   updateEmployeeDetails=(eId,eSalary,eDepartment)=>{
//     this.setState(prevState => ({
//       data:{
//         ...prevState.data,
//         id:eId,
//         salary: eSalary,
//         dept: eDepartment

//       }
//     }))
//   }
//   render()
//   {
//     return <div>
//       <h2>App component</h2>
//       <p>
//         <label>
//           Id: {this.state.data.id}
//         </label>
//       </p>
//       <p>
//         <label>
//           Salary: {this.state.data.salary}
//         </label>
//       </p>
//       <p>
//         <label>
//           Department: {this.state.data.dept}
//         </label>
//       </p>
//       <employeeContext.Provider value={this.state}>
//         <Employee></Employee>
//       </employeeContext.Provider>
//     </div>
//   }
// } 

// class Employee extends React.Component{
//   static contextType=employeeContext;
//   updateDetails=()=>{
//     let eId=this.refs.eid.value;
//     let eSalary=this.refs.eSal.value;
//     let eDepartment=this.refs.eDept.value;
//     this.context.changeEmployeeInfo(eId,eSalary,eDepartment);
//   }
//   clearHandler=() => {
//     let eId="";
//     let eSalary="";
//     let eDepartment="";
//     this.refs.eid.value="";
//     this.refs.eSal.value='';
//     this.refs.eDept.value='';
//     this.context.changeEmployeeInfo(eId,eSalary,eDepartment);

//   }
//   render()
//   {
//     return <div>
//       <h2>Employee component</h2>
//       <p>
//         <label>
//           Id: {this.context.data.id}
//         </label>
//       </p>
//       <p>
//         <label>
//           Salary: {this.context.data.salary}
//         </label>
//       </p>
//       <p>
//         <label>
//           Department: {this.context.data.dept}
//         </label>
//       </p>
//       <p>
//         <label>
//           Change Id: <input type='text' ref={"eid"} />
//         </label>
//       </p>
//       <p>
//         <label>
//           Change Salary: <input type='text' ref={"eSal"} />
//         </label>
//       </p>
//       <p>
//         <label>
//           Change Dept: <input type='text' ref={"eDept"} />
//         </label>
//       </p>
//       <p>
//         <button onClick={this.updateDetails}>
//           Update
//         </button>
//         <button onClick={this.clearHandler}>Clear All</button>
//       </p>
//     </div>
//   }
// }

// const element=<App></App>
// ReactDOM.render(element,document.getElementById("root"))


//CREATE A SIMPLE FORM USING FORMIK
// import { useFormik } from 'formik';
// import { render } from '@testing-library/react';
// const EmployeeComponent=()=>
// {
//   const formik=useFormik({
//     initialValues:{
//       Id:"",
//       Name:"",
//       Location:"",
//       Salary:""
//     },
//     onSubmit:values=>{
//       alert(JSON.stringify(values));
//     }
//   });
//   render()
//   {
//     return <div>
//       <h2>Employee Details</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <p>
//           <label htmlFor='Id'>Employee Id:</label>
//           <input id='Id' name='Id' value={formik.values.Id} onChange={formik.handleChange}/>
//         </p>
//         <p>
//           <label htmlFor='Name'>Employee Name:</label>
//           <input id='Name' name='Name' value={formik.values.Name} onChange={formik.handleChange}/>
//         </p>
//         <p>
//           <label htmlFor='Location'>Employee Location:</label>
//           <input id='Location' name='Location' value={formik.values.Location} onChange={formik.handleChange}/>
//         </p>
//         <p>
//           <label htmlFor='Salary'>Employee Salary:</label>
//           <input id='Salary' name='Salary' value={formik.values.Salary} onChange={formik.handleChange}/>
//         </p>
//         <p>
//           <button type='submit'>Submit</button>
//         </p>
//       </form>
//     </div>
//   }
// }

// const element=<EmployeeComponent></EmployeeComponent>
// ReactDOM.render(element,document.getElementById("root"));

//LIFTING STATE UP 
// class OrderComponent extends React.Component{
//   constructor(props){
//     super(props)

//     this.state={quantity:"",address:""}
//   }
//   orderInfoChange=val=>{
//     this.setState({quantity:val});
//   }
//   addressChange=val=>{
//     this.setState({address:val});
//   }
//   clearTheChange=()=>{
//     this.setState({address:"",quantity:""});
//   }
//   render(){
//     return <div style={{border:'3px solid black'}}>
//       <h2>Product Odrder Summary..</h2>
//       <ProductInformationComponent quantity={this.state.quantity}  onQuantityChange={this.orderInfoChange}></ProductInformationComponent>
//       <AddressComponent address={this.state.address} onAddressChange={this.addressChange}></AddressComponent>
//       <SummaryComponent quantity={this.state.quantity} address={this.state.address} onQuantityChange={this.orderInfoChange} 
//                         clearChange={this.clearTheChange} ></SummaryComponent>

//     </div>
//   }
// }
// class ProductInformationComponent extends React.Component{
//   constructor(props){
//     super(props)
//   }

//   handleChange =e=>{
//     this.props.onQuantityChange(e.target.value);
//   }
//   render(){
//     return(
//     <div style={{border:'3px solid black'}}>
//       <h2>Product Infromation</h2>
//       <p>
//         <label>
//           <select>
//             <option value={'product-1'}>Product-1</option>
//             <option value={'product-2'}>Product-2</option>
//             <option value={'product-3'}>Product-3</option>
//           </select>
//         </label>
//       </p>
//       <p>
//         <label>
//           Enter Quantity<input type='text' value={this.props.quantity} onChange={this.handleChange}></input>
//         </label>
//       </p>
//     </div>
//     )
//   }
// }
// class AddressComponent extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   handleChange=e=>{
//     this.props.onAddressChange(e.target.value);
//   }
//   render(){
//     return <div style={{border:'3px solid black'}}>
//       <h2>Address Information...</h2>
//       <p>
//         <label>
//           Address : <textarea value={this.props.address} onChange={this.handleChange}></textarea>
//         </label>
//       </p>
//     </div>
//   }


// }
// class SummaryComponent extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   handleChange=e=>{
//     this.props.onQuantityChange(e.target.value)
//   }
//   handleClear=()=>{
//     this.props.clearChange();
//   }
//   render(){
//     return <div style={{border:'3px solid black'}}>
//       <h2>Summary Component.. </h2>
//       <p>
//         <label>Product name : <b>Product - 1</b></label>
//       </p>
//       <p>
//         <label>
//           Enter Quantity<input type='text' value={this.props.quantity} onChange={this.handleChange}></input>
//         </label>
//       </p>
//       <p>
//         <label>
//           Address : <b>{this.props.address}</b>
//         </label>
//       </p>
//       <p>
//         <button>Place Order</button>
//         <button onClick={this.handleClear}>Clear</button>
//       </p>
//     </div>
//   }
// }



// const element=<OrderComponent></OrderComponent>
// ReactDOM.render(element,document.getElementById("root"))


//REFS IN REACT 
class QuantityIncrement extends React.Component{
  constructor(props)
  {
    super(props);
    this.quantityRef=React.createRef();
  }
  incrementQuantity=()=>{
    this.quantityRef.current.value++;
  }
  decrementQuantity=()=>{
    this.quantityRef.current.value--;
  }
  render()
  {
    alert("Enter the quantity value...");
    return( 
    <div>
      <p>
        <label>Enter quantity: <button onClick={this.decrementQuantity}>-</button><input type='text' ref={this.quantityRef}/><button onClick={this.incrementQuantity}>+</button></label>
      </p>

    </div>
    )
  }

}

class LogInComponent extends React.Component{
  constructor(props)
  {
    super(props);
    this.userNameRef=React.createRef();
  } 
  componentDidMount(){
    this.userNameRef.current.focus();
  }
  render(){
    return <div>
      <h2>Login!!</h2>
      <p>
        <label>
          UserName : <input type='text' ref={this.userNameRef}/>
        </label>
      </p>
      <p>
        <label>
          UserName : <input type='text'/>
        </label>
      </p>
      <p>
        <button>LogIn</button>
      </p>
    </div>
  }
}

const element=<LogInComponent></LogInComponent>
ReactDOM.render(element,document.getElementById('root'));
