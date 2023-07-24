import type { NextPage } from "next";

const Cancel: NextPage = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexDirection: "column",
            }}
        >
            <h1>
                Order was cancelled
            </h1>
        </div>
    );
};

export default Cancel;
