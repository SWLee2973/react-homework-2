
import React from 'react';

export interface taskProps {
  task: {id:string, title: string, state: string};
  onArchiveTask?: string;
  onPinTask?: string;
}

const Task: React.FunctionComponent<taskProps> = ({ 
  task: {id, title}, 
  onArchiveTask, 
  onPinTask }) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  )
}


export default Task;