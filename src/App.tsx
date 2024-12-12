import { Box, Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import MediaCard from "./components/MediaCard/MediaCard";
import useFetchData from "./components/Hooks/useFetchData";
import Loader from "./components/Loader/Loader";
const App = () => {
  const { data, error, loading, term, setTerm } = useFetchData();
  if (error) {
    return error.message;
  }

  const searchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#fafafa",
            minHeight: "100vh",
            padding: "12px 30px",
            mt: 2,
          }}
        >
          <h2>Tutorial</h2>
          <Search term={term} searchTerm={searchTerm} />
          {loading ? (
            <Loader />
          ) : (
            data?.map((book) => <MediaCard book={book} key={book.id} />)
          )}
        </Box>
      </Container>
    </>
  );
};

export default App;
