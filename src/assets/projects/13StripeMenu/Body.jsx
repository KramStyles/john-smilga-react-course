/*Template generated by WebStorm on Friday (4/28/23), 5:09 PM.
* Author: kramstyles
* Filename: Body.jsx
*/

import {useStripeContext} from "./context";

const Body = () => {
    const {closeSubmenu} = useStripeContext();
    return (
        <div style={{minHeight: "50vh"}} onMouseOver={closeSubmenu}/>
    );
};

export default Body;