import React, { useState } from 'react';

function Dashboard() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [streak, setStreak] = useState(0);
  const [mood, setMood] = useState('🙂');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gamified User Dashboard</h1>
      <p>XP: {xp}</p>
      <p>Level: {level}</p>
      <p>Streak: {streak} days</p>
      <p>Last Mood: {mood}</p>
      <select onChange={(e) => setMood(e.target.value)} value={mood}>
        <option>🙂</option>
        <option>😐</option>
        <option>😢</option>
        <option>😡</option>
      </select>
    </div>
  );
}

export default Dashboard;