export const getData = async (apiKey) => {
    const url = 'https://api.golemio.cz/v2/parkingzones/?latlng=50.08559067975218%2C14.426095125491846&range=5000&limit=12'
    
    try {
        const res = await fetch( url, {
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": apiKey,
                    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZsa2FsZXgubWFpbEBnbWFpbC5jb20iLCJpZCI6MTE3MSwibmFtZSI6bnVsbCwic3VybmFtZSI6bnVsbCwiaWF0IjoxNjQ3NDE4ODY5LCJleHAiOjExNjQ3NDE4ODY5LCJpc3MiOiJnb2xlbWlvIiwianRpIjoiNWIzN2YyZmYtM2Q5Mi00ZDdkLWI4ZjktMDgwZWZhYTBlMTc5In0.6Dbx4s1XRdoyfVB_F6hEq6rmix0bH44h5Z814Qtnhfs
                }
            }
        )
        return res;
    } catch (err) {
        console.log(err)
    }
}


export const loadDetailData = async (id, apiKey) => {
    const url = `https://api.golemio.cz/v2/parkingzones/${id}`

    try {
        const res = await fetch( url, {
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": apiKey,
                    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZsa2FsZXgubWFpbEBnbWFpbC5jb20iLCJpZCI6MTE3MSwibmFtZSI6bnVsbCwic3VybmFtZSI6bnVsbCwiaWF0IjoxNjQ3NDE4ODY5LCJleHAiOjExNjQ3NDE4ODY5LCJpc3MiOiJnb2xlbWlvIiwianRpIjoiNWIzN2YyZmYtM2Q5Mi00ZDdkLWI4ZjktMDgwZWZhYTBlMTc5In0.6Dbx4s1XRdoyfVB_F6hEq6rmix0bH44h5Z814Qtnhfs
                }
            }
        )
        return res;
    } catch (err) {
        console.log(err)
    }
}