# fdr-product-card

Este es un paquete de pruebas de despliegue en NPM

### Federico del Rincon

### Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'fdr-product-card;
```


```
<ProductCard 
    product={ product }
    initialValues={{
        count: 6,
        // maxCount: 10,
    }}
>
    {
        ({ reset, count, increaseBy, maxCount, isMaxCountReached}) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```