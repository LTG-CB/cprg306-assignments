"use client";

import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import {getItems, addItem} from "../_services/shopping-list-service";


export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    async function loadItems() {
        if (!user) return;

        try {
            const userItems = await getItems(user.uid);
            setItems(userItems);
        } catch (error) {
            console.error("Error loading items:", error);
        }
    }

    async function handleAddItem(newItem) {
        if (!user) return;

        try {
            const itemId = await addItem(user.uid, newItem);
            const itemWithId = { ...newItem, id: itemId };
            setItems((prevItems) => [...prevItems, itemWithId]);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    }

    const handleItemSelect = (item) => {
        const cleanName = item.name
            .split(",")[0]
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g, '')
            .trim();
        setSelectedItemName(cleanName.toLowerCase());
    };

    useEffect(() => {
        loadItems();
    }, [user]);

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
