// import { useEffect, useState } from "react";
import { AppUi } from "./AppUI.js";
import { TodoProvider } from "./TodoContext/TodoContext.js";

function App() {

  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );

}

export default App;
