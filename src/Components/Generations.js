// src/Components/Generation.js
import React from 'react';
import { useParams } from 'react-router-dom';

const generations = {
  gen1: { /* data for generation 1 */ },
  gen2: { /* data for generation 2 */ },
  gen3: { /* data for generation 1 */ },
  gen4: { /* data for generation 2 */ },
  gen5: { /* data for generation 1 */ },
  gen6: { /* data for generation 2 */ },
  gen7: { /* data for generation 1 */ },
  gen8: { /* data for generation 2 */ },
  gen9: { /* data for generation 9 */ },
};

const Generation = () => {
  const { genId } = useParams();
  const generation = generations[genId];

  if (!generation) {
    return <div>Generation not found</div>;
  }

  return (
    <div>
      <h1>{`Generation ${genId.replace('gen', '')}`}</h1>
      {/* Render generation-specific content here */}
    </div>
  );
};

export default Generation;
