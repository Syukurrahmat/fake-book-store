import useLocalStorage from "@/lib/hooks/useLocalStorage"
import { createContext, useState, SetStateAction } from "react"

type ICartData = {
    [key: string]: number
}

interface ICartContext {
    cart: ICartData,
    setCart: (
        isbn13: string,
        update: SetStateAction<number>
    ) => void
}

const CartContext = createContext<ICartContext>({
    cart: {},
    setCart: () => { }
})

export default CartContext

export function CartContextEl({ children }: ChildrenProp) {
    const [cart, setCartState] = useLocalStorage<ICartData>("cart", {})
    const setCart: ICartContext['setCart'] = (isbn13, update) => {
        setCartState(prevState => {
            const value = (typeof update == 'function') ? update(cart[isbn13] || 0) : update
            if (value) return { ...prevState, [isbn13]: value }

            const { [isbn13]: deleted, ...newStateValue } = prevState
            return newStateValue
        })
    }

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )

}
