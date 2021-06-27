import {memo} from 'react';

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
        priceFormatted: string;
    }
    onAddToWishList: (id: number) => void;
}

function ProductItemComponent ({product, onAddToWishList} : ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>   
            <button onClick={()=> onAddToWishList(product.id)}> Add to Wishlist </button>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent , (precProps, nextProps)=> {
    return Object.is(precProps.product, nextProps.product) ;
});


