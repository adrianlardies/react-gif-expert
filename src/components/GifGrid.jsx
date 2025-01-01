import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && (<h2>Cargando...</h2>)} {/* AND lógico. */}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} /> // Otra técnica, esparcimos las propiedades del images en el GifItem.
        ))}
      </div>
    </>
  );
};
