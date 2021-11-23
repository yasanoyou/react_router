import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return(
    <>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{id}です</p>
    </>
  );
};
