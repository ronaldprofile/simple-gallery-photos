import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/Global";

export function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Home />
      <GlobalStyles />
    </DndProvider>
  );
}
