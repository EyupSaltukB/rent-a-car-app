import Select from "react-select";
import { OptionType } from "../../types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type FilterType = {
    title : string; 
    options : OptionType[];
}

const CustomFilter = ({title, options} : FilterType) => {
    const [selected, setSelected] = useState<OptionType | null>();
    console.log(selected);
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        // url'e eklenen değeri belirle
        const key = title === "Yakıt Tipi" ? "fuel" : "year";
        if(selected?.value){
            // değer varsa url ekle
            params.set(key, selected.value);
        } else{
            // değer yoksa eski değeri sil
            params.delete(key)
        }

        // url güncelle
        setParams(params)
    }, [selected]);

  return (
    <div className="w-fit">
      <Select 
      onChange={(e: OptionType | null) => setSelected(e)}
      options={options} 
      placeholder={title} 
      className="text-black min-w-[100px]"
      />
    </div>
  )
}

export default CustomFilter
