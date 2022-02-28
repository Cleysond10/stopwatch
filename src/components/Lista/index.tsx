import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface IProps {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}
 
export default function Lista({ tarefas, selecionaTarefa }: IProps) {

  return (
    <aside className={style.listaTarefas}>
      <h2 > Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
          selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}
