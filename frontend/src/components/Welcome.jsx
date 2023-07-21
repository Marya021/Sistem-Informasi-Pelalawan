import React from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      {user && (
        <h1>
          Welcome Back <strong>{user.name}</strong>
        </h1>
      )}
    </div>
  );
};

export default Welcome;
