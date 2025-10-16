import React, { useState } from 'react';

const buttonStyle = {
    margin: '0 8px',
    padding: '8px 16px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #333',
    background: '#f0f0f0',
    cursor: 'pointer'
};

const valueStyle = {
    fontSize: '24px',
    margin: '16px 0'
};

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <div style={valueStyle}>Counter: {count}</div>
            <button style={buttonStyle} onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button style={buttonStyle} onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button style={buttonStyle} onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}

export default Counter;