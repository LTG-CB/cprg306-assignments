"use client";

import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import ItemsData from "./items.json";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanName = item.name
            .split(",")[0]
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g, '')  // Removes emojis
            .trim();
        setSelectedItemName(cleanName.toLowerCase());
    };

    if (!user) {
        return <p>Please log in to access the shopping list.</p>;
    }

    return (
        <div className="flex">
            <div className="w-1/2">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </div>
    );
}