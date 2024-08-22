import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";
import axios from "axios";

const Gallery = () => {
  const { searchText } = useGlobalContext();

  const url = `https://api.unsplash.com/search/photos/?client_id=${
    import.meta.env.VITE_API_KEY
  }`;

  const {
    data: response,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["images", searchText],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchText}`);

      return result;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>Sorry , there is was a error!!!</h4>
      </section>
    );
  }

  if (response.data.results.length < 1) {
    return (
      <section className="image-container">
        <h4>Sorry, but no images found!</h4>
      </section>
    );
  }
  // console.log(response);

  // console.log(response?.data?.results?.[0]);
  // console.log(searchText);

  return (
    <section className="image-container">
      {response.data.results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            className="img"
            src={url}
            alt={item.alt_description}
            key={item.id}
          />
        );
      })}
    </section>
  );
};
export default Gallery;
