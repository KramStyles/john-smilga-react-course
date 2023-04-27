/*Template generated by WebStorm on Thursday (4/27/23), 12:01 PM.
* Author: kramstyles
* Filename: SubMenu.jsx
*/

import {useStripeContext} from "./context";
const SubMenu = () => {
    const {isSubmenu} = useStripeContext();
    return (
        <div className="container">
            <div className={`my-tooltip shadow${isSubmenu? " show": ""}`}></div>
        </div>
    );
};

export default SubMenu;
