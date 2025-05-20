interface plan {
    id: number;
    title: string;
    price: string;
    features: string[];
    image: string;
    testimonial: {
        text: string;
        author: string;
    };
}

export type { plan };