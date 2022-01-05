const GetMonthName = (month:string) => {
    if(month === '01') return 'Januari'
    if(month === '02') return 'Februari'
    if(month === '03') return 'Mars'
    if(month === '04') return 'April'
    if(month === '05') return 'Maj'
    if(month === '06') return 'Juni'
    if(month === '07') return 'Juli'
    if(month === '08') return 'Augusti'
    if(month === '09') return 'September'
    if(month === '10') return 'Oktober'
    if(month === '11') return 'November'
    if(month === '12') return 'December'
}

export default GetMonthName