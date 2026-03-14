
import './App.css'
import Todo  from './todo';
import Foods from './todo';
import Batsman from './batsMan';
import Users from './users';
function App() {

  const click= ()=>{
  alert('clicked me')
}

     function handleC(){
      alert('I am clicked')
     }


     const  handleAdd = (num)=>{
      const newNum =num+5;
      alert(newNum);
     }
  
//  const foods =['Rice', 'Fish', 'Watar', 'solt','suger'];
   return (
    <>
    {
      //  foods.map(food=> <Foods food={food}></Foods>)
    }


<Batsman></Batsman>
<Users></Users>

<button onClick={handleC}>click me</button>
<button onClick={function handle(){
  alert('clicked')
}}>click me</button>

<button onClick={click}>click</button>
<button onClick={()=> alert('click4')}>click4</button>
<button onClick={()=> handleAdd(10)}>click5</button>


          {/* <h1>Get started</h1> */}
{/* <Todo task='Learn React' isDone={true}></Todo> */}
{/* <Todo task='Learn Next js' isDone={false}></Todo> */}
{/* <Person></Person> */}
{/* <Player name='tamim' runs='6000'></Player> */}
{/* <Person></Person> */}
{/* <Sports></Sports> */}
{/* <Student name='topu' age='25'></Student> */}
{/* <Student name='hasan' age='26'></Student> */}
{/*  */}
{/*  */}

    </>
  )
}

function Player({name, runs}){
  return(
    <div className='border 3px red'>
      <h3>name: {name}</h3>
      <p>runs:{runs}</p>
    </div>
  )
}
// const {name, tech }= {name:'mehedi', tech:'js'}

function Person(){
  const age =17;
  const name ='topu';
  const personeStyle ={
    color:'red',
    textAlign:'right'
  }
  return(
    <p style={personeStyle} >I am a Person {name} {age}</p>
  )
}

function Sports(){
  return(
    <div style={{border:'3px solid blue',
      borderRadius:'20px'
    }}>
      <h3>Cricket</h3>
      <p>playing and loosing</p>
    </div>
  )
}

function Student(props){
  console.log(props)
  return(
    <div className='student'>
      <p>name:{props.name}</p>
      <p>Deperment:{props.age}</p>
    </div>
  )
}


export default App
