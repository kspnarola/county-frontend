import CircularProgress from '@mui/material/CircularProgress';

interface LoadingProps {
    loading: boolean
}

const Loading = (props: LoadingProps) => {
    return (
        props.loading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }} >
            <h4 style={{ marginRight: "10px" }}>Loading...</h4><CircularProgress color='inherit' size={"24px"} />
        </div > : null
    )
}

export default Loading 