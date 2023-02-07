import { CartContextEl } from "./cartContext"
import { FavoritesContextEl } from "./favoritesContext"

export default function MyContextProvider({ children }: ChildrenProp) {
    return (
        <CartContextEl>
            <FavoritesContextEl>
                {children}
            </FavoritesContextEl>
        </CartContextEl>
    )

}
