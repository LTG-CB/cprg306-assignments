"use client";
import React, {useState} from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import ItemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(ItemsData);

  const handleAddItem = (newItem) => {
      setItems([...items, newItem]);
  };

  return (
      <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} />
      </div>
  );
}
