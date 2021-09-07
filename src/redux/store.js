import { configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { contacts } from './contacts/contacts-reducers';

const store = configureStore({
    reducer: contacts,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
    devTools: process.env.NODE_ENV !== 'production',
});

export { store };


// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };


// const mainReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
//     loader: loaderReducer
// });

// const persistedReducer = persistReducer(persistConfig, mainReducer);

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(
//         { serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] } }
//     ), logger],
//     devTools: process.env.NODE_ENV !== 'production',
// });


// const persistor = persistStore(store);

// export  { store, persistor };


