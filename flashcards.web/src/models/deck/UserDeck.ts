import UserCard from "../card/UserCard";

interface UserDeck {
    id: string,
    name: string,
    cardlist: UserCard[]
}

export default UserDeck;