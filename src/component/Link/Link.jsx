import PropTypes from "prop-types";

const Link = ({ rout }) => {
    return (
        <div>
            <li className="mr-3">
                <a href={rout.path}>{rout.name}</a>
            </li>
        </div>
    );
};
Link.propTypes = {
    rout: PropTypes.object
}

export default Link;