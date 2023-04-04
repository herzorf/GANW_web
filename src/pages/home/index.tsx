import http from "../../http"

const XXX = () => {
    const xxx = function () {
        http.get("/test", {
            params: {
                xxx: "xxxx"
            }
        }).then(res => console.log(res))
    }
    return (
        <button onClick={xxx}>http</button>
    )
}

export default XXX