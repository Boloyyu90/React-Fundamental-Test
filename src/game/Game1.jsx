import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Game1 = () => {
  const [originalValue, setOriginalValue] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleStartGame = () => {
    setOriginalValue(generateRandomNumber(11, 20));
    setAttempts(0);
    setGameOver(false);
    setGameStarted(true);
  };

  const handleResetGame = () => {
    handleStartGame();
    setUserInput('');
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleGuess = () => {
    if (gameOver) {
      handleResetGame();
      return;
    }

    if (userInput === '') {
      toast.error('Inputan Tidak Boleh Kosong');
      return;
    }

    const userGuess = parseInt(userInput, 10);

    if (userGuess < originalValue) {
      toast.error('Nilai Inputan Terlalu Kecil');
    } else if (userGuess > originalValue) {
      toast.error('Nilai Inputan Terlalu Besar');
    } else {
      toast.success('Congratulation! Anda Menang');
      setGameOver(true);
    }

    setAttempts((prevAttempts) => prevAttempts + 1);

    if (attempts === 3) {
      toast.error('Game Over');
      setGameOver(true);
    }
  };

  return (
    <div>
      <h1> Number Guessing Game</h1>
   
    <div style={{ textAlign: 'left' }}>
      
      {gameStarted ? (
        <div className="d-flex justify-content-start align-items-center mb-3">
            <div className="col-md-6 ms-3 mt-2">
              <ol>
                <li>Each player gets 4 chances to guess.</li>
                <li>Number range is between 11-20</li>
                <li>You can reset the number after 4 wrong answers</li>
              </ol>
              
              <label htmlFor="Input3 ms-3" className="d-block text-start">Input Angka</label>
            <input
              type="number"
              value={userInput}
              onChange={handleInputChange}
              disabled={gameOver}
              className="form-control"
              />
              <p className="mt-4">Nilai Aslinya adalah {originalValue}</p>
             <p className="text-start mt-4">Jumlah Tebakan : {attempts}</p>
            <button onClick={handleGuess} className="btn btn-primary">
              Tebak Angka
            </button>
            {gameOver && (
              <button onClick={handleResetGame} className="btn btn-danger">
                Reset
              </button>
            )}
          </div>
          <div className="justify-content-start">
           
          </div>
        </div>
      ) : (
        <div className="text-start mt-4 ms-3">
          <p>Ketentuan Permainan :</p>
          <ol>
              <li>Each player gets 4 chances to guess.</li>
              <li>Number range is between 11-20</li>
              <li>You can reset the number after 4 wrong answers</li>
          </ol>
          <p>Silahkan Mulai Permainan</p>
          <button onClick={handleStartGame} className="btn btn-success">
            Mulai Permainan
          </button>
        </div>
      )}
      </div>
      </div>
  );
};

export default Game1;
