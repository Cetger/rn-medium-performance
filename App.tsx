import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import { booksData } from './booksShortList';

import { Book as BookType, BookProps, BooksProps, CartProps } from './App.type';

const Books = React.memo(({ books, addToCart }: BooksProps) => {
  return (
    <>
      {books.map(({ isbn, thumbnailUrl, title, authors, shortDescription }) => (
        <Book
          key={isbn}
          thumbnailUrl={thumbnailUrl}
          title={title}
          authors={authors}
          shortDescription={shortDescription}
          addToCart={addToCart}
        />
      ))}
    </>
  );
});

const Book = React.memo(
  ({
    thumbnailUrl,
    title,
    authors,
    shortDescription,
    addToCart
  }: BookProps) => {
    return (
      <View style={styles.bookContainer}>
        <View style={styles.flex}>
          <Image source={{ uri: thumbnailUrl }} style={styles.image} />
        </View>
        <View style={styles.bookInfoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>by {authors.map(e => e)}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {shortDescription}
          </Text>
          {addToCart && (
            <TouchableOpacity onPress={() => addToCart({ title })}>
              <View style={styles.buttonContainer}>
                <Icon name={'home'} size={14} color={'white'} />
                <Text style={styles.buttonText}>Add To Cart</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
);

const Logo = () => {
  return (
    <View style={styles.flex}>
      <Text style={styles.headerText}>Books Shop</Text>
    </View>
  );
};

const HeaderCart = ({ cart, emptyCart }: CartProps) => {
  return (
    <View style={styles.headerCartContainer}>
      <Logo />
      <TouchableOpacity disabled={!cart.length} onPress={emptyCart}>
        <Icon
          name='trash-o'
          size={30}
          color={!cart.length ? 'gray' : 'tomato'}
        />
      </TouchableOpacity>

      <View style={styles.basketContainer}>
        <Icon name='shopping-basket' size={30} color='tomato' />
        <Text
          style={[
            { fontSize: 18 },
            !cart.length ? { color: 'gray' } : { color: 'tomato' }
          ]}
        >
          {cart.length}
        </Text>
      </View>
    </View>
  );
};

const App = () => {
  const [books] = useState(booksData);
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((book: BookType) => {
    setCart(cart => [...cart, book]);
  }, []);

  const emptyCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderCart cart={cart} emptyCart={emptyCart} />
        <View style={styles.divider} />
        <Books books={books} addToCart={addToCart} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
