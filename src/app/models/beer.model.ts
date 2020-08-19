export interface BeerModel {
    id: string;
    name: string;
    tagline: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    volume: {
        value: number,
        unit: string
    };
    food_pairing: string[];
}

export function createBeer(params: Partial<BeerModel>) {
    return {
        ...params
    } as BeerModel;
}
