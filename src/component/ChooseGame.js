import React, { useState } from 'react';

export default function ChooseGame() {
  const [gameList, setGameList] = useState([
    {id:'perso',name: 'Jeu des personnages'}]);


    function chooseGame(game) {
      console.log(game)
    }
  

  return (
    <div className='flex justify-center items-center'>
      {gameList.map(item => 
      <div key={item.id} onClick={function(){chooseGame(item.id)}} className='cursor-pointer bg-zinc-300 game rounded w-28 h-28 m-2 flex items-center' >
          <div className='text-center'>{item.name}</div>
      </div>
      )}
    </div>
  );
}