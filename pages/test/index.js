

function Course({ stars }) {
    return (<div>
        <div className="h-36"></div>
        Next stars: {stars}
    </div>
    )
}

Course.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
}

export default Course