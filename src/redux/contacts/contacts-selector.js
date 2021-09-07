import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts;
export const getFilter = (state) => state.filter;
export const getLoader = (state) => state.loader;

export const getFilteredContacts = createSelector(
    [getFilter, getContacts],
    (filterValue, contacts) => {
        return contacts.filter((item) =>
            item.name.toLowerCase().includes(filterValue.toLowerCase()));
    }
);