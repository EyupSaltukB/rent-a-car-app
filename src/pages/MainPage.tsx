import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { fetchCars } from "../utils";
import { CarType } from "../types";
import Card from "../components/Card";
import ShowMore from "../components/ShowMore";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CustomFilter from "../components/CustomFilter";
import { fuels, years } from "../constants";

const MainPage = () => {

  const [params] = useSearchParams();

  // useState ile tuttuğumuz verinin tipini 'Generic' ile belirleriz!
  const [cars, setCars] = useState<CarType[]>([]);

  // urlden limiti al yoksa 5'e eşitle
  const limit = Number(params.get("limit")) || 5; 


  useEffect(() => {
    // urldeki parametrelerden obje oluşturma
    const paramsObj = Object.fromEntries(params.entries());
    console.log(paramsObj);

    fetchCars(paramsObj)
      .then((data: CarType[]) => setCars(data))
      .catch((err) => console.log(err))
  }, [params])

  // veri boş mu kontrol
  const isDataEmpty = cars.length < 1 || !cars;

  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        {/* başlık alanı */}
        <div className="home_text-container my-3">
          <h1 className="text-4xl font-extrabold">Araç Kataloğu</h1>
          <p className="text-gray-400">Araçları Birlikte Keşfedelim!</p>
        </div>
        {/* filtreleme */}
        <div className="home_filters">
          <SearchBar/>
          <div className="home__filter-container flex gap-3 mt-2 sm:flex flex-co">
            <CustomFilter title="Yakıt Tipi" options={fuels}/>
            <CustomFilter title="Üretim Yılı" options={years}/>
          </div>
        </div>

        {/* listeleme alanı */}
        {isDataEmpty ? (
          <div className="home_error-container">
            <h2>Üzgünüz! Herhnagi Bir Sonuç Bulunamadı.</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((data, key) =>( 
              <Card key={key} car={data} />
              ))}
            </div>
            <ShowMore limit={limit} isNext={limit < 30}/>
          </section>
        )}
        <div></div>
      </div>
    </div>
  )
}

export default MainPage;