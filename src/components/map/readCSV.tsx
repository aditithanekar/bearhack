// MyComponent.tsx

import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState<{ message: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>{data.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
