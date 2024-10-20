import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Go to Week 2 Assignment</Link>
      </p>
      <p>
        <Link href="/week-3">Go to Week 3 Assignment</Link>
      </p>
      <p>
        <Link href="/week-4">Go to Week 4 Assignment</Link>
      </p>
      <p>
        <Link href="/week-5">Go to Week 5 Assignment</Link>
      </p>
      <p>
        <Link href="/week-6">Go to Week 6 Assignment</Link>
      </p>
    </div>
  );
};

export default HomePage;