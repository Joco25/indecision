console.log('App.js is running')

//JSX
const appObject = {
    title: 'Yo',
    subtitle: 'Say what???',
    options: ['One', 'Two']
}
const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value
    if (option) {
        appObject.options.push(option)
        e.target.elements.option.value = ' '
        loadnow()
    }
}

const resetAll = () => {
    appObject.options = []
    loadnow()
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObject.options.length)
    const option = appObject.options[randomNum]
    alert(option)
}



const appRoot = document.getElementById('app')

const loadnow = () => {
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            {(appObject.subtitle) && <p>{appObject.subtitle}</p>}
            <p>{appObject.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={appObject.options.length === 0} onClick={makeDecision}>What Should I do</button>
            <button onClick={resetAll}>Remove All</button>
            <ol>
                {
                    appObject.options.map((res) => {
                        return <li key={res}>{res}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button >Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot)
}

loadnow()