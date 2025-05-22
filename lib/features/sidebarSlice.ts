import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SidebarItem {
  title: string;
  url: string;
  icon: string;
}

interface SidebarState {
  items: SidebarItem[];
}

const initialState: SidebarState = {
  items: [
    { title: "Palindrome - Method 1", url: "/palindrome-1", icon: "👉" },
    { title: "Palindrome - Method 2", url: "/palindrome-2", icon: "👉" },
    { title: "Fibonacci - Method 1", url: "/fibonacci-1", icon: "👉" },
    { title: "Fibonacci - Method 2", url: "/fibonacci-2", icon: "👉" },
    { title: "Merge Arrays - Method 1", url: "/merge-arrays-1", icon: "👉" },
    { title: "Merge Arrays - Method 2", url: "/merge-arrays-2", icon: "👉" },
    { title: "Binary Search - Iterative", url: "/binary-search-iterative", icon: "👉" },
    { title: "Binary Search - Recursive", url: "/binary-search-recursive", icon: "👉" },
    { title: "Factorial - Recursive", url: "/factorial-recursive", icon: "👉" },
    { title: "Factorial - Iterative", url: "/factorial-iterative", icon: "👉" },
    { title: "Reverse String - Method 1", url: "/reverse-string-1", icon: "👉" },
    { title: "Reverse String - Method 2", url: "/reverse-string-2", icon: "👉" },
    { title: "Sort Array - Bubble", url: "/sort-bubble", icon: "👉" },
    { title: "Sort Array - Quick", url: "/sort-quick", icon: "👉" },
    { title: "Sort Array - Merge", url: "/sort-merge", icon: "👉" },
    { title: "Prime Check - Method 1", url: "/prime-check-1", icon: "👉" },
    { title: "Prime Check - Method 2", url: "/prime-check-2", icon: "👉" },
    { title: "GCD - Euclidean", url: "/gcd-euclidean", icon: "👉" },
    { title: "GCD - Brute Force", url: "/gcd-brute", icon: "👉" },
    { title: "LCM - Using GCD", url: "/lcm-gcd", icon: "👉" },
    { title: "LCM - Iterative", url: "/lcm-iterative", icon: "👉" },
    { title: "Anagram Check - Sort", url: "/anagram-sort", icon: "👉" },
    { title: "Anagram Check - Count", url: "/anagram-count", icon: "👉" },
    { title: "Matrix Transpose", url: "/matrix-transpose", icon: "👉" },
    { title: "Matrix Rotation", url: "/matrix-rotation", icon: "👉" },
    { title: "Sum of Digits", url: "/sum-of-digits", icon: "👉" },
    { title: "Armstrong Number", url: "/armstrong-number", icon: "👉" },
    { title: "String Compression", url: "/string-compression", icon: "👉" },
    { title: "Find Duplicates", url: "/find-duplicates", icon: "👉" },
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