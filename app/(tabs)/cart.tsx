import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const Cart = () => {
  const [cart, setCart] = useState<{ [key: number]: { product: Product; quantity: number } }>({});

  // Increase Quantity
  const increaseQuantity = (productId: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: {
        ...prevCart[productId],
        quantity: prevCart[productId].quantity + 1,
      },
    }));
  };

  // Decrease Quantity or Remove Item
  const decreaseQuantity = (productId: number) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[productId].quantity > 1) {
        newCart[productId].quantity -= 1;
      } else {
        delete newCart[productId];
      }

      return newCart;
    });
  };

  // Remove Item from Cart
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Your Cart</Text>

      {Object.keys(cart).length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={Object.values(cart)}
          keyExtractor={(item) => item.product.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20 }}>
              <Image
                source={{ uri: item.product.image }}
                style={{ width: 100, height: 100 }}
              />
              <Text>{item.product.name}</Text>
              <Text>{item.product.price} AZN</Text>
              <Text>Quantity: {item.quantity}</Text>

              {/* Increase/Decrease Buttons */}
              <View style={{ flexDirection: "row" }}>
                <Button title="+" onPress={() => increaseQuantity(item.product.id)} />
                <Button title="-" onPress={() => decreaseQuantity(item.product.id)} />
              </View>

              {/* Remove from Cart Button */}
              <Button
                title="Remove from Cart"
                onPress={() => removeFromCart(item.product.id)}
                color="red"
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Cart;
