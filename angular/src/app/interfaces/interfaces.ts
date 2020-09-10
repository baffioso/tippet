export interface Issue {
    category: string;
    description?: string;
    image?: string[];
    location: [number, number];
    timestamp: Date;
    status: string;
}

export interface GeocodeAddress {
    valid: boolean;
    message: string;
}
