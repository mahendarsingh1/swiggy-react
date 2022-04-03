// Libraries
import React from "react";
import PropTypes from "prop-types";

// lodash
import _map from "lodash/map";
import _startCase from "lodash/startCase";
import _toLower from "lodash/toLower";
import _noop from "lodash/noop";

// components
import Paragraph from "../../../../commonComponents/paragraph";

// css
import "./sidebar.css";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        const { categories } = this.props;
        this.state = {
            currentActiveCategory: _toLower(categories[0]),
        };
    }

    renderParagraph = (category) => {
        const { currentActiveCategory } = this.state;
        const isActive = currentActiveCategory === _toLower(category);

        return (
            <Paragraph
                key={category}
                label={_startCase(category)}
                isActive={isActive}
                handleClick={this.handleClick}
            />
        );
    };

    handleClick = (event) => {
        const { target: { innerText } } = event;
        const { onCategoryClick } = this.props;

        this.setCurrentActiveCategory(innerText);
        onCategoryClick(innerText);
    };

    setCurrentActiveCategory = (category) => {
        this.setState({ currentActiveCategory: _toLower(category) });
    };

    render() {
        const { categories } = this.props;

        const links = _map(categories, this.renderParagraph);

        return <div className="sidebar">{links}</div>;
    }
}

Sidebar.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    onCategoryClick: PropTypes.func,
};

Sidebar.defaultProps = {
    categories: [],
    onCategoryClick: _noop,
};

export default Sidebar;
