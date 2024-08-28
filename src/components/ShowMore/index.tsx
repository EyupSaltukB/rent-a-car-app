import { useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

type ShowMoreProps = {
    limit: number;
    isNext: boolean;
};

const ShowMore = ({ limit, isNext }: ShowMoreProps) => {
    const [params , setParams] = useSearchParams();

    // urldeki limite 5 ekler
    const handleNavigate = () => {
        // yeni limiti hesapla
        const newLimit : number = limit + 5 

        // parametreleri silmeden yenisini ekleme
        params.set("limit" , String(newLimit));
        // url güncelle
        setParams(params)
    };

    return (
        <div className="w-full flex-center gap-5 my-7">
            {isNext && (
            <CustomButton 
            title="Daha Fazla" 
            handleClick={handleNavigate} /> 
            )}
        </div>
        )
}

export default ShowMore