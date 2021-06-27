
import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

interface SearchResultProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>
}

export function SearchResults({results}: SearchResultProps) {
    
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
                    <ProductItem product={product} />
                )
            })}
        </div>
    )
}
