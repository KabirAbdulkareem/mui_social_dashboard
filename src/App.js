import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Navbar from "./components/Navbar";
import AddButton from "./components/AddButton";
import AddModal from "./components/AddModal";

function App() {
  /*   const [openModal, setOpenModal] = useState(false);
   */ return (
    <div>
      <Box>
        <Navbar />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>

        <AddButton />
        <AddModal />
      </Box>
    </div>
  );
}

export default App;
