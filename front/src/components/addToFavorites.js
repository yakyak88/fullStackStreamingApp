// add to favorites component custom hook
import { useState } from "react";

const useAddToFavorites = (id, arr, e) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const addToFavorites = () => {
        e.preventDefault();
        setIsFavorited(!isFavorited);
        if (isFavorited) {
            const index = arr.indexOf(id);
            if (index > -1) {
                arr.splice(index, 1);
            }
        } else {
            arr.push(id);
        }
    };

    return {
        isFavorited,
        addToFavorites,
    };
};

export default useAddToFavorites;
