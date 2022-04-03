// Libraries
import PropTypes from "prop-types";

// lodash
import _map from "lodash/map";
import _startCase from "lodash/startCase";
import _toLower from "lodash/toLower";

// css
import "./sidebar.css";

function renderLinks(category, index) {
    const href = `#${_toLower(category)}`;
    const label = _startCase(category);
    const key = `${category}${index}`;
    return (
        <a key={key} href={href}>
            {label}
        </a>
    );
}

function Sidebar(props) {
    const { categories } = props;
    const links = _map(categories, renderLinks);

    return <div className="sidebar">{links}</div>;
}

Sidebar.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
};

Sidebar.defaultProps = {
    categories: [],
};

export default Sidebar;
