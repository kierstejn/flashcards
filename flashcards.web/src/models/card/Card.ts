
interface Card {
    id: string;
    primaryfronttext: string;
    primarybacktext: string;
    secondarybacktext?: string;
    secondaryfronttext?: string;
    reversed: boolean
}

export default Card;