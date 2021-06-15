import { useDispatch, useSelector } from 'react-redux';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function City() {
    let dispatch = useDispatch();
    let locationData = useSelector(state => state.cityList);
    let location = useSelector(state => state.location);
    let selectedLocation = location.id > 0 ? `${location.name}` : "";
    let fullLocation = location.id > 0 ? `${location.name}, ${location.stateName}` : "";
    if(!selectedLocation || selectedLocation.length === 0 ) {
        selectedLocation = "Select City";
    }

    const locationHandler = (e) => {
        dispatch({ type: "locationChange", cityId: e.target.id });
        document.querySelector("#closeBtn").click();
    };

    const tooltipOnShow = instance => {
        setTimeout(() => {
            instance.hide();
          }, 5000);
    };

    return (
        <>
            <Tippy hideOnClick={false} onShow={tooltipOnShow} delay={500} content={`Current Location: ${fullLocation}`}>
                <button className="btn btn-outline-dark btn-lg padding5" id="cityBtn" data-toggle="modal" data-target=".modal">
                    {selectedLocation}
                </button>
            </Tippy>
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Select City</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Please select your city</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {locationData.map((city)=>(
                                        <tr key={city.id}>
                                            <td id={city.id} onClick={locationHandler}>
                                                {city.name}, {city.stateName}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" id="closeBtn" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default City;