import FavoritesContext from "@/lib/context/favoritesContext"
import { IconButton, ButtonProps, useToast } from "@chakra-ui/react"
import { IconHeart } from "@tabler/icons-react"
import { useContext } from "react"

interface IToogleFavoriteButton extends ButtonProps{
    isbn13: string
}

export default function ToogleFavoriteButton({ isbn13, ...props }: IToogleFavoriteButton) {
    const { isFavorite, toggleFavorites } = useContext(FavoritesContext)
    const toast = useToast()

    const inFavorite = isFavorite(isbn13)
    const addFavoritesHandler = () => {
        toggleFavorites(isbn13)
        toast.closeAll()
        toast({
            title: !inFavorite ? 'Berhasil ditambahkan ke favorit' : 'Berhasil dikeluarkan dari favorit',
            status: 'success',
            isClosable: true,
            position: 'top',
            variant: 'subtle',
        })
    }

    return (
        <IconButton
            aria-label={inFavorite ? 'Hapus dari daftar favorit' : 'Tambahkan ke daftar favorit'}
            size='sm'
            icon={
                <IconHeart size='75%'
                    fill={inFavorite ? '#3182ce' : 'none'}
                    color={inFavorite ? '#3182ce' : 'currentColor'}
                />
            }
            onClick={addFavoritesHandler}
            {...props}
        />
    )
}