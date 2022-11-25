import React, { useState } from 'react';

const TaskList = () => {
  const [title, setTittle] = useState('');
  const [pCount, setPCount] = useState(1);
  const [showCard, setShowCard] = useState(false);

  return <div>TaskList</div>;
};

export default TaskList;
