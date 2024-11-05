import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
    const renderItems = () => {
        const itemsCopy = [...items];
        
        itemsCopy.sort((a, b) => a.name.localeCompare(b.name));

        return itemsCopy.map((item) => (
            <Item 
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)}
            />
        ));
    };

    return (
        <div className="item-list">
            {renderItems()}
        </div>
    );
}
