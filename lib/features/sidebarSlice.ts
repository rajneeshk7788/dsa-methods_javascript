import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SidebarItem {
  title: string;
  url: string;
  icon: string;
  details: string;
}

interface SidebarState {
  items: SidebarItem[];
}

const initialState: SidebarState = {
  items: [
    { title: "Palindrome - Method 1", url: "/palindrome-1", icon: "👉", details: "Details for Palindrome - Method 1" },
    { title: "Palindrome - Method 2", url: "/palindrome-2", icon: "👉", details: "Details for Palindrome - Method 2" },
    { title: "Fibonacci - Method 1", url: "/fibonacci-1", icon: "👉", details: "Details for Fibonacci - Method 1" },
    { title: "Fibonacci - Method 2", url: "/fibonacci-2", icon: "👉", details: "Details for Fibonacci - Method 2" },
    { title: "Merge Arrays - Method 1", url: "/merge-arrays-1", icon: "👉", details: "Details for Merge Arrays - Method 1" },
    { title: "Merge Arrays - Method 2", url: "/merge-arrays-2", icon: "👉", details: "Details for Merge Arrays - Method 2" },
    { title: "Binary Search - Iterative", url: "/binary-search-iterative", icon: "👉", details: "Details for Binary Search - Iterative" },
    { title: "Binary Search - Recursive", url: "/binary-search-recursive", icon: "👉", details: "Details for Binary Search - Recursive" },
    { title: "Factorial - Recursive", url: "/factorial-recursive", icon: "👉", details: "Details for Factorial - Recursive" },
    { title: "Factorial - Iterative", url: "/factorial-iterative", icon: "👉", details: "Details for Factorial - Iterative" },
    { title: "Reverse String - Method 1", url: "/reverse-string-1", icon: "👉", details: "Details for Reverse String - Method 1" },
    { title: "Reverse String - Method 2", url: "/reverse-string-2", icon: "👉", details: "Details for Reverse String - Method 2" },
    { title: "Sort Array - Bubble", url: "/sort-bubble", icon: "👉", details: "Details for Sort Array - Bubble" },
    { title: "Sort Array - Quick", url: "/sort-quick", icon: "👉", details: "Details for Sort Array - Quick" },
    { title: "Sort Array - Merge", url: "/sort-merge", icon: "👉", details: "Details for Sort Array - Merge" },
    { title: "Prime Check - Method 1", url: "/prime-check-1", icon: "👉", details: "Details for Prime Check - Method 1" },
    { title: "Prime Check - Method 2", url: "/prime-check-2", icon: "👉", details: "Details for Prime Check - Method 2" },
    { title: "GCD - Euclidean", url: "/gcd-euclidean", icon: "👉", details: "Details for GCD - Euclidean" },
    { title: "GCD - Brute Force", url: "/gcd-brute", icon: "👉", details: "Details for GCD - Brute Force" },
    { title: "LCM - Using GCD", url: "/lcm-gcd", icon: "👉", details: "Details for LCM - Using GCD" },
    { title: "LCM - Iterative", url: "/lcm-iterative", icon: "👉", details: "Details for LCM - Iterative" },
    { title: "Anagram Check - Sort", url: "/anagram-sort", icon: "👉", details: "Details for Anagram Check - Sort" },
    { title: "Anagram Check - Count", url: "/anagram-count", icon: "👉", details: "Details for Anagram Check - Count" },
    { title: "Matrix Transpose", url: "/matrix-transpose", icon: "👉", details: "Details for Matrix Transpose" },
    { title: "Matrix Rotation", url: "/matrix-rotation", icon: "👉", details: "Details for Matrix Rotation" },
    { title: "Sum of Digits", url: "/sum-of-digits", icon: "👉", details: "Details for Sum of Digits" },
    { title: "Armstrong Number", url: "/armstrong-number", icon: "👉", details: "Details for Armstrong Number" },
    { title: "String Compression", url: "/string-compression", icon: "👉", details: "Details for String Compression" },
    { title: "Find Duplicates", url: "/find-duplicates", icon: "👉", details: "Details for Find Duplicates" },
  ],
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<SidebarItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.title !== action.payload);
    },
  },
});

export const { addItem, removeItem } = sidebarSlice.actions;
export default sidebarSlice.reducer; 