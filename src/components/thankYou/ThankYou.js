// react router
import { Link } from "react-router-dom";

// components
import Button, { TYPES } from "../../commonComponents/button/Button";

// css
import "./thankYou.css";

function ThankYou() {
    return (
        <div className="thank-you">
            <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/761f1b117480989.6076bf3919f1e.gif"
                alt="Thank you page"
            />
            <Link to="/" className="link">
                <Button type={TYPES.SECONDARY} label="Back to Home"/>
            </Link>
        </div>
    );
}

export default ThankYou;
