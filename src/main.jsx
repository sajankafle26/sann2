import React from "react";
import ReactDOM from "react-dom/client"
import Website from "./Website";
import A from "./A";
import Counter from "./Counter";
import Cat from "./Cat";
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(<div>
     <Provider store={store}>
<Cat/>
</Provider>
  </div>)