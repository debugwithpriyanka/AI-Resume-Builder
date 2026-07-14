function ResultCard({ title, content }) {

    return (

        <div
            style={{
                marginTop:20,
                border:"1px solid #ddd",
                padding:20,
                borderRadius:10
            }}
        >

            <h2>{title}</h2>

            <pre
                style={{
                    whiteSpace:"pre-wrap"
                }}
            >
                {content}
            </pre>

        </div>

    );

}

export default ResultCard;