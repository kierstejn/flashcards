
export interface CardRead {
    reverse: boolean,
    front: {
        text: string,
        imageUrl?: string
    },
    back: {
        text: string,
        imageUrl?: string
    }
}