import React, { useState } from 'react';

const NumberSelector = () => {
  const [number, setNumber] = useState(5); // initial number
  const min = 1; // minimum number
  const max = 20; // maximum number
  const range = 2; // range of numbers to display around the selected number

  const decrease = () => {
    if (number > min) {
      setNumber(number - 1);
    }
  };

  const increase = () => {
    if (number < max) {
      setNumber(number + 1);
    }
  };

  return (
    <div style={styles.container}>
      {/* <h1 style={styles.title}>Number of Passengers</h1> */}
      <div style={styles.slider}>
        <button onClick={decrease} style={{ ...styles.button, ...styles.counterButtonStyle }}>
          {"-"}
        </button>
        <div style={styles.numbersContainer}>
          {Array.from({ length: range * 2 + 1 }, (_, index) => {
            const num = number - range + index;
            const isWithinRange = num >= min && num <= max;
            const size = number === num ? 24 : 12; // Adjust size based on selected number
            return (
              isWithinRange && (
                <div
                  key={num}
                  style={{
                    ...styles.circle,
                    fontSize: size,
                    opacity: number === num ? 1 : 0.2,
                  }}
                >
                  {num}
                </div>
              )
            );
          })}
        </div>
        <button onClick={increase} style={{ ...styles.button, ...styles.counterButtonStyle }}>
          {"+"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#1c1c1d',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    borderBottomWidth: '2px',
    borderRadius: '12px',
    borderColor: '#FF9900',
    height: '45px',
    width: '100%',

  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  slider: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    borderRadius: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    backgroundColor: 'transparent',
  },
  counterButtonStyle: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  numbersContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    width: '20%',
    height: '80%',
    backgroundColor: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
};

export default NumberSelector;
