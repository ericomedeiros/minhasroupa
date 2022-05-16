import { styled } from "../stitches.config";

interface CitiesList {
    selectCity: Function,
    cities: {
        name: string,
        lat: DoubleRange,
        lon: DoubleRange,
        country: string,
        state: string,
    }[],

};
const ListCities = styled('ul', {
    backgroundColor: '$elementButton',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    borderColor: '$elementButtonText',
    fontSize: '13px',
    color: '$elementButtonText',
    position: 'relative',
    listStyleType: 'none',
    top: '0px',
    left: '0px',
    width: '100%',
    margin: '0px 1px',
    padding:'0px',
    '& li':{
        padding: '10px',
        borderBottom: '1px black solid'
    },
    '& li:last-child':{
        borderBottom: '0px $elementButtonText solid'
    },
  });
export function CitiesList(params:CitiesList) {
    return (<ListCities>
        {params.cities.map((ele,idx) => (
            <li key={idx} onClick={() => {params.selectCity({lon:ele.lon,lat:ele.lat})}}>
                {`${ele.name} - ${ele.state} - ${ele.country}`}
            </li>
            )
        )}
    </ListCities>);
}