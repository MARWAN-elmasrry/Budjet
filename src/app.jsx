import React, { Component } from 'react';

import "./style.css"

class App extends Component {
    state = { 
        curr:"$",
        budget:0,
        ramain:0,
        spent:0,
        dep:"Choose",
        prod1N:"Marketing",
        prod1B:0,
        prod2N:"Finance",
        prod2B:0,
        prod3N:"Sales",
        prod3B:0,
        prod4N:"Human Rasource",
        prod4B:0,
        prod5N:"IT",
        prod5B:0
     }
     

     incerment1= () =>{

        if(this.state.spent == this.state.budget){
            alert("no Budget")
        }
        else{  
            const newprod1=this.state.prod1B+10
            this.setState({prod1B:newprod1})
            const newramain=this.state.ramain-10;
            this.setState({ramain:newramain})
            const newspent=this.state.spent+10;
            this.setState({spent:newspent})
        }
     }
     decerment1=()=>{
        if(this.state.prod1B==0){
            alert("can`t go under zero")
        }
        else{
            if(this.state.ramain == this.state.budget){
                alert("Budget full")
            }
            else{
                const newprod1=this.state.prod1B-10
                this.setState({prod1B:newprod1})
                const newramain=this.state.ramain+10;
                this.setState({ramain:newramain})
                const newspent=this.state.spent-10;
                this.setState({spent:newspent})
            }
        }
        
     }
     delete1=()=>{
        document.getElementById("prod1").remove()
        const newramain=this.state.prod1B+this.state.ramain
        const newspent=this.state.spent-this.state.prod1B
        this.setState({ramain:newramain})
        this.setState({spent:newspent})
     }

     incerment2= () =>{

        if(this.state.spent == this.state.budget){
            alert("no Budget")
        }
        else{  
            const newprod2=this.state.prod2B+10
            this.setState({prod2B:newprod2})
            const newramain=this.state.ramain-10;
            this.setState({ramain:newramain})
            const newspent=this.state.spent+10;
            this.setState({spent:newspent})
        }
     }
     decerment2=()=>{
        if(this.state.prod2B==0){
            alert("can`t go under zero")
        }
        else{
            if(this.state.ramain == this.state.budget){
                alert("Budget full")
            }
            else{
                const newprod2=this.state.prod2B-10
                this.setState({prod2B:newprod2})
                const newramain=this.state.ramain+10;
                this.setState({ramain:newramain})
                const newspent=this.state.spent-10;
                this.setState({spent:newspent})
            }
        }
        
     }
     delete2=()=>{
        document.getElementById("prod2").remove()
        const newramain=this.state.prod2B+this.state.ramain
        const newspent=this.state.spent-this.state.prod2B
        this.setState({ramain:newramain})
        this.setState({spent:newspent})
     }

     incerment3= () =>{

        if(this.state.spent == this.state.budget){
            alert("no Budget")
        }
        else{  
            const newprod3=this.state.prod3B+10
            this.setState({prod3B:newprod3})
            const newramain=this.state.ramain-10;
            this.setState({ramain:newramain})
            const newspent=this.state.spent+10;
            this.setState({spent:newspent})
        }
     }
     decerment3=()=>{
        if(this.state.prod3B==0){
            alert("can`t go under zero")
        }
        else{
            if(this.state.ramain == this.state.budget){
                alert("Budget full")
            }
            else{
                const newprod3=this.state.prod3B-10
                this.setState({prod3B:newprod3})
                const newramain=this.state.ramain+10;
                this.setState({ramain:newramain})
                const newspent=this.state.spent-10;
                this.setState({spent:newspent})
            }
        }
        
     }
     delete3=()=>{
        document.getElementById("prod3").remove()
        const newramain=this.state.prod3B+this.state.ramain
        const newspent=this.state.spent - this.state.prod3B
        this.setState({ramain:newramain})
        this.setState({spent:newspent})
     }

     incerment4= () =>{

        if(this.state.spent == this.state.budget){
            alert("no Budget")
        }
        else{  
            const newprod4=this.state.prod4B+10
            this.setState({prod4B:newprod4})
            const newramain=this.state.ramain-10;
            this.setState({ramain:newramain})
            const newspent=this.state.spent+10;
            this.setState({spent:newspent})
        }
     }
     decerment4=()=>{
        if(this.state.prod4B==0){
            alert("can`t go under zero")
        }
        else{
            if(this.state.ramain == this.state.budget){
                alert("Budget full")
            }
            else{
                const newprod4=this.state.prod4B-10
                this.setState({prod4B:newprod4})
                const newramain=this.state.ramain+10;
                this.setState({ramain:newramain})
                const newspent=this.state.spent-10;
                this.setState({spent:newspent})
            }
        }
        
     }
     delete4=()=>{
        document.getElementById("prod4").remove()
        const newramain=this.state.prod4B+this.state.ramain
        const newspent=this.state.spent-this.state.prod4B
        this.setState({ramain:newramain})
        this.setState({spent:newspent})
     }

     incerment5= () =>{

        if(this.state.spent == this.state.budget){
            alert("no Budget")
        }
        else{  
            const newprod5=this.state.prod5B+10
            this.setState({prod5B:newprod5})
            const newramain=this.state.ramain-10;
            this.setState({ramain:newramain})
            const newspent=this.state.spent+10;
            this.setState({spent:newspent})
        }
     }
     decerment5=()=>{
        if(this.state.prod5B==0){
            alert("can`t go under zero")
        }
        else{
            if(this.state.ramain == this.state.budget){
                alert("Budget full")
            }
            else{
                const newprod5=this.state.prod5B-10
                this.setState({prod5B:newprod5})
                const newramain=this.state.ramain+10;
                this.setState({ramain:newramain})
                const newspent=this.state.spent-10;
                this.setState({spent:newspent})
            }
        }
        
     }
     delete5=()=>{
        document.getElementById("prod5").remove()
        const newramain=this.state.prod5B+this.state.ramain
        const newspent=this.state.spent-this.state.prod5B
        this.setState({ramain:newramain})
        this.setState({spent:newspent})
     }

     depChange=()=>{
        const newdep=document.getElementById("dep-el").value;
        console.log(newdep);
        if(newdep === "markect"){
            this.setState({dep:newdep})
        }
        if(newdep === "finance"){
            this.setState({dep: newdep})
        }
        if(newdep === "sales"){
            this.setState({dep:"sales"})
        }
        if(newdep === "hr"){
            this.setState({dep:"hr"})
        }
        if(newdep === "it"){
            this.setState({dep:"it"})
        }
     }

     changeBtn=()=>{
        const input = document.getElementById('chan-inp').value
        const  newinput=parseFloat(input)
        if( newinput <= this.state.ramain && this.state.ramain != 0 ){
            if( this.state.dep == "markect"){
                const newb = this.state.prod1B + newinput
                this.setState({prod1B: newb })  
                const newramain = this.state.ramain - newinput
                this.setState({ramain: newramain})
                const newspent = this.state.spent + newinput
                this.setState({spent: newspent})
            }
            if( this.state.dep == "finance"){
                const newb = this.state.prod2B + newinput
                this.setState({prod2B: newb })  
                const newramain = this.state.ramain - newinput
                this.setState({ramain: newramain})
                const newspent = this.state.spent + newinput
                this.setState({spent: newspent})
            }
            if( this.state.dep == "sales"){
                const newb = this.state.prod3B + newinput
                this.setState({prod3B: newb })  
                const newramain = this.state.ramain - newinput
                this.setState({ramain: newramain})
                const newspent = this.state.spent + newinput
                this.setState({spent: newspent})
            }
            if( this.state.dep == "hr"){
                const newb = this.state.prod4B + newinput
                this.setState({prod4B: newb })  
                const newramain = this.state.ramain - newinput
                this.setState({ramain: newramain})
                const newspent = this.state.spent + newinput
                this.setState({spent: newspent})
            }
            if( this.state.dep == "it"){
                const newb = this.state.prod5B + newinput
                this.setState({prod5B: newb })  
                const newramain = this.state.ramain - newinput
                this.setState({ramain: newramain})
                const newspent = this.state.spent + newinput
                this.setState({spent: newspent})
            }
            if(this.state.dep==="Choose"){
                alert("please choose department")
            }
        }
        else{
            const alrt = this.state.curr + this.state.ramain 
            alert("The value cannot exceed ramaining found " + alrt )
        }
     }

     changeBudget  = () => {
        const newBudget=document.getElementById('budget').value;
        if(newBudget<this.state.spent){
            alert("you cannot reduce the budget value lower than the spending")
        }else{
            this.setState({budget:newBudget});
            const newramain=newBudget-this.state.spent;
            this.setState({ramain:newramain});
        }
        
    }
     CurrSelect=()=>{
        var newcurr=document.getElementById("curr-el").value;
        if(newcurr === "dollar"){
            this.setState({curr:"$"})
        }
        if(newcurr === "pound"){
            this.setState({curr:"₤"})
        }
        if(newcurr === "euro"){
            this.setState({curr:"€"})
        }
        if(newcurr === "rubee"){
            this.setState({curr:"₹"})
        }
     }
    render() { 
        return <div className="body">
        <div className="container">
                    <h1>Company's Budget Allocation</h1>
                <div className="budget">
                    <div className="bud">
                    <p >
                    Budget : {this.state.curr} 
                    <input type="number" id='budget' onChange={this.changeBudget} />
                    </p>
                    </div>
                    <div className='ram'>
                    <p >
                Ramaining : {this.state.curr} 
                {this.state.ramain}
                    </p>
                    </div>
                    <div className='spen'>
                    <p >
                Spent so far : {this.state.curr} 
                {this.state.spent}
                    </p>
                    </div>
                    <div className="curr">
                        <p>Currency</p><select id="curr-el" onChange={this.CurrSelect}>
                        <option value="dollar">($ Dollar)</option>
                        <option value="pound">(₤ Pound)</option>
                        <option value="euro">(€ Euro)</option>
                        <option value="rubee">(₹ Rupee)</option>
                        </select>
                    </div>
                </div>
                <br />
    
                <h2>Alloction</h2>
                <table>
                    <tr>
                        <th>Department</th>
                        <th>Allocation Budget</th>
                        <th>Increase by 10</th>
                        <th>Decrease by 10</th>
                        <th>Delete</th>
                    </tr>
                    <tr id='prod1'>
                        <td>{this.state.prod1N}</td>
                        <td>
                        {this.state.curr}
                        {this.state.prod1B}
                        </td>
                        <td><button className='btn-inc' onClick={this.incerment1}>+</button></td>
                        <td><button className='btn-dec' onClick={this.decerment1}>-</button></td>
                        <td><button className='btn-del' onClick={this.delete1}>X</button></td>
                    </tr>
                    <tr id='prod2'>
                        <td>{this.state.prod2N}</td>
                        <td>
                        {this.state.curr}
                        {this.state.prod2B}
                        </td>
                        <td><button className='btn-inc' onClick={this.incerment2}>+</button></td>
                        <td><button className='btn-dec' onClick={this.decerment2}>-</button></td>
                        <td><button className='btn-del' onClick={this.delete2}>X</button></td>
                    </tr>
                    <tr id='prod3'>
                        <td>{this.state.prod3N}</td>
                        <td>
                        {this.state.curr}
                        {this.state.prod3B}
                        </td>
                        <td><button className='btn-inc' onClick={this.incerment3}>+</button></td>
                        <td><button className='btn-dec' onClick={this.decerment3}>-</button></td>
                        <td><button className='btn-del' onClick={this.delete3}>X</button></td>
                    </tr>
                    <tr id='prod4'>
                        <td>{this.state.prod4N}</td>
                        <td>
                        {this.state.curr}
                        {this.state.prod4B}
                        </td>
                        <td><button className='btn-inc' onClick={this.incerment4}>+</button></td>
                        <td><button className='btn-dec' onClick={this.decerment4}>-</button></td>
                        <td><button className='btn-del' onClick={this.delete4}>X</button></td>
                    </tr>
                    <tr id='prod5'>
                        <td>{this.state.prod5N}</td>
                        <td>
                        {this.state.curr}
                        {this.state.prod5B}
                        </td>
                        <td><button className='btn-inc' onClick={this.incerment5}>+</button></td>
                        <td><button className='btn-dec' onClick={this.decerment5}>-</button></td>
                        <td><button className='btn-del' onClick={this.delete5}>X</button></td>
                    </tr>
                </table>

                <br />
                <h2>Change allocation</h2>
                <div className="change-all">
                    <div className='chan-all'>
                    <p>Department</p> <select id="dep-el" onChange={this.depChange}>
                        <option value="0">Select department</option>
                        <option value="markect">{this.state.prod1N}</option>
                        <option value="finance">{this.state.prod2N}</option>
                        <option value="sales">{this.state.prod3N}</option>
                        <option value="hr">{this.state.prod4N}</option>
                        <option value="it">{this.state.prod5N}</option>
                        </select>
                    </div>
                    <div className='chan-inp'>
                    <p>{this.state.curr}</p><input type='number' id='chan-inp' />
                    </div>
                    <div className='chan-btn'>
                        <button onClick={this.changeBtn}>Save</button>
                    </div>
                </div>
        </div>    
        </div>;
    }
}
 
export default App;