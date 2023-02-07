import useLocalStorage from "@/lib/hooks/useLocalStorage"
import { createContext, useState, SetStateAction } from "react"

type IFavoritesData = string[]

interface IFavoritesContext {
    favorites: IFavoritesData,
    toggleFavorites: (
        isbn13: string
    ) => void
    isFavorite: (isbn13: string) => boolean
}

const FavoritesContext = createContext<IFavoritesContext>({
    favorites: [],
    toggleFavorites: () => { },
    isFavorite: () => false
})

export default FavoritesContext

export function FavoritesContextEl({ children }: ChildrenProp) {
    const [favorites, setFavoritesState] = useLocalStorage<IFavoritesData>("favorites", [])
    const isFavorite: IFavoritesContext['isFavorite'] = (isbn13) => favorites.includes(isbn13)
    const toggleFavorites: IFavoritesContext['toggleFavorites'] = (isbn13) => {
        setFavoritesState(preState => isFavorite(isbn13) ?
            preState.filter(v => v !== isbn13) :
            preState.concat(isbn13)
        )
    }

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorites, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )

}
