import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from '../interfaces/Product.interfaces';


interface useProducArgs {
    product: Product;
    onChange?: (args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}


export const useProduct = ( { onChange, product, value = 0, initialValues }:useProducArgs ) => {
    
    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false);


    const increaseBy = ( value:number ) => {

        let newValue = Math.max(counter + value, 0);    //valor que tengo vs mi piso q es 0

        if( initialValues?.maxCount ) {
            newValue = Math.min( initialValues.maxCount, newValue ) //valor que tengo vs mi tope q es el maxCount, si es q viene...
        }

        setCounter( newValue ) 

        onChange && onChange({ count: newValue, product}); //si tengo onChange ejecutalo, sino no hagas nada
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if ( !isMounted.current) return;
        
        setCounter( value )
    }, [ value ])
    
    useEffect(() => {
        isMounted.current = true;   //el componente fue utilizado, entonces montado en true
    }, [])
    

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset
    }
    
}
