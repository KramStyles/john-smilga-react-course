/*Template generated by WebStorm on Wednesday (4/26/23), 5:27 PM.
* Author: kramstyles
* Filename: Modal.jsx
*/

import {FaTimesCircle} from "react-icons/fa";

const Modal = () => {
    return (
        <div className="my-modal-overlay">
            <div className="my-modal-dialog">
                <div className="card w-100">
                    <div className="card-header text-end">
                        <FaTimesCircle className="text-primary cur-pointer fs-4"/>
                    </div>
                    <div className="card-body d-flex align-items-center text-justify p-4">
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias blanditiis
                            dolore excepturi exercitationem fugit impedit in maxime est modi perferendis?
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-sm btn-primary">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;