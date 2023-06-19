import AsyncSelect from "react-select/async";
import PropTypes from "prop-types";

let timeout = null;

const SearchableSelect = ({ onChange, fetchOptions, ...rest}) => {

    const promiseOptions = (inputValue, callback) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            searchOptions(inputValue, callback);
        }, 1000)
    };

    const searchOptions = (inputValue, callback) => {
        return fetchOptions(inputValue)
            .then(res => callback(res.map((el)=> ({
                label: el?.original_url.replace(/^.+\\/,''), value: el?.id
            }))));
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
    onChange: PropTypes.func.isRequired,
    fetchOptions: PropTypes.func.isRequired
}
export default SearchableSelect