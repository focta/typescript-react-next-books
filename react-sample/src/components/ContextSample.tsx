import React from 'react'

const TitleContext = React.createContext('')

function Title() {
    return (
        <TitleContext.Consumer>
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

function Header() {
    return (
        <div>
            <Title />
        </div>
    )
}

function Page() {
    const title = 'React Book'

    return(
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}

export default Page