
const PageLayout = (props: any) => {
    return (
        <div>
            <a href="/">home</a>
            <a href="/about-me">about me</a>
            <a href="/projects">projects</a>
            {props.children}
        </div>
    )
}

export default PageLayout;