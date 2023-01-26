/// <reference types="react" />
declare type BusinessProps = {
    id: number;
    name: string;
    image_url: string;
    url: string;
    rating: number;
    price: string;
    location: location;
};
declare type location = {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: display_address;
};
declare type display_address = {
    address1: string;
    address2: string;
};
export default function Business({ id, name, image_url, url, rating, price, location, }: BusinessProps): JSX.Element;
export {};
