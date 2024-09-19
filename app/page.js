import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Go to Week 2 Assignments</Link>
      </p>
    </div>
  );
};

export default HomePage;