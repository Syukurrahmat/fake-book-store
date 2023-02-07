// import { CartContext, FavoritesContext } from "@/lib/context/myContext"
import CartContext from "@/lib/context/cartContext"
import { IconButton, IconButtonProps, ThemeTypings, useToast } from "@chakra-ui/react"
import { IconHeart, IconShoppingCart } from "@tabler/icons-react"
import { useContext, useState } from "react"


interface IAddCartButton {
    isbn13: string
    size? : 'xs' | 'sm' | 'md'
    colorScheme?: ThemeTypings["colorSchemes"]
}

export default function AddCartButton({ isbn13, size = 'sm', colorScheme }: IAddCartButton) {
    const { setCart } = useContext(CartContext)
    const toast = useToast()


    const addCartHandler = () => {
        setCart(isbn13, e => e + 1)
        
        toast.closeAll()
        toast({
            title: 'Berhasil dimasukkan ke keranjang',
            status: 'success',
            isClosable: true,
            position: 'top',
            variant:'subtle'
        })
    }

    return (
        <IconButton
            aria-label="Tambahkan ke Keranjang"
            size={size}
            colorScheme={colorScheme || 'blue'}
            icon={<IconShoppingCart size='70%' />}
            onClick={addCartHandler}
        />
    )
}