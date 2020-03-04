import React,{Component} from 'react'
import logo from './logo.svg'
import './App.css'
import { Welcome1,Welcome2 } from './components/CompType'
import Clock from './components/Clock'
import StateTest from './components/StateTest'
import Cart from './components/Cart'
import LifeCycle from './components/Lifecycle'

export default class App extends Component{
    formatName(user){
        return user.firstName +' '+user.lastName
    }
    state = {prop:'some prop'}
    componentDidMount(){
        this.setState({prop:''})

        setTimeout(()=>{
            this.setState({prop:''})
        },2000)
    }
    render(){
        const name = 'Hellow World！'
        const user = {
            firstName:'Xu',
            lastName:'Tiancheng'
        }
        return<div>
            <h1>{name}</h1>
            <hr />
            <h1>{this.formatName(user)}</h1>
            <hr />
            <img src={logo} style={{width:'100px'}} alt=''/>
            <hr />
            <Welcome1 name='name1'></Welcome1>
            
            <Welcome2 name='name2'></Welcome2>
            <hr />
            <Clock></Clock>
            <hr />
            <StateTest></StateTest>
            <hr />
            <Cart></Cart>
            <hr />
            <LifeCycle></LifeCycle>
        </div>
    }
}