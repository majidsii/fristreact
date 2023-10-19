import { list } from "postcss"
import "./index.css"
const AshkalList = [
  { id:1, shekl:"moraba", arz:130, ertefa:130, gheymat:100},
  { id:2, shekl:"mostatil", arz:140, ertefa:160, gheymat:65},
  { id:3, shekl:"moraba", arz:90, ertefa:90, gheymat:43},
  { id:4, shekl:"moraba", arz:25, ertefa:25, gheymat:15},
]



const fristItem = AshkalList[0]
const secondItem = AshkalList[1]
const ThirdItem = AshkalList[2]


export default function Ashkal(){

  
  
  return (<div dir="rtl" className="bg-zinc-950 flex flex-col h-screen justify-center gap-14 "  > 
    <Header/>
    
    <ListItem {...fristItem}/>
    <ListItem {...secondItem}/>
    <ListItem {...ThirdItem}/>
    
  </div>)
}

function ListItem(props) {

  return (
  <div className=" bg-slate-100 flex flex-row justify-around items-center text-3xl rounded-lg mx-20 h-32">
    <span className="basis-0.5">{props.id}</span> 
    <span className="basis-0.5">{props.shekl}</span>
    <span className="basis-1">{props.ertefa}</span>
    <span className="basis-1">{props.arz*props.ertefa}</span>
    <span className="basis-1">{(props.ertefa+props.arz)*2}</span>
    <span className="basis-1">{props.gheymat}</span>
    <span className="basis-">{props.gheymat}</span>
  </div>)
}

function Header() {
  return (
  <div className=" bg-slate-100 flex flex-row justify-around items-center text-3xl rounded-lg mx-20 h-32">
    <span className="basis-1" >RADIF</span> 
    <span className="basis-1">SHEKL</span>
    <span className="basis-1">ERTEFA</span>
    <span className="basis-1">MASAHAT</span>
    <span className="basis-1">MOHIT</span>
    <span className="basis-1">GHEYMAT</span>
    <span className="basis-">GHEYMAT KOL</span>
    
  </div>)
}

