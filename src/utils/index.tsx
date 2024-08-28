import { colors, options } from "../constants";

type FetchProps = {
    limit?: string;
    make?: string;
    model?: string;
    fuel?: string;
    year?: string;
}


export async function fetchCars({
    limit = '5',
    model = '',
    make,
    fuel = '',
    year = '',
}: FetchProps) {

    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&limit=${limit}&model=${model}&fuel_type=${fuel}&year=${year}`, options);

    const data = await res.json()

    return data;
}

// görsel oluşturma fonks. 
export const generateImage = (
    car: any,
    angle?: string
) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', car.make);
    url.searchParams.append(
        'modelFamily',
        car.model.split(' ')[0].split('/')[0]
    );
    url.searchParams.append('zoomType', 'fulscreen');
    url.searchParams.append('angle', String(angle));

    //rastgele renk tanımlama
    const i = Math.round(Math.random() * colors.length);
    url.searchParams.append('paintId', colors[i]);

    return String(url);
};