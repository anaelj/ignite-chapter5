
import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

interface SearchResultProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>
    onAddToWishList: (id: number) =>void;
}

export function SearchResults({results, onAddToWishList}: SearchResultProps) {
    
    const totalPrice = useMemo(() => {
        return results.reduce((acc, item) => {
            return acc += Number(item.price);
        }, 0);
    }, [results])

    return (
        <div>
            <h2>{totalPrice}</h2>    

            {results.map(product => {
                return (
                    <ProductItem 
                        key={product.id}
                        product={product}
                        onAddToWishList={onAddToWishList} />
                )
            })}
        </div>
    )
}
