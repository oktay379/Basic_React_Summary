import React from 'react';
import "../style.css";

// showMustTasks ilk basta false app.jsx'de tanimlandi ve props olarak alindi
// todo dediğimiz zaten todos'dan geliyor todos'da [] dizin icinde title ve id degerlerine sahip 
// showMustTasks false olarak app.jsx dosyasinda verildi
function List({ todos, showMustTasks }) {
  
  // true olursa todos false olursa [] bos dizin olur bu durumu app.js icerisindeki true false button ayarlar
  const filteredTodos = showMustTasks ? todos : [];

  return (
    <div>
      <img className='profile-set' src="https://picsum.photos/seed/picsum/200/300" alt="" />
      <ul className="list-group my-3">
        {filteredTodos.map(todo => (  
          <span>
            {todo.title}
          </span>
        ))}
      </ul>
    </div>
  );                
}

export default List;
