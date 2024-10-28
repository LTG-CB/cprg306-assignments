import React from 'react';

export default function ItemList({ items }) {
    const renderItems = () => {
        const itemsCopy = [...items];
        
        itemsCopy.sort((a, b) => a.name.localeCompare(b.name));

        return itemsCopy.map((item) => (
            <div key={item.id} className="item">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Category: {item.category}</p>
            </div>
        ));
    };

    return (
        <div className="item-list">
            {renderItems()}
        </div>
    );
}
