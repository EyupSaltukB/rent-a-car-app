import { useState } from "react";
import { CarType } from "../../types";
import CustomButton from "../CustomButton";
import CarInfo from "./CarInfo";
import DetailModal from "./DetailModal";
import { generateImage } from "../../utils";

interface ICardProps {
    car: CarType;
}

const Card = ({ car } : ICardProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    console.log(car)
    return (
        <div className="car-card group">
            {/* araç ismi */}
            <h2 className="car-card__content-title flex gap-2" >
                {car.make.toUpperCase()} / <h2 className="text-gray-600">{car.model}</h2>
            </h2>

            {/* fiyat alanı */}
            <p className="flex mt-6 text-[32px] gap-1">
                <span className="text-[16px] font-semibold text-green-700">$</span>
                {Math.round(Math.random() * 544) + 550 }
                <span className="text-[16px] font-medium self-end">/ gün</span>
            </p>

            {/* resim alanı */}
            <div className="relative w-full h-50 my-3">
                <img 
                src={generateImage(car)} 
                className="w-full h-full object-contain" 
                />
            </div>

            {/* alt kısım */}
            <div className="w-full mt-2 flex relative">
                <div className="group-hover:invisible mt-2 w-full flex justify-around text-gray-600">
                    <CarInfo 
                    title={car.transmission === "a" ? "Otomatik" : "Manuel"}
                    icon="./steering-wheel.svg"
                    />
                    <CarInfo 
                    title={car.drive?.toUpperCase()}
                    icon="./tire.svg"
                    />
                    <CarInfo 
                    title={car.city_mpg + " MPG"}
                    icon="./gas.svg"
                    />
                </div>
                <div className="car-card__btn-container">
                    <CustomButton 
                    rIcon="/right-arrow.svg" 
                    title="Daha Fazla" 
                    designs="w-full py-[16px]"
                    handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            {/* detay modal */}
            <DetailModal 
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            car={car}
            />
        </div>
    )
}

export default Card;