import { useState } from 'react';
import ImgContainer from './components/ImgContainer';
import List from './components/List';
import { products as productsObject } from './data/product';
import "./style.css";
import ImgPerson from './components/ImgPerson';
import ProfileCard from './components/ProfileCard';


function App() {

  const [products, setProducts] = useState(productsObject);

  const [newItem, setNewItem] = useState("");     // new item -> ""

  const [todos, setTodos] = useState([]);         // todos -> []

  const [showMustTasks, setShowMustTasks] = useState(false);    // showMustTasks -> false

  const [selectedTask, setSelectedTask] = useState("");     // selectedTask -> ""

  // To Do List function
  function handleSubmit(event) {
  
    event.preventDefault();    //  sayfayı yenileme onlemis oldu

    // yazılan her bir task buradaki todos dizinine aktarilmis oldu
    // prev buradaki mevcut listeyi tutmayı saglamis oldu {[...], [...], [...], [...]} seklinde
    // prev + [{}] seklinde
    // prev, ile {}  obje icerisine bilgiler ekleniyor ve dizinler olusuyor ve sıralanıyor
    setTodos(prev => {
      return [
        ...prev, 
        {
          id: crypto.randomUUID(), title: newItem     
        }
      ]
    });

    console.log(todos)  // arama cubuguna yazilan deger ve atanilan id degeri consola yansitildi

    setNewItem("");   // arama cubugunu yinelemek icin yazildi

  }


  // List Delete Function
  // buradaki newId ile todo.id denk olmadıgı icin filtreleme islemi ile direkt silinmis oldu 
  // newId zaten tanimlanmamis bos bir tanim
  // return sonrası cagrıldıgında todo.id ile cagrıldı ve ! kullanildigi icin false oldu ve filter calismis oldu
  function deleteTask(newId) {
    setTodos(prev => {      // prev burada mevcut listeyi temsil ediyor
      return prev.filter(todo => todo.id !== newId)
    })
  }
  
  // List Add Function
  // addId bilgisine eger ben todo.id bilgisini verirsem todo.id === addId esitlik true donecektir
  // if blok calisacak ve setSelectedTask title bilgisi verilmis olacaktir
  // addId cunku arguman olarak verilecek asagida 
  function addTask(addId) {
    const selectedTodo = todos.find(todo => todo.id === addId);
    if (selectedTodo) {       // deger find bulunduysa true doner kosul gerceklesir
      setSelectedTask(selectedTodo.title);  // secilen degerin title bilgisi alinmis oldu boylelikle
    }
  }




  return (                   
  <>
    
    <div className='card profile-card border border-success mt-3'>
      <ProfileCard task={selectedTask} />       {/* deger props olarak gonderildi */}
    </div>


    <div className='row'>          

      {/* To Do Tasks */}
      {/* Kullanıcı her form calistiginda onSubmit ile handleSubmit fonksiyonunu calistiracaktir */}
      {/* onSubmit gibi onChange'de bir react ozelligidir burada input icerisinde her hangi bir degisiklik yapildiginda calisacaktir */}
      {/* setNewItem girilen metni saklar ve form calistiginda handlesubmit uzerindeki title yerine gecer */}
      {/* 
        value degeri input girilen yazan direkt degerdir "asdad" olsaydi sayfa acıildiginda gozukecekti
        biz burada newItem("") verdigimiz icin her seferinde bos olacaktir input degeri
      */}
      <div className='col-sm-6 container'>
    
        <div className='my-5'>

          <h5 className='mb-3'>Task Input</h5>

          <form onSubmit={handleSubmit} className="form-size">

            <label className="form-label">Task Giriniz:</label>

            <input style={{width:"40rem"}} onChange={(event) => setNewItem(event.target.value)} value={newItem} className='form-control' type="text"/>

            <div>
              <button type="submit" className="btn btn-sm btn-primary mt-3">Submit</button>
            </div>

          </form>


          <h5 className='mt-4'>To Do Tasks</h5>

          {/* task list */}
          <ul className='mt-4 list-group' style={{width:"40rem"}}>

            {todos.map(todo => {
              return (   
                <li className='list-group-item' key={todo.id}>
                  <div className='row'>

                    <div className='col-sm-4'>
                      <input className="form-check-input fs-5" type="checkbox" value="" id="flexCheckDefault"/>
                      <span className="text-body-secondary ms-3">Check Me!</span>
                    </div> 

                    <div className='col-sm-4'>
                      <span>{todo.title}</span>
                    </div>

                    <div className='col-sm-4'>
                      
                      <button className="btn btn-sm btn-danger" onClick={() => deleteTask(todo.id)}>
                        Delete Me
                      </button>

                      <button 
                        type="button" 
                        className="ms-3 btn btn-sm btn-success" 
                        onClick={() => addTask(todo.id)}>
                          Add Me
                      </button>

                    </div>

                  </div>
                </li>
              )
            })}

          </ul>
        </div>
      </div>


      {/* Must to do Tasks */}
      <div className="col-sm-5" style={{marginTop:"2rem"}}>
        <div className="card" style={{ width: "30rem" }}>
          <h3 className="container mt-2 card-header"> {todos.length} Must to do Tasks </h3>
          <div className="card-body">
            <h4>Gorev Portre Secim:</h4>
            {/* Yazılan gorevleri siralamami saglamis oldu */}
            <List todos={todos} showMustTasks={showMustTasks}/>
          </div>
          <div className="card-footer">
            <button className="btn btn-sm btn-primary" onClick={() => setShowMustTasks(!showMustTasks)}>
              Gorevleri Sirala
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Images */}
    <div className='row'>
      <div className="col-sm-12">
        <div className='container'>

          <h2>Choose Images for the Task</h2>
          <ImgContainer products={products}/>

        </div>
      </div>
    </div>


    {/* Persons */}
    <div className='row mt-5'>
      <div className="col-sm-12">
        <div className='container'>

          <h2>Choose Your Person</h2>
          <ImgPerson products={products}/>

        </div>
      </div>
    </div>

    </>
  )
}



export default App