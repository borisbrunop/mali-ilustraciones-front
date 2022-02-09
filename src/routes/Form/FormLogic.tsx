import React, { useCallback, useMemo, useState } from 'react';
import useMainContext from '../../hook/useMainContext'
import {Countries, Cities} from '../../bussiness/interfaces'

export const FormLogic = () => {
    const [country, setCountry] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const c = useMainContext();

    const disableCity = useMemo(() => !country,[country])

    const itemsCo = c.states.countries.map((item: Countries) => ({name: item.name, value: item.name}))

    const handleCities = useCallback(() => {
        
    }, [])
    
    const itemsCi: any = c.states.countries.map((item: any) => item.name === country ? item.cities : false)
    .filter((item) => item)[0]

    const finalCities = itemsCi && itemsCi.map((item :any ) => ({name: item.name, value: item.name}));

    console.log(itemsCi)

    const itemsArray:any = {city: finalCities, country: itemsCo}


  return {country, setCountry, itemsArray, city, setCity, disableCity};
}
