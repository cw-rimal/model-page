import { version } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import Flexbox from "./Flexbox";

function Model() {
    let dispatch = useDispatch();
    let cities = useSelector(state => state.cityList);
    let location = useSelector(state => state.location);
    let model = useSelector(state => state.modelDetails);
    let versions = useSelector(state => state.versions);
    let selectedVersion = useSelector(state => state.version)

    const locationHandler = (e) => {
        dispatch({ type: "locationChange", cityId: e.target.value });
    }
    const versionHandler = (e) => {
        dispatch({ type: "versionChange", versionId: e.target.value });
    }
    return (
        <>
            <div className="center text-center">
                <a href="https://www.bikewale.com/honda-bikes/activa-6g/">
                    <img className="fit-screen" src="https://imgd.aeplcdn.com/393x221/bw/models/honda-activa-6g-standard20200115132249.jpg?q=85" alt="activa 6g" />
                </a>
                <Flexbox>
                    <span><a href="https://www.bikewale.com/honda-bikes/activa-6g/images/">Images</a></span>
                    <span><a href="https://www.bikewale.com/honda-bikes/activa-6g/colours/">Colours</a></span>
                    <span><a href="https://www.bikewale.com/bike-videos/">Videos</a></span>
                </Flexbox>
                <Flexbox>
                    <b className="font16">{model.name}</b>
                </Flexbox>
                <Flexbox>
                    <div>Rating:&nbsp;<b>{model.rating}</b></div>
                    <div><b>{model.reviewsCount}</b> Reviews</div>
                </Flexbox>
                <Flexbox>
                <select className="custom-selector selector" onChange={versionHandler} value={version.id}>
                    {versions.map((version)=>(
                        <option key={version.id} value={version.id}>{version.name}</option>
                    ))}
                </select>
                <select className="custom-selector selector" value={location.id} onChange={locationHandler}>
                    <option value="0">Select City</option>
                    {cities.map((city)=>(
                        <option key={city.id} value={city.id}>{city.name}</option>
                    ))}
                </select>
                </Flexbox>
                <Flexbox>
                    <b className="font16">{selectedVersion.price}</b>
                    <a className="btn btn-light" href="https://www.bikewale.com/m/pricequote/dealer/?MPQ=Q2l0eUlkPTEmQXJlYUlkPTEmUFFJZD02YjQ3Nzc5Ni1kMzJkLTQyMDUtYTRlMS0xYWEzYjM0OTE1NzYmVmVyc2lvbklkPTUyMzYmRGVhbGVySWQ9MjExODQ=">View Price Breakup</a>
                </Flexbox>
                <Flexbox>
                <p>On-road Price{location.id > 0 && `, ${location.name}`}</p>
                </Flexbox>
                <Flexbox>
                <a href="https://www.bikewale.com/honda-bikes/activa-6g/" className="btn btn-outline-info">Get EMI Offers</a>
                </Flexbox>
            </div>
        </>
    );
}

export default Model;