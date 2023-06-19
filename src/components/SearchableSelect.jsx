import AsyncSelect from "react-select/async";
import PropTypes from "prop-types";

let timeout = null;

const SearchableSelect = ({ onChange, fetchOptions, map, ...rest}) => {

    const promiseOptions = (inputValue, callback) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            searchOptions(inputValue, callback);
        }, 1000)
    };

    const searchOptions = (inputValue, callback) => {
        return fetchOptions(inputValue)
            .then(res => callback(res?.data?.map(map)));
    };

    return (
        <AsyncSelect
            required
            isClearable
            cacheOptions
            onChange={(selected) => onChange(selected)}
            loadOptions={promiseOptions}
            noOptionsMessage={() => 'Start Typing to Search ...'}
            {...rest}
        />
    )
}

SearchableSelect.propTypes = {
    map: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    fetchOptions: PropTypes.func.isRequired
}
export default SearchableSelect