import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactSelect from "react-select";
import { makes } from "../../constants";
import { OptionType } from "../../types";

type SearchProps = {
    styling : string;
}
// aynı dosyada birden fazla component tutma örn. (2. component)
const SearchButton = ({styling} : SearchProps) => {
    return <button className={`ml-3 z-10 ${styling}`}>
        <img src="magnifying-glass.svg" width={40} height={40} alt="" />
    </button>
};

const SearchBar = () => {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [params, setParams] = useSearchParams();

    // url güncelleme
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(make !== "" && model  === ""){
            setParams({make: make.toLowerCase()})
        } else if (make !== "" && model !== ""){
            setParams({
                make : make.toLowerCase(),
                model : model.toLowerCase(),
            })
        } else {
            alert("Lütfen Marka ve Model Giriniz")
        }
    }



    // useMemo hook -> ile bir değeri hesaplar ve bu değeri bileşenin 
    // bir sonraki render sırasında hesaplamadan önce kullanılır 
    // gereksiz hesaplamaların önüne geçer, maliyetli işlemlerde tercih edilir.

    const options: OptionType[] = useMemo(
        () =>
            makes.map((item) => ({
                label: item,
                value: item,
            })), [makes]
    );


    return (
        <form 
        onSubmit={handleSubmit}
        className="searchbar gap-3">
            <div className="searchbar__item text-black">
                <ReactSelect
                    onChange={(e : OptionType | null ) => e && setMake(e.value)}
                    options={options}
                    className="w-full" />
                    <SearchButton styling="sm:hidden"/>
            </div>
            <div className="searchbar__item">
                <img
                    src="/model-icon.png"
                    width={25}
                    className="absolute ml-4"
                />
                <input type="text" placeholder="Örn. 740d" className="searchbar__input text-black rounded"
                    onChange={(e) => setModel(e.target.value)}
                />
                <SearchButton styling="sm:hidden"/>
            </div>
            <SearchButton styling="max-sm:hidden"/>
        </form>
    )
}

export default SearchBar;