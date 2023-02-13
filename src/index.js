// Retrieves all the componants neccesary to create/run/style the page. 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './componants/css/index.css';
import App from './componants/page/App';
import reportWebVitals from './componants/default/reportWebVitals';

// Retrieves the store componant and the redux componant to connect it to the rest of the app.
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// inserts the store componant so that the rest of the app can access it.
  	<Provider store={store}>
		<App />
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
