let fetchedData = [];
const params = new URLSearchParams(window.location.search);
const menu = params.get("menu");

const fetchData = async (activePagination) => {
  try {
    const params = {
      apikey: "261e1d515f89e240b0166bcb82e1f73c",
      ts: "1",
      hash: "1cd0991ea53a232e466487aa7256b0dd",
    };
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/${menu}?offset=${activePagination}`,
      {
        params: params,
      }
    );
    fetchedData = response.data.data;
  } catch (error) {
    //Handle error
    console.error(error);
  }
};

export { fetchData, fetchedData };
