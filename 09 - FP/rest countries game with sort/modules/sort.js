export const sortFlags = (flags, order) => {
    const clone = [...flags];

    if(order === 'az') clone.sort((a, b)=> a.getName().localeCompare(b.getName()))
    else if (order === 'za')clone.sort((a, b)=> b.getName().localeCompare(a.getName()))

    return clone;
}

export const filterFlags = (flags, region) =>{

    if(region != 'all') return flags.filter(flag => flag.getRegion().toLowerCase() === region);

    else return [...flags]
}