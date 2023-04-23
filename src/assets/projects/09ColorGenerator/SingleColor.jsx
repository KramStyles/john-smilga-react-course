import Hex from "./utils";

const SingleColor = ({rgb, index, weight, hexColor}) => {
    const color = `rgb(${rgb.join(",")})`;
    const hexString = Hex(...rgb);
    return (
        <div className={`col-md-2 p-0 ${index >=11 ? "text-light": ""}`} style={{height: 200}}>
            <d className="d-grid h-100 align-items-center justify-content-center" style={{backgroundColor: color}}>
                <div className="text-center">
                    <p className="mb-0">Weight: {weight}%</p>
                    <p className="mb-0">{color}</p>
                    <p className="mb-0 d-none">{hexString}</p>
                    <p className="mb-0">{hexColor}</p>
                </div>
            </d>
        </div>
    )
}

export default SingleColor;