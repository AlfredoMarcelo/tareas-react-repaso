import React, {useState} from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css'
import Tarea from './Tarea'

//contendra el componente formulario y las tareas

function ListaDeTareas(){

  const [tareas, setTareas] =useState([]);

  const agregarTarea = tarea => {
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas]; // se declara tarea primero para que se añada al comienzo
      setTareas(tareasActualizadas);                  //Spread ..tareas, esta desempacando todos los elementos y luego se vuelven a empacar en tareasActualizadas porque tiene un []
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => { //map necesita que se retorne un valor
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    })
    setTareas(tareasActualizadas);
  }


  return(
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) => 
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}

          />
          )
        }

      </div>
    </>
  );
}

export default ListaDeTareas;