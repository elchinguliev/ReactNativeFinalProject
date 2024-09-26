// // import productsData from '@/assets/products.json';  // Adjust path if necessary
// // import React, { useState, useEffect } from 'react';
// // import { View, Text,Image, FlatList, TouchableOpacity ,Button} from 'react-native';
// // import { Link } from 'expo-router';

// // // Define the Product type based on your JSON structure
// // interface Product {
// //   id: number;
// //   name: string;
// //   category: string;
// //   price: number;
// //   description: string;
// //   image: string;
// // }

// // const Home = () => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
// //   const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
// //   const [sortOrder, setSortOrder] = useState<string>('none'); // Sort order state

// //   useEffect(() => {
// //     setProducts(productsData.products);  // Load products from JSON file
// //     setFilteredProducts(productsData.products);  // Initially show all products
// //   }, []);

// //   // Function to filter products by category
// //   const filterProducts = (category: string) => {
// //     var filtered = category === 'All Products' ? products : products.filter(product => product.category === category);
// //     setSelectedCategory(category);
// //     applySort(filtered);  // Apply the current sort order after filtering
// //   };

// //   // Function to sort products by price
// //   const applySort = (productsList: Product[]) => {
// //     var sortedProducts = [...productsList];
// //     if (sortOrder === 'lowToHigh') {
// //       sortedProducts.sort((a, b) => a.price - b.price);
// //     } else if (sortOrder === 'highToLow') {
// //       sortedProducts.sort((a, b) => b.price - a.price);
// //     }
// //     setFilteredProducts(sortedProducts);
// //   };

// //   // Function to handle sorting by price
// //   const handleSort = (order: string) => {
// //     setSortOrder(order);
// //     applySort(filteredProducts);  // Sort the currently filtered products
// //   };

// //   return (
// //     <View style={{ flex: 1, padding: 20 }}>
// //       <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>{selectedCategory}</Text>

// //       {/* Category Buttons */}
// //       <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
// //         <Button
// //           title="All Products"
// //           onPress={() => filterProducts('All Products')}
// //           color={selectedCategory === 'All Products' ? 'blue' : 'gray'}
// //         />
// //         <Button
// //           title="Milk Products"
// //           onPress={() => filterProducts('Milk Products')}
// //           color={selectedCategory === 'Milk Products' ? 'blue' : 'gray'}
// //         />
// //         <Button
// //           title="Liquid"
// //           onPress={() => filterProducts('Liquid')}
// //           color={selectedCategory === 'Liquid' ? 'blue' : 'gray'}
// //         />
// //         <Button
// //           title="Fruit"
// //           onPress={() => filterProducts('Fruit')}
// //           color={selectedCategory === 'Fruit' ? 'blue' : 'gray'}
// //         />
// //       </View>
// //       {/* Sorting Buttons */}
// //       <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
// //         <Button
// //           title="Price: Low to High"
// //           onPress={() => handleSort('lowToHigh')}
// //           color={sortOrder === 'lowToHigh' ? 'blue' : 'gray'}
// //         />
// //         <Button
// //           title="Price: High to Low"
// //           onPress={() => handleSort('highToLow')}
// //           color={sortOrder === 'highToLow' ? 'blue' : 'gray'}
// //         />
// //       </View>

// //       {/* Products List */}
// //       <FlatList
// //         data={filteredProducts}
// //         keyExtractor={(item) => item.id.toString()}
// //         renderItem={({ item }) => (
// //           <View style={{ marginBottom: 20 }}>
// //             <Image
// //               source={{ uri: item.image }}
// //               style={{ width: 100, height: 100, marginBottom: 10 }}
// //               resizeMode="cover"
// //             />
// //             <Text style={{ fontSize: 18 }}>{item.name}</Text>
// //             <Text>{item.category}</Text>
// //             <Text>{item.price} USD</Text>

// //             {/* Link to Product Details */}
// //             <TouchableOpacity style={{ marginTop: 10 }}>
// //               <Link href={`/list/${item.id}`}>
// //                 <Text style={{ color: 'blue' }}>View Details</Text>
// //               </Link>
// //             </TouchableOpacity>
// //           </View>
// //         )}
// //       />
// //     </View>
// //   );
// // };

// // export default Home;

// import productsData from '@/assets/products.json';  // Adjust path if necessary
// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';
// import { Link } from 'expo-router';

// // Define the Product type based on your JSON structure
// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   image: string;
// }

// const Home = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
//   const [sortOrder, setSortOrder] = useState<string>('none');  // For sorting by price
//   const [searchQuery, setSearchQuery] = useState<string>('');  // For search functionality

//   useEffect(() => {
//     setProducts(productsData.products);  // Load products from JSON file
//     setFilteredProducts(productsData.products);  // Initially show all products
//   }, []);

//   // Function to filter products by category
//   const filterProducts = (category: string) => {
//     let updatedProducts = products;

//     if (category !== 'All Products') {
//       updatedProducts = products.filter(product => product.category === category);
//     }

//     // Apply search query after filtering by category
//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter(product =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilteredProducts(updatedProducts);
//     setSelectedCategory(category);
//     setSortOrder('none'); // Reset sort order after filtering
//   };

//   // Function to sort products by price
//   const sortProductsByPrice = (order: string) => {
//     let sortedProducts = [...filteredProducts];

//     if (order === 'low-to-high') {
//       sortedProducts.sort((a, b) => a.price - b.price);
//     } else if (order === 'high-to-low') {
//       sortedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(sortedProducts);
//     setSortOrder(order);
//   };

//   // Function to handle search by name
//   const handleSearch = (query: string) => {
//     setSearchQuery(query);

//     let updatedProducts = products;

//     // Filter by category
//     if (selectedCategory !== 'All Products') {
//       updatedProducts = products.filter(product => product.category === selectedCategory);
//     }

//     // Apply search query
//     if (query) {
//       updatedProducts = updatedProducts.filter(product =>
//         product.name.toLowerCase().includes(query.toLowerCase())
//       );
//     }

//     setFilteredProducts(updatedProducts);
//   };

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>{selectedCategory}</Text>

//       {/* Search Bar */}
//       <TextInput
//         placeholder="Search products by name"
//         value={searchQuery}
//         onChangeText={(query) => handleSearch(query)}
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//           marginBottom: 20,
//           paddingHorizontal: 10,
//         }}
//       />

//       {/* Category Buttons */}
//       <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 ,backgroundColor:"red"}}>
//         <Button
//           title="All Products"
//           onPress={() => filterProducts('All Products')}
//           color={selectedCategory === 'All Products' ? 'blue' : 'gray'}
//         />
//         <Button
//           title="Milk Products"
//           onPress={() => filterProducts('Milk Products')}
//           color={selectedCategory === 'Milk Products' ? 'blue' : 'gray'}
//         />
//         <Button
//           title="Liquid"
//           onPress={() => filterProducts('Liquid')}
//           color={selectedCategory === 'Liquid' ? 'blue' : 'gray'}
//         />
//         <Button
//           title="Fruit"
//           onPress={() => filterProducts('Fruit')}
//           color={selectedCategory === 'Fruit' ? 'blue' : 'gray'}
//         />
//         <Button
//           title="Price: Low to High"
//           onPress={() => sortProductsByPrice('low-to-high')}
//           color={sortOrder === 'low-to-high' ? 'blue' : 'gray'}
//         />
//         <Button
//           title="Price: High to Low"
//           onPress={() => sortProductsByPrice('high-to-low')}
//           color={sortOrder === 'high-to-low' ? 'blue' : 'gray'}
//         />
//       </View>

//       {/* Sorting Buttons for Price */}

//       {/* Products List */}
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={{ marginBottom: 20 }}>
//             <Image
//               source={{ uri: item.image }}
//               style={{ width: 100, height: 100, marginBottom: 10 }}
//               resizeMode="cover"
//             />
//             <Text style={{ fontSize: 18 }}>{item.name}</Text>
//             <Text>{item.category}</Text>
//             <Text>{item.price} USD</Text>

//             {/* Link to Product Details */}
//             <TouchableOpacity style={{ marginTop: 10 }}>
//               <Link href={`/list/${item.id}`}>
//                 <Text style={{ color: 'blue' }}>View Details</Text>
//               </Link>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };
// export default Home;

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
import { useNavigation } from '@react-navigation/native';

import productsData from "@/assets/products.json";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Products");
  const [sortOrder, setSortOrder] = useState<string>("none"); // For price sorting
  const [searchText, setSearchText] = useState<string>(""); // For search functionality

  useEffect(() => {
    setProducts(productsData.products);

    // Load user preferences from AsyncStorage
    const loadPreferences = async () => {
      try {
        const storedCategory = await AsyncStorage.getItem("selectedCategory");
        const storedSortOrder = await AsyncStorage.getItem("sortOrder");
        const storedSearchText = await AsyncStorage.getItem("searchText");

        // Set saved preferences if available
        if (storedCategory) setSelectedCategory(storedCategory);
        if (storedSortOrder) setSortOrder(storedSortOrder);
        if (storedSearchText) setSearchText(storedSearchText);

        // Filter products based on loaded preferences
        var updatedProducts = productsData.products;
        if (storedCategory && storedCategory !== "All Products") {
          updatedProducts = updatedProducts.filter(
            (product) => product.category === storedCategory
          );
        }
        if (storedSearchText) {
          updatedProducts = updatedProducts.filter((product) =>
            product.name.toLowerCase().includes(storedSearchText.toLowerCase())
          );
        }
        setFilteredProducts(updatedProducts);
      } catch (error) {
        console.error("Failed to load preferences:", error);
      }
    };

    loadPreferences(); // Call the function to load preferences
  }, []);

  // Function to filter products by category and store the preference
  const filterProducts = async (category: string) => {
    var updatedProducts = products;

    if (category !== "All Products") {
      updatedProducts = products.filter(
        (product) => product.category === category
      );
    }

    // Apply search filter after category filter
    if (searchText) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
    setSelectedCategory(category);
    setSortOrder("none"); // Reset sort order after filtering

    // Store selected category in AsyncStorage
    try {
      await AsyncStorage.setItem("selectedCategory", category);
    } catch (error) {
      console.error("Failed to save selected category:", error);
    }
  };

  // Function to sort products by price and store the preference
  const sortProductsByPrice = async (order: string) => {
    var sortedProducts = [...filteredProducts];

    if (order === "low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
    setSortOrder(order);

    // Store sort order in AsyncStorage
    try {
      await AsyncStorage.setItem("sortOrder", order);
    } catch (error) {
      console.error("Failed to save sort order:", error);
    }
  };

  // Function to handle search input and store the preference
  const handleSearch = async (text: string) => {
    setSearchText(text);

    var updatedProducts = products;

    // Apply category filter if needed
    if (selectedCategory !== "All Products") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter products by search text
    updatedProducts = updatedProducts.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredProducts(updatedProducts);

    // Store search text in AsyncStorage
    try {
      await AsyncStorage.setItem("searchText", text);
    } catch (error) {
      console.error("Failed to save search text:", error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        {selectedCategory}
      </Text>

      {/* Search Bar */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
        placeholder="Search products..."
        value={searchText}
        onChangeText={handleSearch}
      />

      {/* Category Buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Categories : </Text>
        <Button
          title="All Products"
          onPress={() => filterProducts("All Products")}
          color={selectedCategory === "All Products" ? "blue" : "gray"}
        />
        <Button
          title="Milk Products"
          onPress={() => filterProducts("Milk Products")}
          color={selectedCategory === "Milk Products" ? "blue" : "gray"}
        />
        <Button
          title="Liquid"
          onPress={() => filterProducts("Liquid")}
          color={selectedCategory === "Liquid" ? "blue" : "gray"}
        />
        <Button
          title="Fruit"
          onPress={() => filterProducts("Fruit")}
          color={selectedCategory === "Fruit" ? "blue" : "gray"}
        />
      </View>

      <View style={{ marginHorizontal: 600, marginTop: 5, gap: 10 }}>
        <Button
          title="Price: Low to High"
          onPress={() => sortProductsByPrice("low-to-high")}
          color={sortOrder === "low-to-high" ? "blue" : "gray"}
        />
        <Button
          title="Price: High to Low"
          onPress={() => sortProductsByPrice("high-to-low")}
          color={sortOrder === "high-to-low" ? "blue" : "gray"}
        />
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100, marginBottom: 10 }}
              resizeMode="cover"
            />
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
            <Text>{item.category}</Text>
            <Text>{item.price} AZN</Text>

            {/* Link to Product Details */}
            <TouchableOpacity style={{ marginTop: 10 }}>
              <Link href={`/list/${item.id}`}>
                <Text style={{ color: "blue" }}>View Details</Text>
              </Link>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
export default Home;
