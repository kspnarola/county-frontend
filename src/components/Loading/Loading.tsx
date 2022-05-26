import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = ({ loading = false }: any) => {
    return (
        loading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }} >
            <h4 style={{ marginRight: "10px" }}>Loading...</h4><CircularProgress color='inherit' size={"24px"} />
        </div > : null
    )
}

export default Loading 