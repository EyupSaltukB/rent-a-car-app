import { AnimatePresence, motion } from "framer-motion";
import { CarType } from "../../types";
import { generateImage } from "../../utils";


type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    car: CarType
}

const DetailModal = ({ isOpen, closeModal, car }: ModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed inset-0 z-20 bg-black w-screen h-screen bg-opacity-15 flex justify-center items-start p-4">
                <div className="relative bg-white p-6 w-full max-w-lg max-h-[90vh] rounded-2xl flex-col gap-5 shadow-xl overflow-auto">
                    <button className="cursor-pointer p-1 absolute end-1 z-10 top-1 hover:scale-75" onClick={closeModal}>
                        <img src="/close.svg" alt="" />
                    </button>
                    {/* foto alanı */}
                    <div className="flex flex-1 flex-col gap-3 mt-4 mb-5">
                        <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded drop-shadow-lg">
                            <img className="h-full mx-auto object-contain" src={generateImage(car)} alt="" />
                        </div>
                        <div className="flex gap-3">
                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg drop-shadow-lg">
                                <img className="h-full mx-auto object-contain" src={generateImage(car, "29")} alt="" />
                            </div>
                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg drop-shadow-lg">
                                <img className="h-full mx-auto object-contain" src={generateImage(car, "33")} alt="" />
                            </div>
                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg drop-shadow-lg">
                                <img className="h-full mx-auto object-contain" src={generateImage(car, "13")} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* araç bilgileri */}
                    {Object.entries(car)
                        // deleted year info with filtred features
                        .filter(([key]) => key != "year")
                        .map(([key, value]) =>
                            <div key={key} className="flex justify-between">
                                <h4 className="mt-2 capitalize text-gray-500">{key.replace("_", " ")}</h4>
                                <p className="text-black font-bold capitalize ">{value}</p>
                            </div>
                        )}
                </div>
            </motion.div>)}
        </AnimatePresence>
            )
}

export default DetailModal;