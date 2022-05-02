interface Book {
    isbn?: string,
    title: string,
    thumbnailUrl: string,
    authors: string[],
    shortDescription: string
}

export interface BookProps extends Book {
    addToCart?: any
}

export interface BooksProps {
    books: Book[],
    addToCart: any
}

export interface Cart {
    name: string,
    // price: number
}

export interface CartProps {
    cart: Cart[]
    emptyCart: any
}